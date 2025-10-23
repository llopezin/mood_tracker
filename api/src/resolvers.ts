import { GraphQLError } from "graphql";
import { getDateWithoutTime } from "./utils/getDateWithtouTime";

const { generateToken } = require("./utils/generateToken");
const {
  throwExistingUserError,
  throwInternalError,
  throwLoginError,
} = require("./error");
const { queries, executeQuery } = require("./db");
const bcrypt = require("bcrypt");

const {
  getMoods,
  getMoodsByDate,
  getUserByEmail,
  insertUser,
  insertMood,
  getLastMood,
} = queries;

export const resolvers = {
  Query: {
    loginUser: async (_: any, { email, password }: any) => {
      const [user] = await executeQuery(getUserByEmail, [email]);

      if (user.length === 0) return throwLoginError();

      const match = await bcrypt.compare(password, user[0].password);
      if (!match) return throwLoginError();

      return generateToken({ user_id: user[0].user_id });
    },

    getMoods: async (_: any, __: any, context) => {
      const { user_id } = context;
      const [rows] = await executeQuery(getMoods, [user_id]);
      return rows;
    },

    getMoodsByDate: async (_: any, { start, end }: any, context) => {
      const { user_id } = context;
      const [rows] = await executeQuery(getMoodsByDate, [user_id, start, end]);
      return rows;
    },

    getMoodsByMonth: async (_: any, { month, year }: any, context) => {
      const { user_id } = context;
      const start = new Date(year, month - 1, 1);
      const end = new Date(year, month, 0, 23, 59, 59, 999);

      const [rows] = await executeQuery(getMoodsByDate, [user_id, start, end]);
      return rows;
    },

    getTodayMood: async (_: any, __: any, context) => {
      const { user_id } = context;
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      const end = new Date();
      end.setHours(23, 59, 59, 999);

      const [rows] = await executeQuery(getMoodsByDate, [user_id, start, end]);
      return rows[0] || null;
    },
  },

  Mutation: {
    postUser: async (_: any, { email, password }: any) => {
      const [existingUser] = await executeQuery(getUserByEmail, [email]);
      if (existingUser.length > 0) throwExistingUserError();

      const hashedPassword = await bcrypt.hash(password, 10);
      const res = await executeQuery(insertUser, [email, hashedPassword]);

      if (res[0].serverStatus === 2) {
        const [newUser] = await executeQuery(getUserByEmail, [email]);
        const { user_id } = newUser[0];

        return generateToken({ user_id });
      }

      throwInternalError();
    },

    postMood: async (_: any, { mood }: any, { user_id }) => {
      try {
        const lastMoodResponse = await executeQuery(getLastMood, [user_id]);
        const lastMoodDate = lastMoodResponse[0][0]?.date;
        const alreadyPostedToday = lastMoodDate
          ? getDateWithoutTime(lastMoodDate) === getDateWithoutTime(new Date())
          : false;

        if (alreadyPostedToday)
          return new GraphQLError("Reached daily entry limit", {
            extensions: {
              code: "REACHED_DAILY_LIMIT",
            },
          });

        await executeQuery(insertMood, [user_id, mood]);

        return {
          mood,
          user_id,
        };
      } catch (e) {
        return new Error("Internal error");
      }
    },
  },
};

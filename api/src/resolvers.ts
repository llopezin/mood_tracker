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

const { getMoods, getUserByEmail, insertUser, insertMood, getLastMood } =
  queries;

export const resolvers = {
  Query: {
    loginUser: async (_: any, { email, password }: any) => {
      const [user] = await executeQuery(getUserByEmail, [email]);

      // Throw error if user doesn't exist
      if (user.length === 0) return throwLoginError();

      // Throw error if password is incorrect
      const match = await bcrypt.compare(password, user[0].password);
      if (!match) return throwLoginError();

      // On success return token
      return generateToken({ user_id: user[0].user_id });
    },

    getMoods: async (_: any, __: any, context) => {
      const { user_id } = context;
      const [rows] = await executeQuery(getMoods, [user_id]);
      return rows;
    },
  },

  Mutation: {
    postUser: async (_: any, { email, password }: any) => {
      // Thow error if user exists
      const [existingUser] = await executeQuery(getUserByEmail, [email]);
      if (existingUser.length > 0) throwExistingUserError();

      // Create user
      const hashedPassword = await bcrypt.hash(password, 10);
      const res = await executeQuery(insertUser, [email, hashedPassword]);

      // On success return token
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

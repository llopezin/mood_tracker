const { executeQuery, queries } = require("./db");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");
const jwt = require("jsonwebtoken");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: process.env.NODE_ENV === "development",
});

(async () => {
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => {
      const token = req.headers.authorization;
      let user_id;

      if (!token) return {};

      // Verify token
      try {
        user_id = jwt.verify(token, process.env.JWT_SECRET).user_id;
      } catch (err) {
        throw new Error(err);
      }

      // Add user id to context
      return { user_id };
    },
  });
  console.log(`🚀 Server ready at ${url}`);
})();

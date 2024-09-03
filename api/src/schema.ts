// TO DO - convert this file into a graphql schema file

export const typeDefs = `#graphql
  type User  {
    user_id: ID!
    password: String!
    email: String!
  }
  
  type MoodEntry  {
    entry_id: ID!
    user_id: ID!
    mood: Int!
    date: String!
  }

  type PostMoodReturn  {
    mood: Int!
    user_id: ID!
  }

  type LastMood  {
    mood: Int!
    isFromToday: Boolean!
  }

  type Query {
    getUser(user_id: ID!): User
    loginUser(email: String!, password: String!): String
    getMoods: [MoodEntry]
    getLastMood: LastMood
  }

  type Mutation {
    postUser(email: String!, password: String!): String
    postMood(mood: Int!): PostMoodReturn
  }
`;

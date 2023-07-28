const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Challenge {
    question: String
    codeAnswer: String
    status: String
    votes: [Vote]
  }

  type Vote {
    challenge: Challenge
    uniqueness: Boolean
    preference: String
    voter: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(userId: ID!): User

    challenges: [Challenge]!
    challenge(challengeId: ID!): Challenge
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

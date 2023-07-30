const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Challenge {
    _id: ID!
    question: String!
    questionRepoLink: String!
    level: String!
    submissions: [Submission]
  }

  type Submission {
    _id: ID!
    submitter: User
    responseRepoLink: String
    response: String
    votes: [Vote]
  }

  type Vote {
    _id: ID!
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

    addSubmission(
      challengeId: ID!
      submitterId: ID!
      responseRepoLink: String!
      response: String!
    ): Challenge
    removeSubmission(challengeId: ID!, submissionId: ID!): Challenge

    addVote(
      challengeId: ID!
      submissionId: ID!
      uniqueness: Boolean
      preference: String!
      voterId: ID!
    ): Challenge
    removeVote(challengeId: ID!, submissionId: ID!, voteId: ID!): Challenge
  }
`;

module.exports = typeDefs;

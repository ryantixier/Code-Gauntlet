import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      name
    }
  }
`;

export const QUERY_CHALLENGES = gql`
  query challenges {
    challenges {
      _id
      question
      questionCode
      level
      submissions {
        _id
        response
        responseRepoLink
        submitter {
          _id
          name
        }
      }
    }
  }
`;

export const QUERY_CHALLENGE = gql`
  query challenge($challengeId: ID!) {
    challenge(challengeId: $challengeId) {
      _id
      question
      questionCode
      level
      submissions {
        _id
        response
        responseRepoLink
        submitter {
          _id
          name
        }
      }
    }
  }
`;

export const QUERY_SUBMISSIONS = gql`
  query submissions($challengeId: ID!) {
    submissions(challengeId: $challengeId) {
      _id
      response
      responseRepoLink
      submitter {
        _id
        name
      }
      votes {
        _id
        preference
        uniqueness
        voter {
          _id
          name
        }
      }
    }
  }
`;

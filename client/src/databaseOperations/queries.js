import { gql } from "@apollo/client";
//Query user by Id, returning that user's id, name, email, password.
export const QUERY_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      email
      password
    }
  }
`;
//Query and return all challenges with submissions and submitters.
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
//Query a single challenge, returning it and submissions with submitter.
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
//Query all submissions from a single challenge, returning the related submissions with votes and voters.
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

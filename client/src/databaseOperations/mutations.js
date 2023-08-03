import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_SUBMISSION = gql`
  mutation addSubmission(
    $challengeId: ID!
    $submitterId: ID!
    $responseRepoLink: String
    $response: String!
  ) {
    addSubmission(
      challengeId: $challengeId
      submitterId: $submitterId
      responseRepoLink: $responseRepoLink
      response: $response
    ) {
      _id
      level
      question
      questionCode
      submissions {
        _id
        response
        responseRepoLink
        submitter {
          name
        }
      }
    }
  }
`;

export const REMOVE_SUBMISSION = gql`
  mutation removeSubmission($challengeId: ID!, $submissionId: ID!) {
    removeSubmission(challengeId: $challengeId, submissionId: $submissionId) {
      _id
      level
      question
      questionCode
      submissions {
        _id
        response
        responseRepoLink
        submitter {
          name
        }
      }
    }
  }
`;

export const ADD_VOTE = gql`
  mutation addVote(
    $challengeId: ID!
    $submissionId: ID!
    $preference: String!
    $voterId: ID!
    $uniqueness: Boolean
  ) {
    addVote(
      challengeId: $challengeId
      submissionId: $submissionId
      preference: $preference
      voterId: $voterId
      uniqueness: $uniqueness
    ) {
      _id
      level
      questionCode
      question
      submissions {
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
  }
`;

export const REMOVE_VOTE = gql`
  mutation removeVote($challengeId: ID!, $submissionId: ID!, $voteId: ID!) {
    removeVote(
      challengeId: $challengeId
      submissionId: $submissionId
      voteId: $voteId
    ) {
      _id
      level
      questionCode
      question
      submissions {
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
  }
`;

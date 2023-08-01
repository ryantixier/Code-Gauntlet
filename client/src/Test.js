import { useMutation, useQuery } from "@apollo/client";
import {
  QUERY_USER, //good
  QUERY_CHALLENGES, //good
  QUERY_CHALLENGE, //good
  QUERY_SUBMISSIONS, //good
} from "./databaseOperations/queries";
import {
  ADD_USER,
  LOGIN_USER,
  ADD_SUBMISSION,
  removeSubmission,
  addVote,
  removeVote,
} from "./databaseOperations/mutations";
function Test() {
  const { loading: loadingChallenge, data: challengeData } = useQuery(
    QUERY_CHALLENGE,
    {
      variables: {
        challengeId: "64c81329f1b90d5d29cbc25d",
      },
    }
  );
  const { loading: loadingSubmission, data: submissionData } = useQuery(
    QUERY_SUBMISSIONS,
    {
      variables: {
        challengeId: "64c81329f1b90d5d29cbc25d",
      },
    }
  );
  if (loadingChallenge || loadingSubmission) {
    return <>Loadin!</>;
  } else {
    console.log(challengeData);
    console.log(submissionData);
    return <>Check the Logs!</>;
  }
}

export default Test;

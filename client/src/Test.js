import { useMutation, useQuery } from "@apollo/client";
import {
  QUERY_USER,
  QUERY_CHALLENGES,
  QUERY_CHALLENGE,
  QUERY_SUBMISSIONS,
} from "./databaseOperations/queries";
function Test() {
  const { loading, data } = useQuery(QUERY_USER, {
    userId: "64c81328f1b90d5d29cbc253",
  });
  console.log(data);

  return <>{data}</>;
}

export default Test;

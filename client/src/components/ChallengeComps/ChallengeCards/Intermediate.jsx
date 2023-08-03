import * as React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CHALLENGES } from "../../../databaseOperations/queries";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SubmissionModal from "../SubmissionModal";
import PromptModal from "../PromptModal";

export default function Beginner() {
  const { loading, error, data } = useQuery(QUERY_CHALLENGES);
  console.log("this is datum", data);

  return (
    <div className="center">
      {!loading ? (
        <Card>
          <CardContent>
            <Typography>Very Well Done...</Typography>
            <PromptModal
              title={data.challenges[3].question}
              description={data.challenges[3].questionCode}
            />
            <SubmissionModal title={data.challenges[3].question} />
          </CardContent>
        </Card>
      ) : (
        <></>
      )}
      {!loading ? (
        <Card>
          <CardContent>
            <Typography>You've made it this far...</Typography>
            <PromptModal
              title={data.challenges[4].question}
              description={data.challenges[4].questionCode}
            />
            <SubmissionModal title={data.challenges[4].question} />
          </CardContent>
        </Card>
      ) : (
        <></>
      )}
      {!loading ? (
        <Card>
          <CardContent>
            <Typography>Keep going, if you dare...</Typography>
            <PromptModal
              title={data.challenges[6].question}
              description={data.challenges[6].questionCode}
            />
            <SubmissionModal title={data.challenges[6].question} />
          </CardContent>
        </Card>
      ) : (
        <></>
      )}
    </div>
  );
}

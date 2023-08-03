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
            <Typography>Very Impressive...</Typography>
            <PromptModal
              title={data.challenges[5].question}
              description={data.challenges[5].questionCode}
            />
            <SubmissionModal title={data.challenges[5].question} />
          </CardContent>
        </Card>
      ) : (
        <></>
      )}
      {!loading ? (
        <Card>
          <CardContent>
            <Typography>But you're not done yet...</Typography>
            <PromptModal
              title={data.challenges[7].question}
              description={data.challenges[7].questionCode}
            />
            <SubmissionModal title={data.challenges[7].question} />
          </CardContent>
        </Card>
      ) : (
        <></>
      )}
      {!loading ? (
        <Card>
          <CardContent>
            <Typography>Claim the Code Gauntlet!</Typography>
            <PromptModal
              title={data.challenges[8].question}
              description={data.challenges[8].questionCode}
            />
            <SubmissionModal title={data.challenges[8].question} />
          </CardContent>
        </Card>
      ) : (
        <></>
      )}
    </div>
  );
}

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
            <Typography>Welcome to the start of your journey...</Typography>
            <PromptModal
              title={data.challenges[0].question}
              description={data.challenges[0].questionCode}
            />
            <SubmissionModal title={data.challenges[0].question} />
          </CardContent>
        </Card>
      ) : (
        <></>
      )}
      {!loading ? (
        <Card>
          <CardContent>
            <Typography>The path ahead is treacherous...</Typography>
            <PromptModal
              title={data.challenges[1].question}
              description={data.challenges[1].questionCode}
            />
            <SubmissionModal title={data.challenges[1].question} />
          </CardContent>
        </Card>
      ) : (
        <></>
      )}
      {!loading ? (
        <Card>
          <CardContent>
            <Typography>Do you have what it takes?</Typography>
            <PromptModal
              title={data.challenges[2].question}
              description={data.challenges[2].questionCode}
            />
            <SubmissionModal title={data.challenges[2].question} />
          </CardContent>
        </Card>
      ) : (
        <></>
      )}
    </div>
  );
}

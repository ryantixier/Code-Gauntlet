import * as React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CHALLENGES } from "../../../databaseOperations/queries";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SubmissionModal from "../SubmissionModal";
import PromptModal from "../PromptModal";

export default function Beginner({ challenges }) {
  return (
    <div className="center">
      {challenges.map((challenge) => {
        return (
          <Card>
            <CardContent>
              <Typography>Welcome to the start of your journey...</Typography>
              <PromptModal
                title={challenge.question}
                description={challenge.questionCode}
              />
              <SubmissionModal title={challenge.question} />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

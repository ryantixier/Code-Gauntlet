import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SubmissionModal from "../SubmissionModal";
import PromptModal from "../PromptModal";

export default function ChallengeCard({ challenges, platitudes }) {
  return (
    <div className="center">
      {challenges.map((challenge, index) => {
        return (
          <Card>
            <CardContent>
              <Typography>{platitudes[index]}</Typography>
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

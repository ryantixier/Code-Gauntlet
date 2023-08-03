import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SubmissionModal from "../SubmissionModal";
import PromptModal from "../PromptModal";

import authService from "../../../util/auth";

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
              {authService.loggedIn() ? (
                <SubmissionModal
                  title={challenge.question}
                  challengeId={challenge._id}
                  authService={authService}
                />
              ) : (
                <></>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

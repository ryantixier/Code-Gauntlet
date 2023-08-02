import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SubmissionModal from "../SubmissionModal";

export default function ChallengeCard({ question, questionCode }) {
  return (
    <div className="center">
      <Card>
        <CardContent>
          <Typography>Welcome to the start of your journey...</Typography>
        </CardContent>
        <CardContent>
          <SubmissionModal title={question} description={questionCode} />
        </CardContent>
      </Card>
      <Card>
        <CardActions>
          <ButtonGroup>
            <Button size="small">View B2 Prompt</Button>
            <Button size="small" href={SubmissionModal}>
              B2Submit Entry
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </div>
  );
}

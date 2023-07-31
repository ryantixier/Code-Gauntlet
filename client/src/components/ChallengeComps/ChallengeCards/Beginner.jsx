import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SubmissionModal from "../components/ChallengeComps/SubmissionModal";

export default function Beginner() {
  //
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          alt="Beginner 1 Img"
          height="140"
          image=""
          // insert card image path aqui
        ></CardMedia>
        <CardContent>
          <Typography>Welcome to the start of your journey...</Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup>
            <Button size="small">View Prompt</Button>
            {/* link button to modal for challenge prompt */}
            <Button size="small" href={SubmissionModal}>
              Submit Entry
            </Button>
            {/* link button to submission modal */}
          </ButtonGroup>
        </CardActions>
      </Card>
      <Card>
        <CardMedia
          component="img"
          alt="Beginner 2 Img"
          height="140"
          image=""
          // insert card image path aqui
        ></CardMedia>
        <CardContent>
          <Typography>The path ahead is treacherous...</Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup>
            <Button size="small">View Prompt</Button>
            {/* link button to modal for challenge prompt */}
            <Button size="small" href={SubmissionModal}>
              Submit Entry
            </Button>
            {/* link button to modal for challenge prompt */}
          </ButtonGroup>
        </CardActions>
      </Card>
      <Card>
        <CardMedia
          component="img"
          alt="Beginner 3 Img"
          height="140"
          image=""
          // insert card image path aqui
        ></CardMedia>
        <CardContent>
          <Typography>Do you have what it takes?</Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup>
            <Button size="small">View Prompt</Button>
            {/* link button to modal for challenge prompt */}
            <Button size="small" href={SubmissionModal}>
              Submit Entry
            </Button>
            {/* link button to modal for challenge prompt */}
          </ButtonGroup>
        </CardActions>
      </Card>
    </>
  );
}

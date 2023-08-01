import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SubmissionModal from "../SubmissionModal";

// talk to back-end about how to include prompt information
const Advanced1 = `// TODO: Complete the function so that the first six digits of the Fibonacci sequence (0, 1, 1, 2, 3, 5) are returned

    const fibonacci = (n) =>
      Array.from({ length: n })
        .reduce
        // (acc, val, i) =>  Your code here
        ();
    
    fibonacci(6);`;

const Advanced2 = {};
const Advanced3 = {};

export default function Advanced() {
  //
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          alt="Advanced 1 Img"
          height="140"
          image=""
          // insert card image path aqui
        ></CardMedia>
        <CardContent>
          <Typography>Very impressive...</Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup>
            <Button size="small" href={Advanced1}>
              View Prompt
            </Button>
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
          alt="Advanced 2 Img"
          height="140"
          image=""
          // insert card image path aqui
        ></CardMedia>
        <CardContent>
          <Typography>But you're not done yet...</Typography>
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
          alt="Advanced 3 Img"
          height="140"
          image=""
          // insert card image path aqui
        ></CardMedia>
        <CardContent>
          <Typography>
            Defeat these final challenges; claim the Code Gauntlet!
          </Typography>
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

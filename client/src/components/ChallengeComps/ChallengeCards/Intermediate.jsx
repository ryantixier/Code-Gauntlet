import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SubmissionModal from "../SubmissionModal";

const Intermediate1 = {};
const Intermediate2 = {};
const Intermediate3 = {};

export default function Intermediate() {
  //
  return (
    <div className="center">
      <Card>
        <CardContent>
          <Typography>Well Done...</Typography>
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
        <CardContent>
          <Typography>You've made it this far...</Typography>
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
        <CardContent>
          <Typography>Keep going, if you dare...</Typography>
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
    </div>
  );
}

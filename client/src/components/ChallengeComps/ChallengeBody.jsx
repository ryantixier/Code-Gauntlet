import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CHALLENGES } from "../../databaseOperations/queries";

// import accordion from mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

import Beginner from "./ChallengeCards/Beginner";
import Intermdiate from "./ChallengeCards/Intermediate";
import Advanced from "./ChallengeCards/Advanced";

export default function ChallengeBody() {
  // insert menu selector here:
  // (beginner/intermediate/advanced)
  const { loading, error, data } = useQuery(QUERY_CHALLENGES);
  console.log("this is datum", data);
  console.log("dis error", error);
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Beginner</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Beginner />
            {/* insert form for input */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Intermediate</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Intermdiate />
            {/* insert modal form for input */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Advanced</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Advanced />
          {/* insert form for input */}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

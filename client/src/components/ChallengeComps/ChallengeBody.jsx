// import accordion from mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

import ChallengeCard from "./ChallengeCard/ChallengeCard";

import { useQuery } from "@apollo/client";
import { QUERY_CHALLENGES } from "../../databaseOperations/queries";

const beginnerPlatitudes = [
  "Welcome to the start of your journey...",
  "The path ahead is treacherous...",
  "Do you have what it takes?",
];
const intermediatePlatitudes = [
  "Very well done...",
  "You've made it this far...",
  "Keep going, if you dare...",
];
const advancedPlatitudes = [
  "Remember, PAIN is temporary...",
  "Through practice, you gain strength...",
  "There will always be more to overcome.",
];
export default function ChallengeBody() {
  const { loading, error, data } = useQuery(QUERY_CHALLENGES);
  if (!loading) {
    const beginnerChallenges = [];
    const intermediateChallenges = [];
    const advancedChallenges = [];
    data.challenges.map((challenge) => {
      switch (challenge.level) {
        case "Beginner":
          beginnerChallenges.push(challenge);
          break;
        case "Intermediate":
          intermediateChallenges.push(challenge);
          break;
        case "Advanced":
          advancedChallenges.push(challenge);
          break;
        default:
          break;
      }
    });
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
              <ChallengeCard
                challenges={beginnerChallenges}
                platitudes={beginnerPlatitudes}
              />
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
              <ChallengeCard
                challenges={beginnerChallenges}
                platitudes={intermediatePlatitudes}
              />
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
            <ChallengeCard
              challenges={beginnerChallenges}
              platitudes={advancedPlatitudes}
            />
          </AccordionDetails>
        </Accordion>
      </>
    );
  } else {
    return <div>Loading Challenges...</div>;
  }
}

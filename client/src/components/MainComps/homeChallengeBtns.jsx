import React from "react";
import Button from "@mui/material/Button";
import { animate, delay, motion } from "framer-motion";

export default function HomeChallengeBtns() {
  let divVariants = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: "2",
      },
    },
  };

  return (
    <motion.div
      variants={divVariants}
      initial="start"
      animate="finished"
      className="flex around"
    >
      <Button className="exampleButton">Try Beginner</Button>
      <Button className="exampleButton">Try Intermediate</Button>
      <Button className="exampleButton">Try Hard</Button>
    </motion.div>
  );
}

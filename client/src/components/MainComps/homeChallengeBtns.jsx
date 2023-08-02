import { useState } from "react";
import Button from "@mui/material/Button";
import { animate, delay, motion } from "framer-motion";

export default function HomeChallengeBtns() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const show = {
    opacity: 1,
    display: "block",
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  };

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

  let buttonVariants = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={divVariants}
      initial="start"
      animate="finished"
      className="flex around column"
    >
      <div className="flex">
        <motion.div variants={buttonVariants}>
          <Button
            className="exampleButton"
            onClick={() => setIsVisible(!isVisible)}
          >
            Try Beginner
          </Button>
        </motion.div>

        <motion.div variants={buttonVariants}>
          <Button
            variants={buttonVariants}
            className="exampleButton"
            onClick={() => setIsVisible2(!isVisible2)}
          >
            Try Intermediate
          </Button>
        </motion.div>

        <motion.div variants={buttonVariants}>
          <Button
            variants={buttonVariants}
            className="exampleButton"
            onClick={() => setIsVisible3(!isVisible3)}
          >
            Try Hard
          </Button>
        </motion.div>
      </div>

      <div className="center flex">
        <motion.div animate={isVisible ? show : hide}>Hello</motion.div>
        <motion.div animate={isVisible2 ? show : hide}>World</motion.div>
        <motion.div animate={isVisible3 ? show : hide}>!</motion.div>
      </div>
    </motion.div>
  );
}

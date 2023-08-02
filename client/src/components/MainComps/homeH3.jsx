import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { animate, delay, motion } from "framer-motion";

function HomeH3Motion() {
  let h1Variants = {
    start: { opacity: 0, scaleX: 0 },
    finished: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: "0.3",
        scaleX: {
          duration: 1,
          ease: "easeOut",
          type: "spring",
        },
      },
    },
  };

  let h3Variants = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  let h3Variants2 = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  let h3Variants3 = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 1.5,
      },
    },
  };

  return (
    <>
      <motion.h1
        variants={h1Variants}
        initial="start"
        animate="finished"
        className="center h1"
      >
        Welcome to the Code Gauntlet
      </motion.h1>
      <div className="flex around" style={{ width: "100vw" }}>
        <motion.h3
          variants={h3Variants}
          initial="start"
          animate="finished"
          className="center"
        >
          Get Challenged.
        </motion.h3>
        <motion.h3
          variants={h3Variants2}
          initial="start"
          animate="finished"
          className="center"
        >
          Win Challenges.
        </motion.h3>
        <motion.h3
          variants={h3Variants3}
          initial="start"
          animate="finished"
          className="center"
        >
          Challenge Others.
        </motion.h3>
      </div>
    </>
  );
}

export default HomeH3Motion;

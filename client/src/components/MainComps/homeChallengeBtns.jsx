import { useState } from "react";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
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
    transition: {
      duration: 0,
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
            onClick={() => {
              setIsVisible2(false);
              setIsVisible3(false);
              setIsVisible(!isVisible);
            }}
          >
            Try Beginner
          </Button>
        </motion.div>

        <motion.div className="divSpacing" variants={buttonVariants}>
          <Button
            variants={buttonVariants}
            className="exampleButton"
            onClick={() => {
              setIsVisible(false);
              setIsVisible3(false);
              setIsVisible2(!isVisible2);
            }}
          >
            Try Intermediate
          </Button>
        </motion.div>

        <motion.div variants={buttonVariants}>
          <Button
            variants={buttonVariants}
            className="exampleButton"
            onClick={() => {
              setIsVisible2(false);
              setIsVisible(false);
              setIsVisible3(!isVisible3);
            }}
          >
            Try Hard
          </Button>
        </motion.div>
      </div>

      <div className="around flex">
        <motion.div className="z12" animate={isVisible ? show : hide}>
          <pre>
            <code>
              {`// TODO: Rewrite the following Event Listener using arrow functions

const toggleElements = document.querySelectorAll(".toggle");
toggleElements.forEach(function () {
  el.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});`}
            </code>
          </pre>
          {/* <ContentCopyIcon
            onClick={() => {
              navigator.clipboard.writeText(this.textToCopy);
            }}
          ></ContentCopyIcon> */}
        </motion.div>
        <motion.div animate={isVisible2 ? show : hide}>
          <pre>
            <code>
              {`// TODO: Finish the function below so the the string "is passed" is successfully written to testFile.json

const fs = require("fs");

const JSONToFile = (obj, filename) =>
  // Your code here

  JSONToFile({ test: "is passed" }, "testFile");
`}
            </code>
          </pre>
        </motion.div>
        <motion.div animate={isVisible3 ? show : hide}>
          <pre>
            <code>
              {`// TODO: Complete the function so that the first six digits of the Fibonacci sequence (0, 1, 1, 2, 3, 5) are returned

const fibonacci = (n) => {
  // Your code here
};`}
            </code>
          </pre>
        </motion.div>
      </div>
    </motion.div>
  );
}

import { Sidebar, Menu } from "react-pro-sidebar";
import "../styles/Profile.css";
import authService from "../util/auth";
import { animate, delay, motion } from "framer-motion";

export default function Profile() {
  let linkVariants = {
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

  let linkVariants2 = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.8,
      },
    },
  };

  let linkVariants3 = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 1.1,
      },
    },
  };
  let linkVariants4 = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 1.4,
      },
    },
  };

  let linkVariants5 = {
    start: { opacity: 0 },
    finished: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 1.7,
      },
    },
  };

  const profile = authService.getUser().data;
  return (
    <div className="pageDiv">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#ffc857" }}>
          Welcome, <span style={{ color: "#46120a" }}>{profile.name}</span>{" "}
        </h1>
        <h2 style={{ color: "#46120a", marginTop: "60px" }}>
          Click "Try a Challenge" above to jump into the action!
        </h2>
        <div style={{ margin: "60px" }}></div>
        <h3 style={{ marginTop: "60px" }}>
          Check Out These Coding Resources to Hone Your Skills
        </h3>
        <div className="flex around">
          <motion.a
            variants={linkVariants}
            initial="start"
            animate="finished"
            href="https://www.w3schools.com/"
            className="resourceLink"
          >
            W3 Schools
          </motion.a>
          <motion.a
            variants={linkVariants2}
            initial="start"
            animate="finished"
            href="https://developer.mozilla.org/en-US/"
            className="resourceLink"
          >
            MDN Web Docs
          </motion.a>
          <motion.a
            variants={linkVariants3}
            initial="start"
            animate="finished"
            href="https://www.30secondsofcode.org/"
            className="resourceLink"
          >
            30 Seconds of Code
          </motion.a>
          <motion.a
            variants={linkVariants4}
            initial="start"
            animate="finished"
            href="https://unix.stackexchange.com/questions/tagged/javascript"
            className="resourceLink"
          >
            Stack Exchange
          </motion.a>
          <motion.a
            variants={linkVariants5}
            initial="start"
            animate="finished"
            href="https://stackoverflow.com/"
            className="resourceLink"
          >
            Stack Overflow
          </motion.a>
        </div>
      </div>
    </div>
  );
}

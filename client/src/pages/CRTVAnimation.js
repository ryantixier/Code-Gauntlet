import { motion, useAnimate } from "framer-motion";
import "./CRTVAnimation.css";
import { useState } from "react";

function Main() {
  //https://www.google.com/search?q=crtv+turn+on+animation&rlz=1C1ONGR_enUS1055US1055&oq=crtv+turn+on+animation&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIMCAEQABgKGLEDGIAEMgcIAhAAGIAEMgkIAxAAGAoYgAQyCQgEEAAYChiABDIJCAUQABgKGIAEMgkIBhAAGAoYgAQyCQgHEAAYChiABDIJCAgQABgKGIAEMgwICRAAGAoYsQMYgATSAQgzNTU3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:df2788bf,vid:quZcWPfBeJw
  //initially horizonal bar stretching across the screen
  //bar opacity @ 0 and at the same time do a circOut ease
  // fuzz the circle
  const [scope, animate] = useAnimate();
  //animate(scope.current, { opacity: 1 }, { scale: 1 });
  const [shape, setshape] = useState("box");
  const [duration, setDuration] = useState(1);

  return (
    <>
      <motion.div
        class={shape}
        ref={scope}
        initial={{ opacity: 0, scale: 0.01 }}
        animate={{
          opacity: [0.25, 0.5, 0.75, 1],
          scale: [0.25, 0.5, 0.75, 1, 1, 1, 1],
          borderRadius: ["0%", "0%", "50%", "50%"],
          height: ["10vw", "20vw", "90vw", "90vw"],
        }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: "circOut",
        }}
      />
    </>
  );
}

export default Main;

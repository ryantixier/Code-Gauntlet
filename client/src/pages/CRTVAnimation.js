import { motion } from "framer-motion";
import "./CRTVAnimation.css";

function Main() {
  return (
    <motion.div class="circle" animate={{ x: 100 }} transition={{ delay: 1 }} />
  );
}

export default Main;

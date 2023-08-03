import Box from "@mui/material/Box";
import NavDrawerMobile from "./MobileNavDrawer.tsx";
import { animate, motion } from "framer-motion";

const divVariants = {
  start: { opacity: 0 },
  finished: {
    opacity: 1,

    transition: {
      duration: 0.75,
      ease: "easeInOut",
      delay: 1.5,
    },
  },
};

export default function NavItemsMobile() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", md: "none" },
        justifyContent: "end",
      }}
    >
      <motion.div variants={divVariants} initial="start" animate="finished">
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <NavDrawerMobile />
        </Box>
      </motion.div>
    </Box>
  );
}

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import { animate, motion } from "framer-motion";

export default function NavItemsDesktop() {
  return (
    <div>
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          textAlign: "center",
        }}
      >
        <Link className="navLink" to="/challenge">
          <Button
            sx={{
              color: "#F5F5F5",
              display: "flex",
              fontFamily: "Raleway",
              marginX: "1rem",
              fontWeight: 300,
              maxHeight: "100px",
              whiteSpace: "nowrap",
              flexGrow: 1,
              borderRadius: "20%",
            }}
            fullWidth={true}
          >
            TRY A CHALLENGE
          </Button>
        </Link>
        <Link className="navLink" to="/Leaderboard">
          <Button
            sx={{
              color: "#F5F5F5",
              display: "flex",
              fontFamily: "Raleway",
              marginX: "1rem",
              fontWeight: 300,
              maxHeight: "100px",
              whiteSpace: "nowrap",
              flexGrow: 1,
              borderRadius: "20%",
            }}
            fullWidth={true}
          >
            LEADERBOARD
          </Button>
        </Link>
        <Link className="navLink" to="/signup">
          <Button
            sx={{
              color: "#F5F5F5",
              display: "flex",
              fontFamily: "Raleway",
              marginX: "1rem",
              fontWeight: 300,
              maxHeight: "100px",
              whiteSpace: "nowrap",
              flexGrow: 1,
              borderRadius: "20%",
            }}
            fullWidth={true}
          >
            SIGN UP
          </Button>
        </Link>
        <Link className="navLink" to="/signin">
          <Button
            sx={{
              color: "#F5F5F5",
              display: "flex",
              fontFamily: "Raleway",
              marginX: "1rem",
              fontWeight: 300,
              maxHeight: "100px",
              whiteSpace: "nowrap",
              flexGrow: 1,
              borderRadius: "20%",
            }}
            fullWidth={true}
          >
            SIGN IN
          </Button>
        </Link>
      </Box>
    </div>
  );
}

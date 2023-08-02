import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
// import { animate, motion } from "framer-motion";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NavItemsDesktop() {
  const [signUpModalOpen, setSignUpModalOpen] = React.useState(false);
  const handleSignUpModalOpen = () => setSignUpModalOpen(true);
  const handleSignUpModalClose = () => setSignUpModalOpen(false);

  const [signInModalOpen, setSignInModalOpen] = React.useState(false);
  const handleSignInModalOpen = () => setSignInModalOpen(true);
  const handleSignInModalClose = () => setSignInModalOpen(false);

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
            onClick={handleSignUpModalOpen}
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
          <Modal
            open={signUpModalOpen}
            onClose={handleSignUpModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                SIGN UP
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </Link>
        <Link className="navLink" to="/signin">
          <Button
            onClick={handleSignInModalOpen}
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
          <Modal
            open={signInModalOpen}
            onClose={handleSignInModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                SIGN IN
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </Link>
      </Box>
    </div>
  );
}

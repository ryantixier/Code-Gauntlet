import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import HomeSignup from "../MainComps/homeSignup";
import HomeSignIn from "../MainComps/homeSignIn";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormControls } from "../MainComps/formValidation.tsx";
// import { animate, motion } from "framer-motion";

// const DialogueStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

export default function NavItemsDesktop() {
  const [signUpDialogueOpen, setSignUpDialogueOpen] = React.useState(false);
  const handleSignUpDialogueOpen = () => setSignUpDialogueOpen(true);
  const handleSignUpDialogueClose = () => setSignUpDialogueOpen(false);

  const [signInDialogueOpen, setSignInDialogueOpen] = React.useState(false);
  const handleSignInDialogueOpen = () => setSignInDialogueOpen(true);
  const handleSignInDialogueClose = () => setSignInDialogueOpen(false);

  // const { handleInputValue, handleFormSubmit, formIsValid, errors } =
  //   useFormControls();

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
            onClick={handleSignUpDialogueOpen}
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
          <Dialog open={signUpDialogueOpen} onClose={handleSignUpDialogueClose}>
            <DialogTitle>SIGN UP</DialogTitle>
            <DialogContent>
              <HomeSignup />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSignUpDialogueClose}>Cancel</Button>
              <Button
                type="inherit"
                onClick={handleSignUpDialogueClose}
                // disabled={!formIsValid()}
              >
                {/* CHANGE button's onClick to link to db */}
                Sign Up
              </Button>
            </DialogActions>
          </Dialog>
        </Link>
        <Link className="navLink" to="/signin">
          <Button
            onClick={handleSignInDialogueOpen}
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
          <Dialog open={signInDialogueOpen} onClose={handleSignInDialogueClose}>
            <DialogTitle>SIGN IN</DialogTitle>
            <DialogContent>
              <HomeSignIn />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSignInDialogueClose}>Cancel</Button>
              <Button
                type="inherit"
                // disabled={!formIsValid()}
                onClick={handleSignInDialogueClose}
              >
                {/* CHANGE button's onClick to link to db */}
                Sign In
              </Button>
            </DialogActions>
          </Dialog>
        </Link>
      </Box>
    </div>
  );
}

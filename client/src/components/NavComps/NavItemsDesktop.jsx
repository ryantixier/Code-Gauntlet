import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import HomeSignup from "../MainComps/homeSignup";
import HomeSignIn from "../MainComps/homeSignIn";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormControls } from "../MainComps/formValidation.tsx";
import authService from "../../util/auth";
// import { animate, motion } from "framer-motion";

export default function NavItemsDesktop() {
  const [signUpDialogueOpen, setSignUpDialogueOpen] = React.useState(false);
  const handleSignUpDialogueOpen = () => setSignUpDialogueOpen(true);
  const handleSignUpDialogueClose = () => setSignUpDialogueOpen(false);

  const [signInDialogueOpen, setSignInDialogueOpen] = React.useState(false);
  const handleSignInDialogueOpen = () => setSignInDialogueOpen(true);
  const handleSignInDialogueClose = () => setSignInDialogueOpen(false);

  const { formIsValid } = useFormControls();

  return (
    <div>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
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
        {authService.loggedIn() ? (
          <Link className="navLink" to="/Profile">
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
              PROFILE
            </Button>
          </Link>
        ) : (
          <></>
        )}
        <Button
          onClick={handleSignUpDialogueOpen}
          sx={{
            color: "#46130B",
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
            <HomeSignup
              buttons={
                <DialogActions>
                  <Button onClick={handleSignUpDialogueClose}>Cancel</Button>
                  <Button
                    // type="inherit"
                    onClick={handleSignUpDialogueClose}
                    type="submit"
                  >
                    {/* CHANGE button's onClick to link to db */}
                    Sign Up
                  </Button>
                </DialogActions>
              }
            />
          </DialogContent>
        </Dialog>

        <Button
          onClick={handleSignInDialogueOpen}
          sx={{
            color: "#46130B",
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
            <HomeSignIn
              buttons={
                <DialogActions>
                  <Button onClick={handleSignInDialogueClose}>Cancel</Button>
                  <Button type="submit" onClick={handleSignInDialogueClose}>
                    {/* CHANGE button's onClick to link to db */}
                    Sign In
                  </Button>
                </DialogActions>
              }
            />
          </DialogContent>
        </Dialog>
      </Box>
    </div>
  );
}

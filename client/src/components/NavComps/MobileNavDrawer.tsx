import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import HomeSignup from "../MainComps/homeSignup";
import HomeSignIn from "../MainComps/homeSignIn";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormControls } from "../MainComps/formValidation.tsx";
// import { animate, motion } from "framer-motion";

function NavDrawerMobile() {
  const [signUpDialogueOpen, setSignUpDialogueOpen] = React.useState(false);
  const handleSignUpDialogueOpen = () => setSignUpDialogueOpen(true);
  const handleSignUpDialogueClose = () => setSignUpDialogueOpen(false);

  const [signInDialogueOpen, setSignInDialogueOpen] = React.useState(false);
  const handleSignInDialogueOpen = () => setSignInDialogueOpen(true);
  const handleSignInDialogueClose = () => setSignInDialogueOpen(false);

  const { formIsValid } = useFormControls();

  const [openDrawer, setOpenDrawer] = useState<boolean | false>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      } else if (
        event &&
        event.type === "keydown" &&
        (event as React.KeyboardEvent).key === "Esc"
      ) {
        setOpenDrawer(false);
      }

      setOpenDrawer(true);
      {
        return;
      }
    };

  const list = (
    <Box
      sx={{ flexDirection: "column" }}
      role="presentation"
      onClick={toggleDrawer(true)}
      onKeyDown={toggleDrawer(true)}
    >
      <Link to="/challenge" className="mobileLink">
        <Button
          onClick={() => setOpenDrawer(false)}
          sx={{
            color: "#F5F5F5",
            display: "flex",
            fontFamily: "Raleway",
            marginX: "1rem",
            marginY: 1,
            fontWeight: 300,
            maxHeight: "100px",
            flexGrow: 1,
            borderRadius: "20%",
          }}
          fullWidth={true}
        >
          Try a Challenge
        </Button>
      </Link>

      <Link to="/profile" className="mobileLink">
        <Button
          onClick={() => setOpenDrawer(false)}
          sx={{
            color: "#F5F5F5",
            display: "flex",
            fontFamily: "Raleway",
            marginX: "1rem",
            marginY: 1,
            fontWeight: 300,
            maxHeight: "100px",
            flexGrow: 1,
            borderRadius: "20%",
          }}
          fullWidth={true}
        >
          Profile
        </Button>
      </Link>

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
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon className="menuIcon" />
      </Button>

      <SwipeableDrawer
        open={openDrawer}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
        onClick={(event) => {
          event.stopPropagation();
        }}
        anchor="right"
        // variant="temporary"
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
        }}
      >
        {list}
      </SwipeableDrawer>
    </div>
  );
}

export default NavDrawerMobile;

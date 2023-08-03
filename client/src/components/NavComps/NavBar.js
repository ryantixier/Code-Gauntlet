// non-animated imports
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
// import NavItemsMobile from "./navMobileMotionComponents/navItemsMobile";
import NavLogo from "./NavLogo";
import NavItemsDesktop from "./NavItemsDesktop";
import NavItemsMobile from "./NavItemsMobile";
// import LogoFadeMobile from "./navMobileMotionComponents/logoFadeMobile";

function ResponsiveAppBar() {
  return (
    <AppBar position="static" className="appbar">
      <Toolbar className="toolbar" disableGutters>
        <Box
          sx={{
            width: 1,
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <NavLogo />
          {/* <LogoFadeDesktop /> */}
          {/* <LogoFadeMobile /> */}

          <NavItemsDesktop />
          <NavItemsMobile />
          {/* <Footer /> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;

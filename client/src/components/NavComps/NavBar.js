// non-animated imports
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
// import NavItemsMobile from "./navMobileMotionComponents/navItemsMobile";

//animated imports
// import LeftCurlyMotion from "./navDeskMotionComponents/leftCurlyMotion";
// import RightCurlyMotion from "./navDeskMotionComponents/rightCurlyMotion";
// import LeftCurlyMotionFinal from "./navDeskMotionComponents/leftCurlyMotionFinal";
// import RightCurlyMotionFinal from "./navDeskMotionComponents/rightCurlyMotionFinal";
// import LetteringMotion from "./navDeskMotionComponents/letteringMotion";
// import LogoFadeDesktop from "./navDeskMotionComponents/logoTextFragment";
import NavItemsDesktop from "./NavItemsDesktop";
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <LeftCurlyMotionFinal /> */}

          {/* <LogoFadeDesktop /> */}
          {/* <LogoFadeMobile /> */}

          {/* <LeftCurlyMotion /> */}

          {/* <LetteringMotion /> */}

          {/* <RightCurlyMotion /> */}

          <NavItemsDesktop />
          {/* <NavItemsMobile /> */}

          {/* <RightCurlyMotionFinal /> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;

import React from "react";
import NavBar from "../components/NavComps/NavBar";
import ChallengeHeader from "../components/ChallengeComps/ChallengeHeader";
import ChallengeBody from "../components/ChallengeComps/ChallengeBody";
import { Container } from "@mui/material";

export default function Challenge() {
  // styling/formatting here; ref wireframe

  return (
    <>
      {/* Start Sidebar */}
      {/* <NavBar /> */}
      {/* End Sidebar */}
      {/* <ChallengeHeader />; */}
      <div className="container">
        <ChallengeBody />
      </div>
    </>
  );
}

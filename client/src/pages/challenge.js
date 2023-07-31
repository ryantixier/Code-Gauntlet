import React from "react";
import { NavBar } from "../components/NavComps/NavBar";
import { ChallengeHeader } from "../components/ChallengeComps/ChallengeHeader";
import { ChallengeBody } from "../components/ChallengeComps/ChallengeBody";

export default function Challenge() {
  // styling/formatting here; ref wireframe

  return (
    <>
      {/* Start Sidebar */}
      <NavBar />
      {/* End Sidebar */}
      <ChallengeHeader />;
      <ChallengeBody />;
    </>
  );
}

test;

import React, { useState } from "react";
import "../styles/Main.css";
import HomeChallengeBtns from "../components/MainComps/homeChallengeBtns";
import HomeSignIn from "../components/MainComps/homeSignIn";
import HomeSignup from "../components/MainComps/homeSignup";
import HomeImg from "../components/MainComps/homeImg";

function Main() {
  return (
    <div className="container">
      <canvas id="canvas-complex"></canvas>
      <HomeImg />
      <h1>Code Gauntlet</h1>
      <div>
        <div className="container">
          <p>
            Code Gauntlet is a free interactive space to not only challenge your
            coding skills but your friends as well. Sign up to take full
            advantage of our features
          </p>
        </div>
        <div className="elementsWrapper">
          <HomeChallengeBtns />
          <HomeSignIn />
          <HomeSignup />
        </div>
      </div>

      <div>About:Benefits to signing up, basic layout of challenges, etc</div>
    </div>
  );
}

export default Main;

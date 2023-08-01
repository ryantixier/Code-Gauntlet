import React, { useState } from "react";
import HomeChallengeBtns from "../components/MainComps/homeChallengeBtns";
import HomeSignIn from "../components/MainComps/homeSignIn";
import HomeSignup from "../components/MainComps/homeSignup";
import HomeImg from "../components/MainComps/homeImg";

function Main() {
  return (
    <div>
      {/* <canvas id="canvas-complex"></canvas> */}
      <HomeImg />
      <div className="pageDiv">
        <div className="container">
          <h1>Code Gauntlet</h1>
          <p>
            Code Gauntlet is a free interactive space to not only challenge your
            coding skills but your friends as well. Sign up to take full
            advantage of our features
          </p>
          <HomeChallengeBtns />
          <HomeSignIn />
          <HomeSignup />
        </div>
        {/* <div className="elementsWrapper"> */}
        {/* </div> */}
      </div>

      {/* <div>About:Benefits to signing up, basic layout of challenges, etc</div> */}
    </div>
  );
}

export default Main;

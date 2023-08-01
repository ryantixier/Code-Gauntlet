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
          <h1 className="center">Code Gauntlet</h1>
          <div className="flex around">
            <h3 className="center">Get Challenged.</h3>
            <h3 className="center">Win Challenges.</h3>
            <h3 className="center">Challenge Others.</h3>
          </div>
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

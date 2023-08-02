import React, { useState } from "react";
import HomeChallengeBtns from "../components/MainComps/homeChallengeBtns";
import HomeImg from "../components/MainComps/homeImg";
import HomeH3Motion from "../components/MainComps/homeH3";

function Main() {
  return (
    <div>
      {/* <canvas id="canvas-complex"></canvas> */}
      <HomeImg />
      <div className="pageDiv">
        <div>
          <HomeH3Motion />
          <div style={{ margin: "60px" }}></div>
          <HomeChallengeBtns />
        </div>
      </div>
    </div>
  );
}

export default Main;

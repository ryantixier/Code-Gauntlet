import React from "react";
import { Sidebar, Menu } from "react-pro-sidebar";
import "../styles/Profile.css";
// import { userName } from "../../../server/models/User";

export default function Profile() {
  //eventuall username variable to populate profile header space
  return (
    <div>
      {" "}
      <Sidebar>
        <Menu iconShape="circle">Profile</Menu>
        <Menu iconShape="circle">Compete</Menu>
        <Menu iconShape="circle">Leaderboards</Menu>
        <Menu iconShape="circle">Vote</Menu>
      </Sidebar>
      <div>
        {/* <h1>Welcome {userName} </h1> */}
        <div>About User</div>
        <div>Coding Suggestions/Resources</div>
      </div>
    </div>
  );
}

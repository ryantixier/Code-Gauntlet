import React from "react";
import { Sidebar, Menu } from "react-pro-sidebar";

export default function Profile() {
  let username = "Jim";
  //eventuall username variable to populate profile header space
  return (
    <div>
      {" "}
      <Sidebar>
        <Menu>Profile</Menu>
        <Menu>Compete</Menu>
        <Menu>Leaderboards</Menu>
        <Menu>Vote</Menu>
      </Sidebar>
      <div>
        <h1>Welcome {username} </h1>
        <div>About User</div>
        <div>Coding Suggestions/Resources</div>
      </div>
    </div>
  );
}
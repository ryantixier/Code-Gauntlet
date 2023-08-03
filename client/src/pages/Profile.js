import { Sidebar, Menu } from "react-pro-sidebar";
import "../styles/Profile.css";
import authService from "../util/auth";

export default function Profile() {
  const profile = authService.getUser().data;
  return (
    <div>
      {" "}
      {/* <Sidebar>
        <Menu iconShape="circle">Profile</Menu>
        <Menu iconShape="circle">Compete</Menu>
        <Menu iconShape="circle">Leaderboards</Menu>
        <Menu iconShape="circle">Vote</Menu>
      </Sidebar>
      <div> */}
      <h1>Welcome {profile.name} </h1>
      <div>About User</div>
      <div>Coding Suggestions/Resources</div>
      {/* </div> */}
    </div>
  );
}

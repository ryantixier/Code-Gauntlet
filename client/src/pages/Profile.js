import { Sidebar, Menu } from "react-pro-sidebar";
import "../styles/Profile.css";
import authService from "../util/auth";
import HomeSignIn from "../components/MainComps/homeSignIn";

export default function Profile() {
  if (!authService.loggedIn()) {
    return <HomeSignIn />;
  }
  const profile = authService.getUser().data;
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
        <h1>Welcome {profile.name} </h1>
        <div>About User</div>
        <div>Coding Suggestions/Resources</div>
      </div>
    </div>
  );
}

import { useQuery } from "react";
import { Sidebar, Menu } from "react-pro-sidebar";
import styles from "../styles/Profile.css";
import { QUERY_USER } from "../databaseOperations/queries";

export default function Profile() {
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: 6969 },
  });

  return (
    <>
      <div>
        <Sidebar>
          <Menu iconShape="circle">Profile</Menu>
          <Menu iconShape="circle">Compete</Menu>
          <Menu iconShape="circle">Leaderboards</Menu>
          <Menu iconShape="circle">Vote</Menu>
        </Sidebar>
        <div>
          <h1>Welcome {QUERY_USER} </h1>
          <div>About User</div>
          <div>Coding Suggestions/Resources</div>
        </div>
      </div>
    </>
  );
}

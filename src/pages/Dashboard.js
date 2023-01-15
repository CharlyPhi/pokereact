import React from "react";
import Favorites from "../components/Favorites";

export default function Dashboard({ loggedInStatus }) {
  return (
    <div>
      {loggedInStatus && (
        <div className="dashboard">
          <h1>Dashboard</h1>
          <h1>Status:{loggedInStatus.Status}</h1>
          <h1>User_id:{loggedInStatus.user.id}</h1>
          <Favorites loggedInStatus={loggedInStatus} />

        </div>
      )}
    </div>
  );
}


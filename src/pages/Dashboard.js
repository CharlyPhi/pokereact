import React from "react";

const Dashboard = ({loggedInStatus}) => {
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <h1>Status:{loggedInStatus.Status}</h1>
      </div>
    </div>
  );
};

export default Dashboard;

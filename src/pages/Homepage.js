import React from "react";
import { useNavigate } from "react-router-dom";
import Registration from "../components/auth/Registration";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";

document.body.style.zoom = "110%";
document.body.style.backgroundColor = "rgb(100,231,242,255)";

export default function Homepage(loggedInStatus) {
  const navigate = useNavigate();

  const handleSuccessfulAuth = () => {
    navigate("/Dashboard");
  };

  return (
    <div>
      <Navigation />
      <div className="banner"></div>
      <div>
        <h2>Status: {loggedInStatus.Status}</h2>
      </div>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <SearchBar />
    </div>
  );
}

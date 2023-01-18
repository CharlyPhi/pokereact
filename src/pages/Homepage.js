import React from "react";
import { useNavigate } from "react-router-dom";
import Registration from "../components/auth/Registration";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import Login from "../components/auth/Login";
import axios from "axios";

document.body.style.zoom = "110%";
document.body.style.backgroundColor = "rgb(100,231,242,255)";

export default function Homepage({
  loggedInStatus,
  handleLogin,
  handleLogout,
}) {
  const navigate = useNavigate();

  const handleSuccessfulAuth = (data) => {
    handleLogin(data);
    navigate("/Dashboard");
  };

  const clickToLogout = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((res) => {
        handleLogout();
      })
      .catch((error) => {
        console.log("logout error", error);
      });
  };

  return (
    <div>
      <Navigation />
      <div>
        {loggedInStatus && (
          <div>
            <h1>You are currently {loggedInStatus.Status}</h1>
          </div>
        )}
      </div>

      <div className="Registration">
        <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      </div>

      <div className="Login">
        <Login handleSuccessfulAuth={handleSuccessfulAuth} />
      </div>

      <button className="button-10" onClick={() => clickToLogout()}>
        Log out
      </button>

      <div className="SearchBar">
        <SearchBar />
      </div>
    </div>
  );
}

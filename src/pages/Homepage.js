import React, { useState } from "react";
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
  const username = loggedInStatus.user.username;
  let [registered, setRegistered] = useState(false);

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

  const loginRegisterSwitch = () => {
    setRegistered(!registered);
    return registered;
  };

  return (
    <div className="homepage">
      <Navigation />
      <div className="banner"></div>
      <div className="forms">
        {username && (
          <div>
            <button className="button-10" onClick={() => clickToLogout()}>
              Log out
            </button>
          </div>
        )}

        {registered && (
          <div className="Login_form">
            <Login handleSuccessfulAuth={handleSuccessfulAuth} />
            <button className="button-10" onClick={() => loginRegisterSwitch()}>
              Not registered yet ?
            </button>
          </div>
        )}
        <div>
          {!registered &&
            (!username && (
              <div className="not_logged">
                <h1>Please register</h1>

                <div className="Registration_form">
                  <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
                </div>
                <h1>If you already have an account click here to Log in.</h1>
                <button
                  className="button-10"
                  onClick={() => loginRegisterSwitch()}
                >
                  Go to Log IN
                </button>
              </div>
            ))}
        </div>

        <div>{username && <SearchBar />}</div>
      </div>
    </div>
  );
}

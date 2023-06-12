import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Registration from "../components/auth/Registration";
import Navigation from "../components/Navigation";
import Login from "../components/auth/Login";
import axios from "axios";


document.body.style.zoom = "110%";
document.body.style.backgroundColor = "rgb(100,231,242,255)";

export default function Homepage({
  loggedInStatus,
  loggedInStatusStatus,
  handleLogin,
  handleLogout,
}) {
  const navigate = useNavigate();
  // const username = loggedInStatus.user.username;
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
        {loggedInStatusStatus === 'Logged_in' && (
          <div className='logout'>
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

          {!registered &&
            ((
              <div className="not_logged">
                <h1>First time ?</h1>

                <div className="Registration_form">
                  <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
                </div>
                <h3>Otherwise</h3>
                <button
                  className="button-10"
                  onClick={() => loginRegisterSwitch()}
                >
                  Go to Log In
                </button>
              </div>
            ))}
      </div>
    </div>
  );
}

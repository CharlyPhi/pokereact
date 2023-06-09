import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Pokedex from "./pages/Pokedex";
import Dashboard from "./pages/Dashboard";
import NewFeatures from "./pages/NewFeatures";
import Faq from "./pages/Faq";
import axios from "axios";
import {ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function App() {
  const [loggedInStatus, setLoggedInStatus] = useState({
    Status: "Not_logged_in",
    user: {},
  });

  const handleLogin = (data) => {
    setLoggedInStatus({ Status: "Logged_in", user: data.user });
  };

  const handleLogout = () => {
    setLoggedInStatus({ Status: "Not_logged_in", user: {} });
  };

  const checkLoggingStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((res) => {
        if (res.data.logged_in ) {
          setLoggedInStatus({ Status: "Logged_in", user: res.data.user });
        } else if (
          !res.data.logged_in
        ) {
          setLoggedInStatus({ Status: "Not_logged_in", user: {} });
        }
      })
      .catch((error) => {
        console.log("check login error", error);
      });
  };

  useEffect(() => {
    checkLoggingStatus();
  },[]);



  //essayer avec useContext si j'ai le temps

  return (
<>
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path={"/Homepage"}
          element={
            <Homepage
              loggedInStatus={loggedInStatus}
              loggedInStatusStatus={loggedInStatus.Status}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
            />
          }
        />
        <Route
          exact
          path={"/Dashboard"}
          element={
            <Dashboard
              checkLoggingStatus={checkLoggingStatus}
              loggedInStatus={loggedInStatus}
            />
          }
        />
        <Route
          exact
          path="Pokedex"
          element={<Pokedex loggedInStatus={loggedInStatus} />}
        />
        <Route
          exact
          path={"/NewFeatures"}
          element={<NewFeatures/>}
        />
         <Route
          exact
          path={"/Faq"}
          element={<Faq/>}
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>


  <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
  />
</>
  );
}

//<Route path="/faq" element={<Faq />} /> (penser à rajouter l'import)

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Pokedex from "./pages/Pokedex";
import Dashboard from "./pages/Dashboard";
import axios from "axios";

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
        if (res.data.logged_in && loggedInStatus.Status === "Not_logged_in") {
          setLoggedInStatus({ Status: "Logged_in", user: res.data.user });
        } else if (
          !res.data.logged_in &&
          loggedInStatus.Status === "Logged_in"
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
  }, []);

  //essayer avec useContext si j'ai le temps
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path={"/Homepage"}
          element={
            <Homepage
              loggedInStatus={loggedInStatus}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
            />
          }
        />
        <Route
          exact
          path={"/Dashboard"}
          element={<Dashboard loggedInStatus={loggedInStatus} />}
        />
        <Route exact path="Pokedex" element={<Pokedex />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

//<Route path="/faq" element={<Faq />} /> (penser à rajouter l'import)

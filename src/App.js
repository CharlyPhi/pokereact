import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Pokedex from "./pages/Pokedex";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [loggedInStatus, setLoggedInStatus] = useState({
    Status: "Not_logged_in",
    user: {},
});


  //essayer avec useContext si j'ai le temps
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path={"/"}
          element={<Homepage loggedInStatus={loggedInStatus} />}
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

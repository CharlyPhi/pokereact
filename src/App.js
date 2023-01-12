import {React, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Homepage from "./pages/Homepage";
import Pokedex from "./pages/Pokedex";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [loggedIn, setLoggedIn] = useState("Not logged in");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="Pokedex" element={<Pokedex />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

//<Route path="/faq" element={<Faq />} />

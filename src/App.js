import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Homepage from "./pages/Homepage";
import Pokedex from "./pages/Pokedex";

export default function App() {
  const [loggedIn, setLoggedIn]
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Pokedex" element={<Pokedex />} />
        <Route path="/about" element={<About />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

//<Route path="/faq" element={<Faq />} />

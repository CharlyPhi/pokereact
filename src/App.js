import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Miscellaneous from "./pages/ Miscellaneous";

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/Miscellaneous" element={<Miscellaneous />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

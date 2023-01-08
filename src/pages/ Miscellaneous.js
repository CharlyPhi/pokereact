import React from "react";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";

document.body.style.zoom = "110%";
document.body.style.backgroundColor = "rgb(100,231,242,255)";

export default function Miscellaneous() {
  return (
    <div>
      <Navigation />
      <div className="banner"></div>
      <SearchBar />
    </div>
  );
}

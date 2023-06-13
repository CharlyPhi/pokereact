import React from "react";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";

export default function NewFeatures() {
  function toggleZoomScreen() {
    document.body.style.zoom = "110%";
    document.body.style.backgroundColor = "rgb(166,231,242,255)";
  }
  toggleZoomScreen();



  return (
    <div className="SearchBar">
      <Navigation />
      <div className="banner"></div>
      <SearchBar/>
    </div>
  );
}

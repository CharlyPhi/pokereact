import React from "react";
import Navigation from "../components/Navigation";
import Comments from "../components/Comments/Comments"

document.body.style.zoom = "110%";
document.body.style.backgroundColor = "rgb(166,231,242,255)";


export default function Faq(){
  return (
    <div className="faq">
      <Navigation />
      <div className="banner"></div>
      <Comments currentUserId="1"/>
    </div>
  );
};

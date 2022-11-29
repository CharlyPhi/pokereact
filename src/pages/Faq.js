import React from "react";
import Navigation from "../components/Navigation";

document.body.style.zoom = "110%";
document.body.style.backgroundColor = "white";

const Faq = () => {
  return (
    <div className="faq">
      <Navigation />
      <h2>Which is your favorite Pokemon ?</h2>
      <h3>
        I dont really have one, I mean Mewtwo is pretty rad but man... Psyduck !
      </h3>
      <h2>Why did you create this site ?</h2>
      <h3>To learn Javascript and more precisely React.</h3>
      <h2>How was your day ?</h2>
      <h3>Quite good actually, seen some friends, pet my dog.</h3>
      <h2>Do you play Pokemon Go ?</h2>
      <h3>I do indeed, and have been since the game started pretty much.</h3>
      <h2>What is your favorite color ?</h2>
      <h3>This shade of blue</h3>

    </div>
  );
};

export default Faq;

import React from "react";
import Navigation from "../components/Navigation";
import Pokemons from "../components/Pokemons";
import Test from "../components/Test";

const Home = () => {

  function toggleZoomScreen() {
    document.body.style.zoom = "110%";
    document.body.style.backgroundColor ="lightblue"; 
   
  }
  toggleZoomScreen()



  return (
    <div className="home">
      <Navigation />
      <h2>Click on your favorite pokemon to know everything about him !</h2>
      
      <Pokemons />
    </div>
  );
};

export default Home;
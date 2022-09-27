import React from "react";
import Navigation from "../components/Navigation";
import Pokemons from "../components/Pokemons";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <h2>
        Click on your favorite pokemon to know everything about
        him
      </h2>

      <Pokemons />
    </div>
  );
};

export default Home;

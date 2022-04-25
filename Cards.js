import React from "react";
let url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
const Cards = ({ pokemon }, { index }) => {
  return (
    <div>
      <li key={index} className="card">
        <img src={url + `${pokemon.url.slice(34,-1)}` + ".png"} alt={pokemon.name} />
        
      </li>
    </div>
  );
};

export default Cards;

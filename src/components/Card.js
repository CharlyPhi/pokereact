import React from "react";


let url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export default function Card({ pokemon }, { key }) {



  return (
    <>
      <li
        key={key}
      >
        {
          <img
            // eslint-disable-next-line no-useless-concat
            src={url + `${pokemon.id}` + ".png"}
            alt={pokemon.name}
          />
        }

        <ul className="infos">
          <li>
            <h2>Name: {pokemon.name}</h2>
          </li>
          <li>
            <h2>Weight: {pokemon.weight / 10}kg</h2>
          </li>
          <li>
            <h2>Height: {pokemon.height / 10}m</h2>
          </li>
        </ul>
      </li>
    </>
  );
}

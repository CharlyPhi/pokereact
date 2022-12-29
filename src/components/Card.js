import React, { useEffect, useState } from "react";
import axios from "axios";
import defaultImage from "../assets/MissingNo.png";

let url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export default function Card({ pokemon }, { key }) {
  const [src, setSrc] = useState(url + `${pokemon.id}` + ".png");
  const [description, setDescription] = useState(
    "This is a default description, the real one is being written as we speak, anyway this pokemon is fantastic"
  );

  return (
    <>
      <div className="card" key={key}>
        <div className="top-content">
          <div className="top-left">
            <h2>{pokemon.name}</h2>
          </div>
          <div className="top-right">
            <div className="hp">hp</div>
            <div className="type">type</div>
          </div>
        </div>
        {<img className="Image" src={src} alt={pokemon.name} />}
        <div className="middle-content">
          <div className="id">n°{pokemon.id}</div>
          <div className="weight">{pokemon.weight / 10 + "kg"}</div>
          <div className="height">{pokemon.height / 10 + "m"}</div>
        </div>
        <div className="bottom-content">
          <div className="habitat">
            You will be able to find him in {pokemon.habitat}
          </div>
          <div className="description">{description}</div>
          <div className="description">{description}</div>
        </div>
      </div>
    </>
  );
}

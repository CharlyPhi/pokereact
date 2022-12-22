import React, { useEffect, useState } from "react";
import axios from "axios";
import defaultImage from "../assets/MissingNo.png";

let url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export default function Card({ pokemon }, { key }) {
  const [src, setSrc] = useState(url + `${pokemon.id}` + ".png");
  const [description, setDescription] = useState("");

  return (
    <>
      <div className="card" key={key}>
        <div className="info-top">
          <div className="name">
            <h2>{pokemon.name}</h2>
          </div>
          <div className="hp">hp</div>
          <div className="type">type</div>
        </div>
        {<img className="Image" src={src} alt={pokemon.name} />}
        <div className="id">{pokemon.id}</div>
        <div className="weight">{pokemon.weight / 10 + "kg"}</div>
        <div className="height">{pokemon.height / 10 + "m"}</div>
        <div className="description"></div>

      </div>
    </>
  );
}

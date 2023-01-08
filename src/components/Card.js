import React, { useEffect, useState } from "react";
import axios from "axios";

let url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
let url2 = "https://pokeapi.co/api/v2/pokemon-species/";

export default function Card({ pokemon }, { key }) {
  const src = url + pokemon.id + ".png";
  const [habitat, setHabitat] = useState("undiscoverd territorie");
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(url2 + `${pokemon.name}`, { signal: controller.signal })
      .then((res) => {
        setDescriptions(
          res.data.flavor_text_entries.map((ob) => ob.flavor_text)
        );
        setHabitat(res.data.habitat.name);
      });
  }, [pokemon]);

  return (
    <>
      <div className="card" key={key}>
        <div className="top-content">
          <div className="top-left">
            <h2>{pokemon.name}</h2>
          </div>
          <div className="top-right">
            <div className="hp"></div>
            <div className="type"></div>
          </div>
        </div>
        {<img className="Image" src={src} alt={pokemon.name} />}
        <div className="middle-content">
          <div className="id">n°{pokemon.id}</div>
          <div className="weight">{pokemon.weight / 10 + "kg"}</div>
          <div className="height">{pokemon.height / 10 + "m"}</div>
        </div>
        <div className="bottom-content">
          {habitat && (
            <div className="habitat">
              <h2>Lives in {habitat}s</h2>
            </div>
          )}
          {descriptions &&
            descriptions.slice(5, 7).map((obj) => (
              <div className="description">
                <h2>{obj}</h2>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

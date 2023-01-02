import React, { useEffect, useState } from "react";
import axios from "axios";

let url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
let url2 = "https://pokeapi.co/api/v2/pokemon-species/";

export default function Card({ pokemon }, { key }) {
  const src = url + `${pokemon.id}` + ".png";
  const [habitat, setHabitat] = useState(null);
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(url2 + `${pokemon.name}`, { signal: controller.signal })
      .then((res) => {
        setHabitat(res.data.habitat.name);
        setDescriptions(res.data.flavor_text_entries.map((ob) => ob.flavor_text));
      })
  }, [pokemon]);

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
          {habitat && <div className="habitat">Lives in {habitat}s</div>}
          {descriptions && descriptions.map((obj) => <div>`${obj}`</div>)}
        </div>
      </div>
    </>
  );
}

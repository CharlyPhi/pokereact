import React, { useEffect, useState } from "react";
import axios from "axios";

let url = process.env.REACT_APP_UrlSprites;
let url2 = process.env.REACT_APP_UrlSpecies;

export default function Card({ pokemon }, { key }) {
  const src = url + pokemon.id + ".png";
  const [habitat, setHabitat] = useState("");
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    if (pokemon.name && pokemon.name.length > 0) {
      axios.get(url2 + `${pokemon.name}`).then((res) => {
        setDescriptions(
          res.data.flavor_text_entries.map((ob) => ob.flavor_text)
        );
        if (res.data.habitat) {
          setHabitat(res.data.habitat.name);
        } else {
          setHabitat("undiscoverd territorie");
        }
      });
    }
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
            descriptions.slice(5, 7).map((obj, index) => (
              <div className="description" key={index}>
                <h2>{obj}</h2>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

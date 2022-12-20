import React, { useEffect, useState } from "react";
import defaultImage from "../assets/MissingNo.png";

let url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export default function Card({ pokemon }, { key }) {
  const [src, setSrc] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (pokemon == "MissingNo") {
      setSrc(defaultImage);
      setDescription(
        "if you've played pokemon Red or Blue, you know who that is"
      );
      // eslint-disable-next-line no-useless-concat
    } else {
      setSrc(url + `${pokemon.id}` + ".png");
      setDescription(pokemon.description);
    }
  }, []);

  return (
    <>
      <li className="list card" key={key}>
        {<img className="card Image" src={src} alt={pokemon.name} />}

        <ul className="infos">
          <li>
            <h2>{description}</h2>
          </li>
        </ul>
      </li>
    </>
  );
}

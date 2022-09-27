import React, { useEffect, useState } from "react";
import axios from "axios";

let url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
let url2 = "https://pokeapi.co/api/v2/pokemon/";

const Cards = ({ pokemon }, { index }) => {
  const [infoImage, setInfoImage] = useState("");
  const [infoData, setInfoData] = useState("");

  const handleClick = (e) => {
    setInfoImage(e.target.alt);
  };

  useEffect(() => {
    const res = axios(url2 + `${infoImage}`).then((response) =>
      setInfoData(response.data)
    );
  }, [infoImage]);

  const classNameGenerator = (...classes) => {
    return classes.join(" ");
  };

  if (!infoData) {
    return (
      <img className="pokeball" src="/assets/pokeball.jpg" alt="pokeball"></img>
    );
  }
  return (
    <>
      <li
        key={index}
        className={classNameGenerator("card", "random", "classTest")}
      >
        {
          <img
            src={url + `${pokemon.url.slice(34, -1)}` + ".png"}
            alt={pokemon.name}
            onMouseOver={handleClick}
          />
        }

        <ul className="infos">
          <li>
            <h2>Name: {infoData.name}</h2></li>
          <li>
            <h2>Weight: {infoData.weight / 10}kg</h2>
          </li>
          <li>
            <h2>Height: {infoData.height / 10}m</h2>
          </li>
          {/* <li> {infoData.types[0].slot}</li> */}
        </ul>
      </li>
    </>
  );
};

export default Cards;
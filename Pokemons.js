import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
let url = "https://pokeapi.co/api/v2/pokemon/?limit=12000";

const Pokemons = () => {
  const [dataName, setDataName] = useState([]);
  const [rangeValue, setRangeValue] = useState([12]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const digits = [151, 251, 386, 493, 649, 721, 809, 905, 10300];

  useEffect(() => {
    (async () => {
      const pokeName = await axios(url).then((res) =>
        setDataName(res.data.results)
      );
    })();
  }, [dataName]);

  return (
    <div className="pokemon-name">
      <ul className="optionTab">
        <label htmlFor="displayNumber">Sample size</label>
        <input
          type="range"
          id="displayNumber"
          min="1"
          max="1200"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />

        {digits.map((Gen, index) => (
          <ul>
            <label htmlFor="Gen">{`Gen ${index + 1} `}</label>
            <input
              className={digits}
              id={Gen}
              name="Gen"
              type="radio"
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
          </ul>
        ))}
      </ul>
      <ul>
        {dataName
          .slice(0, selectedRadio)
          .slice(0, rangeValue)
          .map((pokemon, index) => (
            <Cards key={index} pokemon={pokemon} />
          ))}
      </ul>
    </div>
  );
};

export default Pokemons;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
let url = "https://pokeapi.co/api/v2/pokemon/?limit=12000";

const Pokemons = () => {
  const digits = [151, 251, 386, 493, 649, 721, 809, 905, 10300];
  const [dataName, setDataName] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [min, setMin] = useState("");

  useEffect(() => {
    digits.forEach((element) => {
      if (element == selectedRadio) {
        setMin(digits[digits.indexOf(element) - 1]);
      }
    });
  });

  useEffect(() => {
    (async () => {
      await axios(url).then((res) =>
        setDataName(res.data.results)
      );
    })();
  }, [dataName]);

  return (
    <div className="pokemon-name">
      <ul className="optionTab">
        {digits.map((Gen, index) => (
          <ul>
            <label htmlFor="Gen">{`Gen ${index + 1} `}</label>
            <input
              key={index}
              className={digits}
              id={Gen}
              name="Gen"
              type="radio"
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
          </ul>
        ))}
      </ul>

      <ul className="pokedex">
        {dataName
          .slice(min, selectedRadio)
          .slice(0, selectedRadio)
          .map((pokemon, index) => (
            <Cards index={index} pokemon={pokemon} />
          ))}
      </ul>
    </div>
  );
};

export default Pokemons;

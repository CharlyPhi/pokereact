import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
let url = "https://pokeapi.co/api/v2/pokemon/?limit=12000";

export default function Pokemon() {
  const digits = [151, 251, 386, 493, 649, 721, 809, 905, 10300];
  const [dataName, setDataName] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [min, setMin] = useState("");

  useEffect(() => {
    digits.forEach((element) => {
      //eslint-disable-next-line
      if (element == selectedRadio) {
        setMin(digits[digits.indexOf(element) - 1]);
      }
    });
  });

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(url, { signal: controller.signal })
      .then((res) => setDataName(res.data.results))
      .catch((err) => {
        if (axios.isCancel(err)) {
        } else {
          console.log("warning your useEffect is behaving");
        }
      });
    return () => {
      // cancel the request before component unmounts
      controller.abort();
    };
  }, [dataName]);

  return (
    /*setting the names on the "Gen" bar*/
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
          .map((pokemon) => (
            <Cards pokemon={pokemon} key={pokemon.url.slice(34, -1)} />
          ))}
      </ul>
    </div>
  );
}

import axios from "axios";
import Card from "./Card";
import React, { useEffect, useState } from "react";
let url = " https://pokeapi.co/api/v2/pokemon/";

export default function SearchBar() {
  const [pokemon, setPokemon] = useState("");
  const [inputValue, setInputValue] = useState("pikachu");
  const [name, setName] = useState();

  const fetchName = () => {
    if (isNaN(inputValue)) setName(inputValue);
    else {
      throw "your input has to be a pokemon name, not a number !";
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(url + `${name}`, { signal: controller.signal })
      .then((res) => setPokemon(res.data))
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
  }, [name]);

  return (
    <>
      <input
        name="query"
        type="search"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button name="query" type="submit" onClick={fetchName}>
        Envoyer
      </button>

      <Card pokemon={pokemon} key={pokemon.order} />
    </>
  );
}

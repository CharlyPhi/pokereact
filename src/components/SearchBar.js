import axios from "axios";
import Card from "./Card";
import React, { useEffect, useState } from "react";
let url = " https://pokeapi.co/api/v2/pokemon/";
let url2 = " https://pokeapi.co/api/v2/pokemon-species/";

export default function SearchBar() {
  const [pokemon, setPokemon] = useState("corviknight");
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState();
  const [habitat, setHabitat] = useState("");
  const [description, setDescription] = useState(
    "This is a default description, the real one is being written as we speak, anyway this pokemon is fantastic"
  );

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

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(url2 + `${pokemon.name}`)
      .then((res) => setHabitat(res.data.habitat), setDescription(res.data.flavor_text))
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
  }, []);

  return (
    <>
      <input
        name="query"
        defaultValue="missingNo"
        type="search"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button name="query" type="submit" onClick={fetchName}>
        Search
      </button>

      <Card pokemon={pokemon} key={pokemon.order} habitat={habitat} description={description} />
    </>
  );
}

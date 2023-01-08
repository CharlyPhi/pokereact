import axios from "axios";
import Card from "./Card";
import React, { useEffect, useState } from "react";
let url = "https://pokeapi.co/api/v2/pokemon/";

export default function SearchBar() {
  const [pokemon, setPokemon] = useState("corviknight");
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("pikachu");

  const fetchName = () => {
    setName(inputValue.toLowerCase());
  };

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(url + `${name}`, { signal: controller.signal })
      .then((res) => {
        setPokemon(res.data);
      })
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

  const cardAppear = () => {
    let carte = document.getElementsByClassName("card");
    carte[0].style.visibility = "visible";
  };

  return (
    <>
      <label name="query">
        <h2>Type any pokemon name, and double click Search !</h2>
      </label>
      <input
        name="query"
        defaultValue="missingNo....."
        type="search"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button
        id="search"
        name="query"
        type="submit"
        onClick={() => {
          fetchName();
          cardAppear();
        }}
      >
        Search
      </button>

      <Card pokemon={pokemon} key={pokemon.order} />
    </>
  );
}

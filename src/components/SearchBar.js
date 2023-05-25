import axios from "axios";
import Card from "./Card";
import React, { useEffect, useState } from "react";
let url = process.env.REACT_APP_UrlBase2;

export default function SearchBar() {
  const [pokemon, setPokemon] = useState("corviknight");
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");

  const fetchName = () => {
    setName(inputValue.toLowerCase());
  };

  useEffect(() => {
    if (name.length > 0) {
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
    }
  }, [name]);

  const cardAppear = () => {
    let carte = document.getElementsByClassName("card");
    carte[0].style.visibility = "visible";
  };

  return (
    <div className="searchbar">
      <div>
      <label name="query">
        <h2>Type any pokemon name, and double click Search !</h2>
      </label>
      </div>
      <div>
      <input
        name="query"
        defaultValue="missingNo....."
        type="search"
        onChange={(e) => setInputValue(e.target.value)}

      ></input>
      </div>
      <div>
      <button
        className="button-10"
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
      </div>
      <Card pokemon={pokemon} key={pokemon.order} />
    </div>
  );
}

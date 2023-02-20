import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
let url = process.env.REACT_APP_UrlBase;

export default function Pokemon({ loggedInStatus }) {
  const digits = [151, 251, 386, 493, 649, 721, 809, 905, 10300];
  const [dataName, setDataName] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [min, setMin] = useState("");
  const [favorites, setFavorites] = useState([{}]);

  useEffect((loggedInStatus) => {
    if (loggedInStatus && loggedInStatus.user) {
      getFavorites();
    }
  });

  const getFavorites = (loggedInStatus) => {
    axios
      .get(`http://localhost:3001/favorites/${loggedInStatus.user.id}`)
      .then((res) => {
        setFavorites(res.data);
      });
  };

  useEffect(() => {
    digits.forEach((element) => {
      //eslint-disable-next-line
      if (element == selectedRadio) {
        setMin(digits[digits.indexOf(element) - 1]);
      }
    });
  });

  useEffect(() => {
    axios.get(url).then((res) => setDataName(res.data.results));
  }, []);

  return (
    /*setting the names on the "Gen" bar*/
    <div className="pokemons">
      <div className="pokemon-name">
        <h2 className="pokedex-tip">
          Hover to check your favorite pokemon's info, and click on the picture
          to add them to your favorites !
        </h2>
        <ul className="optionTab">
          {digits.map((Gen, index) => (
            <ul key={index}>
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
        </ul>{" "}
        <ul className="pokedex">
          {dataName
            .slice(min, selectedRadio)
            .slice(0, selectedRadio)
            .map((pokemon) => (
              <Cards
                getFavorites={getFavorites}
                favorites={favorites}
                pokemon={pokemon}
                key={pokemon.url.slice(34, -1)}
                loggedInStatus={loggedInStatus}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

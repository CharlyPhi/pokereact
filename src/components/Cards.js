import React, { useEffect, useState } from "react";
import axios from "axios";
import bow from "../assets/bow.png";

let url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
let url2 = "https://pokeapi.co/api/v2/pokemon/";

export default function Cards({ pokemon, loggedInStatus }) {
  const [infoImage, setInfoImage] = useState("");
  const [infoData, setInfoData] = useState("");
  const [fav, setFav] = useState("");
  const indice = pokemon.url.slice(34, -1);
  const user_id = loggedInStatus.user.id;

  const handleClick = (e) => {
    setInfoImage(e.target.alt);
  };

  const getFavorites = (user_id) => {
    axios
      .get(`http://localhost:3001/favorites/${user_id}`)
      .then((res) => console.log(res));
  };

  const addToFavorites = (e) => {
    axios
      .post(
        "http://localhost:3001/favorites/",
        {
          favorite: {
            name: e.target.alt,
            user_id: loggedInStatus.user.id,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        setFav(res.data.name);
      })
      .then(() => {
        getFavorites();
      });
  };

  useEffect(() => {
    if (infoImage && infoImage.length > 0) {
      axios
        .get(url2 + `${infoImage}`)
        .then((response) => setInfoData(response.data))
        .catch((err) => {
          if (axios.isCancel(err)) {
          } else {
            console.log("warning your useEffect is behaving");
          }
        });
    }
  }, [infoImage]);

  const classNameGenerator = (...classes) => {
    return classes.join(" ");
  };

  return (
    <>
      <li className={classNameGenerator("cards", "random", "classTest")}>
        {indice && (
          <img
            // eslint-disable-next-line no-useless-concat
            src={url + `${indice}` + ".png"}
            alt={pokemon.name}
            onMouseOver={handleClick}
            onClick={addToFavorites}
          />
        )}

        <ul className="infos">
          <li>
            <h2>{infoData.name}</h2>
          </li>
          <li>
            <h2>{infoData.weight / 10}kg</h2>
          </li>
          <li>
            <h2>{infoData.height / 10}m</h2>
          </li>
          <li>
            {fav.includes(infoData.name) ? (
              <img alt="red bow" src={bow} />
            ) : null}
          </li>
        </ul>
      </li>
    </>
  );
}

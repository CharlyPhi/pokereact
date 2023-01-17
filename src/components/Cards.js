import React, { useEffect, useState } from "react";
import axios from "axios";
import bow from "../assets/bow.png";

let url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
let url2 = "https://pokeapi.co/api/v2/pokemon/";

export default function Cards({ pokemon, loggedInStatus }) {
  const [infoImage, setInfoImage] = useState("");
  const [infoData, setInfoData] = useState("");
  const [favorites, setFavorites] = useState([]);
  const indice = pokemon.url.slice(34, -1);

  useEffect(
    (loggedInStatus) => {
      if (loggedInStatus && loggedInStatus.user) {
        getFavorites();
      }
    },
    [favorites]
  );

  const getFavorites = (loggedInStatus) => {
    axios
      .get(`http://localhost:3001/favorites/${loggedInStatus.user.id}`)
      .then((res) => {
        setFavorites(res.data.map((element) => element.name));
      });
  };

  const handleClick = (e) => {
    setInfoImage(e.target.alt);
  };
  const addToFavorites = (e, loggedInStatus) => {
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
      .then(() => getFavorites(loggedInStatus));
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
            onClick={(e) => {
              addToFavorites(e, loggedInStatus);
            }}
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
            {favorites.includes(infoData.name) ? (
              <img alt="red bow" src={bow} />
            ) : null}
          </li>
        </ul>
      </li>
    </>
  );
}

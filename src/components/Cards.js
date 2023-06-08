import React, { useEffect, useState } from "react";
import axios from "axios";
import bow from "../assets/bow.png";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

let url = process.env.REACT_APP_UrlSprites;
let url2 = process.env.REACT_APP_UrlBase2;

// let url =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
// let url2 = "https://pokeapi.co/api/v2/pokemon/";

export default function Cards({
  pokemon,
  loggedInStatus,
  favorites,
  getFavorites,
}) {
  const [infoImage, setInfoImage] = useState("");
  const [infoData, setInfoData] = useState("");
  const indice = pokemon.url.slice(34, -1);
  const handleClick = (e) => {
    setInfoImage(e.target.alt);
    getFavorites(loggedInStatus);
  };

  const favoriteAdded = () => {

    toast("Favorite addded ! ");
  };

  const favoriteRemoved = () => {

    toast("Favorite removed ! ");
  };


  const addOrRemoveFavorites = (e, loggedInStatus) => {
    if (!favorites.map((fav) => fav.name).includes(e.target.alt)) {
      axios
        .post(
          "http://localhost:3001/favorites/",
          {
            favorite: {
              name: e.target.alt,
              user_id: loggedInStatus.user.id,
              pokeId: e.target.id,
            },
          },
          { withCredentials: true }
        )
        .then(() => getFavorites(loggedInStatus))
        .then(favoriteAdded);
    } else {
      let fav = favorites.find((elem) => elem.name === e.target.alt);
      axios.delete(
        `http://localhost:3001/favorites/${fav.id}/${loggedInStatus.user.id}`
      ).then(favoriteRemoved);
    }
  };

  useEffect(() => {
    if (infoImage && infoImage.length > 0) {
      axios
        .get(url2 + `${infoImage}`)
        .then((response) => setInfoData(response.data));
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
            id={pokemon.url.slice(34, -1)}
            onMouseOver={handleClick}
            onClick={(e) => {
              addOrRemoveFavorites(e, loggedInStatus);
              getFavorites(loggedInStatus);
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
            {favorites.map((fav) => fav.name).includes(infoData.name) ? (
              <img alt="red bow" src={bow} />
            ) : null}
          </li>
        </ul>
      </li>
      <ToastContainer />
    </>
  );
}

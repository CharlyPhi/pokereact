import axios from "axios";
import React, { useState } from "react";

export default function Favorites({ loggedInStatus }) {
  const [favorites, setFavorites] = useState("");
  const getFavorites = () => {
    axios
      .get("http://localhost:3001/favorites/3")
      .then((res) => setFavorites(res.data.name));
  };

  return (
    <div>
      {loggedInStatus && (
        <div>
          <h1>Favorites</h1>
          <h1>Your favorite pokemons are:{favorites}</h1>
          <button type="button" onClick={getFavorites}>
            Click to see the your list of favorites
          </button>
        </div>
      )}
    </div>
  );
}

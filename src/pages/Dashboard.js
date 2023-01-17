import axios from "axios";
import React, { useState } from "react";

export default function Dashboard({ loggedInStatus }) {
  const [favorites, setFavorites] = useState([{}]);

  const getFavorites = (loggedInStatus) => {
    axios
      .get(`http://localhost:3001/favorites/${loggedInStatus.user.id}`)
      .then((res) => setFavorites((res.data)));
  };

  return (
    <div>
      {loggedInStatus && (
        <div className="dashboard">
          <h1>Dashboard</h1>
          <h1>
            Still {loggedInStatus.Status} i see {loggedInStatus.user.id}, well
            you would'nt have a dashboard otherwise, I mean, would you ?....
          </h1>
        </div>
      )}
      <div>
        {loggedInStatus && (
          <div>
            <h1>Favorites</h1>
            <h1>
              Your favorite pokemons are:
              <ul>
                {favorites.map((fav, index) => (
                  <li key={index}>{fav.name}</li>
                ))}
              </ul>
            </h1>
            <button type="button" onClick={() => getFavorites(loggedInStatus)}>
              Click to see the your list of favorites
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

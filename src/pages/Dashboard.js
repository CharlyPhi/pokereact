import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import Psyduck from "../assets/Psyduck-PC.png";

export default function Dashboard({ loggedInStatus, checkLoggingStatus }) {
  const [favorites, setFavorites] = useState([{}]);
  const id = loggedInStatus.user.id;
  const username = loggedInStatus.user.username;

  useEffect(() => {
    checkLoggingStatus();
  });

  const getFavorites = (id) => {
    axios
      .get(`http://localhost:3001/favorites/${id}`)
      .then((res) => setFavorites(res.data));
  };

  return (
    <div className="dashboard">
      <Navigation />
      <div className="banner"></div>
      {username && (
        <div className="Welcome">
          <h1>Hey {username} ! Welcome back to your Dashboard.</h1>
        </div>
      )}
      <div>
        {username && (
          <div className="list">
            <ul className="favorite-list">
              {favorites.map((fav, index) => (
                <li key={index}>{fav.name}</li>
              ))}
            </ul>
            {favorites[0] && (
              <button type="button" onClick={() => getFavorites(id)}>
                Click to see the your list of favorites
              </button>
            )}
          </div>
        )}
      </div>
      <div>
        {!favorites[0] && (
          <div>
            <h1>
              You dont have any favorites at the moment, go to the pokedex if
              you want to add some.
            </h1>
          </div>
        )}
      </div>
      <div>
        {!username && (
          <div className="not_logged">
            <h1>
              You need to be logged in to have a Dashboard..
              <img
                className="psyduck_pc"
                src={Psyduck}
                alt="confused Psyduck "
              />
            </h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Dont worry, it's easy !</h1>
            <NavLink
              to="/Homepage"
              className={(nav) => (nav.isActive ? "nav-active" : " ")}
            >
              <button>
                <h2 type="button" className="button-10">
                  Click here
                </h2>
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

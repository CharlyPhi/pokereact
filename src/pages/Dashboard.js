import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import Psyduck from "../assets/Psyduck-PC.png";


export default function Dashboard({ loggedInStatus, checkLoggingStatus }) {
  const [favorites, setFavorites] = useState([{}]);
  const id = loggedInStatus.user ? loggedInStatus.user.id : null;
  const username = loggedInStatus.user ? loggedInStatus.user.username : null;
  const url1 =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  const [favoriteDisplayed, setFavoriteDisplayed] = useState(false);


  useEffect(() => {
    checkLoggingStatus();
  },[]);

  const getFavorites = (id) => {
    if (favoriteDisplayed === false) {
   axios
      .get(`http://localhost:3001/favorites/${id}`)
      .then((res) => setFavorites(res.data)).then(setFavoriteDisplayed(true))
      }
      else if (favoriteDisplayed === true) {
        const imageClass = document.getElementsByClassName('favs');
        [...imageClass].forEach(elmt => {elmt.style.display = 'none' });
        setFavoriteDisplayed(null);
      }
      else if (favoriteDisplayed === null) {
        const imageClass = document.getElementsByClassName('favs');
         [...imageClass].forEach(elmt => {elmt.style.display = 'block' });
         setFavoriteDisplayed(true);
      }
      };



  // const switchShiny = (e, fav) => {
  //   if ((e.target.src = `{url1 + ${fav.pokeId} + ".png"}`)) {
  //     e.target.src = `{url2 + ${fav.pokeId} + ".png"}`;
  //   } else if ((e.target.src = `{url2 + ${fav.pokeId} + ".png"}`)) {
  //     e.target.src = `{url1 + ${fav.pokeId} + ".png"}`;
  //   }
  // };

  return (
    <div className="dashboard">
      <Navigation/>
      <div className="banner"></div>
      <div className="dashboard-all">
        <div className="dashboard-left">
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
            <NavLink
              to="/Homepage"
              className={(nav) => (nav.isActive ? "nav-active" : " ")}
            >
              <button className="button-10">
                Login
              </button>
            </NavLink>
          </div>
        )}
      </div>
          {username && (
          <div className="Welcome">
            <h1>Hey {username} ! Welcome back !</h1>
          </div>
          )}
      {favorites && username && (
        <div className="favorite-list">
          <ul>
            {favorites.map((fav, index) => (
            <li key={index} className="favs">
              {fav.pokeId && (
              <img
              src={url1 + `${fav.pokeId}` + ".png"}
              alt={fav.name}
              // onClick={(e, fav) => switchShiny(e, fav)}
              />
              )}
            </li>
            ))}
          </ul>
        </div>
        )}
        <div>
      {!favorites[0] && username && (
      <div>
        <h1>
          No favorites to display
        </h1>

      </div>
      )}
    </div>
  </div>
  <div className="sidebar">
    {username && (
              <button className="button-10" onClick={() => getFavorites(id)}>
                {!favoriteDisplayed &&('Show favorites')
                }
                {favoriteDisplayed &&('Hide favorites')
                }
              </button>
            )}
            <NavLink
          to="/Pokedex"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
        <button className="button-10">
           Pokedex
        </button>
        </NavLink>
    </div>
    </div>

    </div>
  );
}

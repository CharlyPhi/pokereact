import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="NavBar">
      <NavLink
        to="/Homepage"
        className={(nav) => (nav.isActive ? "nav-active" : " ")}
      >
        <button>Homepage</button>
      </NavLink>
      <NavLink
        to="/About"
        className={(nav) => (nav.isActive ? "nav-active" : " ")}
      >
        <button>A propos</button>
      </NavLink>
      <NavLink
        to="/Pokedex"
        className={(nav) => (nav.isActive ? "nav-active" : " ")}
      >
        <button>Pokedex</button>
      </NavLink>
      <NavLink
        to="/Dashboard"
        className={(nav) => (nav.isActive ? "nav-active" : " ")}
      >
        <button>Dashboard</button>
      </NavLink>
    </div>
  );
}

//<NavLink
// to="/Faq"
// className={(nav) => (nav.isActive ? "nav-active" : " ")}
// >
// <button>FAQ</button>
// </NavLink>

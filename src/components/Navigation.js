import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="NavBar">
      <NavLink
        to="/Homepage"
        className={(nav) => (nav.isActive ? "nav-active" : " ")}
      >
        <button>
          <h2 style={{ fontSize: "bold", fontWeight: "600" }}>Homepage</h2>
        </button>
      </NavLink>
      <NavLink
        to="/About"
        className={(nav) => (nav.isActive ? "nav-active" : " ")}
      >
        <button>
          <h2 style={{ fontSize: "bold", fontWeight: "600" }}>About</h2>
        </button>
      </NavLink>
      <NavLink
        to="/Pokedex"
        className={(nav) => (nav.isActive ? "nav-active" : " ")}
      >
        <button>
          <h2 style={{ fontSize: "bold", fontWeight: "600" }}>Pokedex</h2>
        </button>
      </NavLink>
      <NavLink
        to="/Dashboard"
        className={(nav) => (nav.isActive ? "nav-active" : " ")}
      >
        <button>
          <h2 style={{ fontSize: "bold", fontWeight: "600" }}>Dashboard</h2>
        </button>
      </NavLink>
      <NavLink
        to="/SearchBar"
        className={(nav) => (nav.isActive ? "nav-active" : " ")}
      >
        <button>
          <h2 style={{ fontSize: "bold", fontWeight: "600" }}>SearchBar</h2>
        </button>
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

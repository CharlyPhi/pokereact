import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="NavBar">
        <NavLink
          to="/Home"
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
          to="/Faq"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
          <button>FAQ</button>
        </NavLink>
    </div>
  );
}

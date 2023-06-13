import {React, useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import Avatar from "./Avatar";
import SubMenu from "./SubMenu";

export default function Navigation() {

  const [menuOn, setMenuOn] = useState(false);

  const handleMenu = () => {
    setMenuOn((prevState) => !prevState);
  };


  return (
    <div className="Navbar">
    <div className="NavBarButons">
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
        to="/NewFeatures"
        className={(nav) => (nav.isActive ? "nav-active" : " ")}
      >
        <button>
          <h2 style={{ fontSize: "bold", fontWeight: "600" }}>NewFeatures</h2>
        </button>
      </NavLink>
      <NavLink
        to="/Faq"
        className={(nav) => (nav.isActive ? "nav-active" : " ")}
      >
        <button>
          <h2 style={{ fontSize: "bold", fontWeight: "600" }}>Faq</h2>
        </button>
      </NavLink>
      </div>
      <div className="avatarPlusMenu">
      <div className="avtr">
      <button style={{background: 'transparent', border: 'none'}}onClick={handleMenu}><Avatar className="avatar"/></button>
      </div>
      {menuOn && <SubMenu/>}
      </div>


    </div>
  );
}

//<NavLink
// to="/Faq"
// className={(nav) => (nav.isActive ? "nav-active" : " ")}
// >
// <button>FAQ</button>
// </NavLink>

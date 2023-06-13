import {React, useState} from 'react';
import { NavLink } from "react-router-dom";

export default function SubMenu() {


  return (

    <div className="subMenu">
      <>
       <NavLink
          to="/Homepage"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
        <button>
           Log In
        </button>
        </NavLink>
        <NavLink
          to="/Pokedex"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
        <button>
           Logout
        </button>
        </NavLink>
      </>

    </div>
  )
}

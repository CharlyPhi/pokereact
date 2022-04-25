import React from "react";

const Cards = ({element}) => {
  return (
    <div>
      <li key={element.id} className="card">
      <p>{element.id}</p>
        <p>{element.forms.name}</p>
        <p>{element.height}</p>
        <p>{element.id}</p>
        {/* <img
          src={`${element.sprites.other.front_default}`}
          alt={element.name}
        /> */}
      </li>
    </div>
  );
};

export default Cards;

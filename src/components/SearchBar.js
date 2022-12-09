import React, { useState } from "react";

export default function SearchBar() {
  const [list, setList] = useState([
    "pikachu",
    "bulbazaur",
    "clefairy",
    "motisma",
  ]);

  const handleChange = (event) => {
    if (event.target.value === "") {
      setList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setList(filteredValues);
  };
  return (
    <>
      <input name="query" type="search" onChange={handleChange}></input>
      {list && list.map((item, index) => <div key={index}>{item}</div>)}
    </>
  );
}

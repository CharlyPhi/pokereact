import React, { useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");
  let array = ["pikachu", "bulbazaur", "clefairy", "motisma"];

  console.log(value);


  return (
    <>
      <input
        name="query"
        type="search"
        list={array}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      {array &&
        array.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
    </>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
let url = " https://pokeapi.co/api/v2/pokemon/";

export default function SearchBar() {
  const [data, setData] = useState("");
  const [inputValue, setInputValue] = useState("pikachu");
  const [name, setName] = useState();

  const fetchName = () => {
    setName(inputValue);
  };

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(url + `${name}`, { signal: controller.signal })
      .then((res) => setData(res.data))
      .catch((err) => {
        if (axios.isCancel(err)) {
        } else {
          console.log("warning your useEffect is behaving");
        }
      });
    return () => {
      // cancel the request before component unmounts
      controller.abort();
    };
  }, [name]);

  return (
    <>
      <input
        name="query"
        type="search"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button name="query" type="submit" onClick={fetchName}>
        Envoyer
      </button>
      {data && <div>{data.name} {data.weight} {data.height}</div>}
    </>
  );
}

/*const handleChange = (event) => {
    if (event.target.value === "") {
      setList(list);
      return;
    }
const filteredValues = list.filter(
  (item) =>
    item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
);
setList(filteredValues);*/
/* {list && list.map((item, index) => <div key={index}>{item}</div>)} */

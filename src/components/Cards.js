import React, { useEffect, useState } from "react";
import axios from "axios";

let url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
let url2 = "https://pokeapi.co/api/v2/pokemon/";

export default function Cards({ pokemon }, { key }) {
  const [infoImage, setInfoImage] = useState("");
  const [infoData, setInfoData] = useState("");
  const indice = pokemon.url.slice(34, -1);

  const handleClick = (e) => {
    setInfoImage(e.target.alt);
  };

  useEffect(() => {
    if (infoImage && infoImage.length > 0) {
      axios
        .get(url2 + `${infoImage}`)
        .then((response) => setInfoData(response.data))
        .catch((err) => {
          if (axios.isCancel(err)) {
          } else {
            console.log("warning your useEffect is behaving");
          }
        });
    }
  }, [infoImage]);

  const classNameGenerator = (...classes) => {
    return classes.join(" ");
  };

  // if (!infoData) {
  //   return (
  //     <img className="pokeball" src="/assets/pokeball.jpg" alt="pokeball"></img>
  //   );
  // }
  return (
    <>
      <li
        key={key}
        className={classNameGenerator("cards", "random", "classTest")}
      >
        {indice && (
          <img
            // eslint-disable-next-line no-useless-concat
            src={url + `${indice}` + ".png"}
            alt={pokemon.name}
            onMouseOver={handleClick}
          />
        )}

        <ul className="infos">
          <li>
            <h2>{infoData.name}</h2>
          </li>
          <li>
            <h2>{infoData.weight / 10}kg</h2>
          </li>
          <li>
            <h2>{infoData.height / 10}m</h2>
          </li>
        </ul>
      </li>
    </>
  );
}

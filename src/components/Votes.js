import React, { useState } from "react";

export default function Votes() {
  const [vote1, setVote1] = useState(2);
  const [vote2, setVote2] = useState(6);
  const [vote3, setVote3] = useState(7);
  const [vote4, setVote4] = useState(2);

  function increase1() {
    const colorBar = document.getElementById("1");
    console.log(colorBar);
    colorBar.width = 400;
    console.log(colorBar.width);
    console.log(colorBar.alt);
    return setVote1(vote1 + 1);
  }
  function increase2() {
    return setVote2(vote2 + 1);
  }
  function increase3() {
    return setVote3(vote3 + 1);
  }
  function increase4() {
    return setVote4(vote4 + 1);
  }

  return (
    <div className="graph">
      <div className="votes">
        <img
          style={{ width: "600px" }}
          src="blue_gradient.svg"
          alt="blue_gradient"
          id="1"
        ></img>
        <button type="button" onClick={increase1}>
          user sign in ({vote1})
        </button>
      </div>
      <div className="votes">
        <img
          src="black_gradient.svg"
          alt="black_gradient"
          id="2"
          //style={{ width: "600px" }}
        ></img>
        <button type="button" onClick={increase2}>
          contact form ({vote2})
        </button>
      </div>
      <div className="votes">
        <img
          src="red_gradient.svg"
          alt="red_gradient"
          id="3"
          //style={{ width: "600px" }}
        ></img>
        <button type="button" onClick={increase3}>
          overall design ({vote3})
        </button>
      </div>
      <div className="votes">
        <img
          src="yellow_gradient.svg"
          alt="yellow_gradient"
          id="4"
          //style={{ width: "600px" }}
        ></img>
        <button type="button" onClick={increase4}>
          map, for reasons ({vote4})
        </button>
      </div>
    </div>
  );
}

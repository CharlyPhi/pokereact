/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

export default function Votes() {
  const [vote1, setVote1] = useState(182);
  const [vote2, setVote2] = useState(157);
  const [vote3, setVote3] = useState(230);
  const [vote4, setVote4] = useState(35);

  useEffect(() => {
    increase1();
    increase2();
    increase3();
    increase4();
  },[]);

  function increase1() {
    const colorBar = document.getElementById("1");
    colorBar.style.width = `${vote1 + 10}px`;
    return setVote1(vote1 + 1);
  }
  function increase2() {
    const colorBar = document.getElementById("2");
    colorBar.style.width = `${vote2 + 10}px`;
    return setVote2(vote2 + 1);
  }
  function increase3() {
    const colorBar = document.getElementById("3");
    colorBar.style.width = `${vote3 + 10}px`;
    return setVote3(vote3 + 1);
  }
  function increase4() {
    const colorBar = document.getElementById("4");
    colorBar.style.width = `${vote4 + 10}px`;
    return setVote4(vote4 + 1);
  }

  return (
    <div className="graph">
      <div className="votes">
        <div className="bar-one" id="1"></div>
        <button type="button" onClick={increase1}>
          user sign in ({vote1})
        </button>
      </div>
      <div className="votes">
        <div className="bar-two" id="2"></div>
        <button type="button" onClick={increase2}>
          contact form ({vote2})
        </button>
      </div>
      <div className="votes">
        <div className="bar-three" id="3"></div>
        <button type="button" onClick={increase3}>
          overall design ({vote3})
        </button>
      </div>
      <div className="votes">
        <div className="bar-four" id="4"></div>
        <button type="button" onClick={increase4}>
          map, for reasons ({vote4})
        </button>
      </div>
    </div>
  );
}

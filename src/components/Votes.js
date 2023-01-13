/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Votes() {
  const [vote1, setVote1] = useState({ id: 0, votes: 0 });
  const [vote2, setVote2] = useState({ id: 0, votes: 0 });
  const [vote3, setVote3] = useState({ id: 0, votes: 0 });
  const [vote4, setVote4] = useState({ id: 0, votes: 0 });

  useEffect(() => {
    getVotes();
  }, []);

  const getVotes = () => {
    axios
      .get("http://localhost:3001/votes")
      .then((res) => {
        console.log(res.data);
        setVote1({ id: res.data[0].id, votes: res.data.votes });
        setVote2({ id: res.data[1].id, votes: res.data.votes });
        setVote3({ id: res.data[2].id, votes: res.data.votes });
        setVote4({ id: res.data[3].id, votes: res.data.votes });
      })
      .catch((err) => {
        console.log("get votes err", err);
      });
  };

  const upvote = (vote) => {
    axios
      .patch(`http://localhost:3001/upvote/${vote.id}}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("vote error", err);
      });
  };

  function increase(e) {
    let vote = vote`${e.target.id}`;
    const colorBar = document.getElementById(`${vote.id}`);
    colorBar.style.width = `${vote.votes + 10}px`;
    upvote(vote);
  }

  return (
    <div className="graph">
      <div className="votes">
        <div className="bar-one" id="1"></div>
        <button id="1" type="button" onClick={(e) => increase(e)}>
          user sign in ({vote1.votes})
        </button>
      </div>
      <div className="votes">
        <div className="bar-two" id="2"></div>
        <button id="2" type="button" onClick={increase}>
          contact form ({vote2.votes})
        </button>
      </div>
      <div className="votes">
        <div className="bar-three" id="3"></div>
        <button id="3" type="button" onClick={increase}>
          overall design ({vote3.votes})
        </button>
      </div>
      <div className="votes">
        <div className="bar-four" id="4"></div>
        <button id="4" type="button" onClick={increase}>
          map, for reasons ({vote4.votes})
        </button>
      </div>
    </div>
  );
}

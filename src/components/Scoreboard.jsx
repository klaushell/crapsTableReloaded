import React from "react";

function Scoreboard({ players }) {
  return (
    <ul>
      {players.map((item) => (
        <li type="none">
          <h3 className="">{item.name}</h3>
          <p>SCORE: {item.score}</p>
          <p>{item.status}</p>
        </li>
      ))}
    </ul>
  );
}

export default Scoreboard;

import React from "react";

function Dice({ dice }) {
  return (
    <li key={dice.id}>
      <h2>{dice.name}</h2>
      <h2 className="App-square">{dice.faces}</h2>
      <br />
    </li>
  );
}

export default Dice;

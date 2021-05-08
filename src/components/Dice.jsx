import React from "react";

function Dice({ dice }) {
  return (
    <li type="none">
      <h2 className="App-square">{dice.value}</h2>
      <br />
    </li>
  );
}

export default Dice;

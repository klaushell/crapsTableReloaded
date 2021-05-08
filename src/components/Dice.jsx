import React from "react";

function Dice({ dice, result }) {
  return (
    <li key={dice.id} type="none">
      {/* <h2>{dice.name}</h2> */}
      <h2 className="App-square">{result}</h2>
      <br />
    </li>
  );
}

export default Dice;

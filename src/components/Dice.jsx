import React from "react";

function Dice(props) {
  return (
    <li key={item.id}>
      <h2>{item.name}</h2>
      <h2 className="App-square">{item.faces}</h2>
      <br />
    </li>
  );
}

export default Dice;

import dice from "../utilities/Roll";
import React from "react";

const Player = ({ player, currentTurn, finishTurn }) => {
  if (player.id != currentTurn) {
    return null;
  }
  const clickHandler = (e) => {
    dice.roll(e);
    finishTurn(player);
  };
  return (
    <li key={player.id}>
      <h2 className="">{player.name}</h2>
      <button disabled="" onClick={clickHandler}>
        {" "}
        Roll{" "}
      </button>
      <br />
    </li>
  );
};

export default Player;

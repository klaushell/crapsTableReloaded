import dice from "../utilities/Roll";
import React from "react";

const Player = ({
  player,
  currentTurn,
  finishTurn,
  bttnToggle,
  rllBtnStatus,
}) => {
  if (player.id != currentTurn) {
    return null;
  }
  const nextPlayer = (e) => {
    finishTurn(player);
    bttnToggle();
  };
  const roll = (e) => {
    // dice.roll(e);
    bttnToggle();
  };

  return (
    <li key={player.id}>
      <h2 className="">{player.name}</h2>
      <button disabled={rllBtnStatus} onClick={roll}>
        {" "}
        Roll{" "}
      </button>
      <button disabled={!rllBtnStatus} onClick={nextPlayer}>
        {" "}
        NEXT{" "}
      </button>
      <br />
    </li>
  );
};

export default Player;

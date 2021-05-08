import React from "react";

const Player = ({
  player,
  currentTurn,
  finishTurn,
  bttnToggle,
  rllBtnStatus,
  rollDice,
}) => {
  if (player.id !== currentTurn) {
    return null;
  }
  const nextPlayer = (e) => {
    finishTurn(player);
    bttnToggle();
  };
  const roll = (e) => {
    bttnToggle();
    rollDice();
  };

  return (
    <li key={player.id} type="none">
      <h2 className="">{player.name}</h2>
      <button className="App-button" disabled={rllBtnStatus} onClick={roll}>
        {" "}
        Roll{" "}
      </button>
      <button
        className="App-button"
        disabled={!rllBtnStatus}
        onClick={nextPlayer}
      >
        {" "}
        NEXT{" "}
      </button>
      <br />
    </li>
  );
};

export default Player;

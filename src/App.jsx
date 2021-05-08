import { roll } from "./utilities/Roll";
import Player from "./components/Player";
import Dice from "./components/Dice";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

import { useState } from "react";

function App() {
  const [nPlayers, setNPlayers] = useState("");
  const [playersList, setPlayersList] = useState([]);
  const [nDice, setNDice] = useState("");
  const [dice, setDice] = useState([]);
  const [nFaces, setNFaces] = useState("");
  const [rdyBtnStatus, setRdyBtnStatus] = useState("");
  const [rstBtnStatus, setRstBtnStatus] = useState("disabled");
  const [rllBtnStatus, setRllBtnStatus] = useState("");

  const [turn, setTurn] = useState(1);

  const resetBoard = (e) => {
    e.preventDefault();
    setPlayersList([]);
    setDice([]);
    setNPlayers("");
    setNDice("");
    setNFaces("");
    setRdyBtnStatus("");
    setRstBtnStatus("disabled");
    setRllBtnStatus("");
    setTurn(1);
  };

  const validateForm = (e) => {
    e.preventDefault();

    if (!nPlayers || !nDice || !nFaces) {
      alert("Nah ah ah.... You missed some fields there didn't ya???");
      return false;
    }
    createPlayersList();
  };

  const createPlayersList = () => {
    setRdyBtnStatus(!rdyBtnStatus);
    setRstBtnStatus(!rstBtnStatus);

    for (let i = 0; i < nPlayers; i++) {
      playersList.push({
        id: i + 1,
        name: `Player ${i + 1}`,
        score: 0,
        status: "...",
      });
    }
    setPlayersList(playersList);

    for (let i = 0; i < nDice; i++) {
      dice.push({
        id: i + 1,
        name: `Dice ${i + 1}`,
        faces: `${nFaces}`,
        value: 0,
      });
    }
    setDice(dice);
  };

  const playersHandleChange = (e) => {
    setNPlayers(e.target.value);
  };

  const diceHandleChange = (e) => {
    setNDice(e.target.value);
  };

  const facesHandleChange = (e) => {
    setNFaces(e.target.value);
  };

  const bttnToggle = () => {
    setRllBtnStatus(!rllBtnStatus);
  };

  const finishTurn = (currentPlayer) => {
    if (playersList.length === currentPlayer.id) {
      setTurn(1);
    } else {
      setTurn(turn + 1);
    }
  };
  const calculateAllRolls = () => {
    let total = 0;
    let oldRoll = 0;
    for (let i = 0; i < nDice; i++) {
      const rollResult = roll(nFaces, oldRoll);
      oldRoll = rollResult;
      dice[i].value = rollResult;
      total = total + rollResult;
    }
    setDice(dice);
    return total;
  };

  const rollDice = () => {
    const result = calculateAllRolls();
    playersList[turn - 1].score = playersList[turn - 1].score + result;

    calculateWinner(playersList);
  };
  const calculateWinner = (list) => {
    let winner = null;
    let winnerScore = 0;
    list.forEach((player, i) => {
      if (winner === null || winnerScore < player.score) {
        winnerScore = player.score;
        winner = i;
      }
      list[i].status = "Looser...";
    });

    list[winner].status = "WINNER!!!!!";
    setPlayersList(list);
  };

  return (
    <div className="App">
      <title>crapsTableReloaded</title>
      <header className="App-header">Craps Table Reloaded!!!</header>
      <div className="App-row">
        <form name="boardsetup">
          <input
            type="text"
            name="playersNumber"
            placeholder="How many players?"
            onChange={playersHandleChange}
            value={nPlayers}
          />
          <br />
          <input
            name="diceNumber"
            placeholder="Number of dice?"
            onChange={diceHandleChange}
            value={nDice}
          />
          <br />
          <input
            name="facesNumber"
            placeholder="Faces on each dice?"
            onChange={facesHandleChange}
            value={nFaces}
          />
          <br />

          <button
            className="App-button2"
            disabled={rdyBtnStatus}
            onClick={(e) => validateForm(e)}
          >
            READY
          </button>
        </form>
      </div>
      <div className="App-row">
        <div className="App-h2">
          <form>
            <ul>
              {playersList.map((item) => (
                <Player
                  key={item.id}
                  player={item}
                  currentTurn={turn}
                  finishTurn={finishTurn}
                  bttnToggle={bttnToggle}
                  rllBtnStatus={rllBtnStatus}
                  rollDice={rollDice}
                />
              ))}
            </ul>
          </form>
          <form className="App-h3">
            <Scoreboard players={playersList} />
          </form>
        </div>
        <div className="App-h2">
          <ul>
            {dice.map((item) => (
              <Dice key={item.id} dice={item} />
            ))}
          </ul>
        </div>
      </div>
      <div>
        <button
          className="App-button2"
          disabled={rstBtnStatus}
          onClick={(e) => resetBoard(e)}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default App;

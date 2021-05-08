import dice, { roll } from "./utilities/Roll";
import Player from "./components/Player";
import Dice from "./components/Dice";
import "./App.css";

import { useState } from "react";

function App() {
  const [nPlayers, setNPlayers] = useState();
  const [playersList, setPlayersList] = useState([]);
  const [nDice, setNDice] = useState();
  const [dice, setDice] = useState([]);
  const [nFaces, setNFaces] = useState();
  const [rdyBtnStatus, setRdyBtnStatus] = useState("");
  const [rstBtnStatus, setRstBtnStatus] = useState("disabled");
  const [rllBtnStatus, setRllBtnStatus] = useState("");
  const tempList = [];
  const tempDice = [];
  const [turn, setTurn] = useState(1);
  const [oldRoll, setOldRoll] = useState(0);
  const [newRoll, setNewRoll] = useState(0);

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
      tempList.push({
        id: i + 1,
        name: `Player ${i + 1}`,
        score: "",
        status: "...",
      });
    }
    setPlayersList(tempList);

    for (let i = 0; i < nDice; i++) {
      tempDice.push({
        id: i + 1,
        name: `Dice ${i + 1}`,
        faces: `${nFaces}`,
        value: 0,
      });
    }
    setDice(tempDice);
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
    // actualizar el board

    if (playersList.length === currentPlayer.id) {
      setTurn(1);
    } else {
      setTurn(turn + 1);
    }
  };

  const rollDice = () => {
    const nRoll = roll(nFaces, oldRoll);
    setNewRoll(nRoll);
    console.log(oldRoll, nRoll);
    setOldRoll(nRoll);

    //add for cycle per dice
    //How to add/modify property to object in state (useState)?
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
            className="App-button"
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
          <form>
            <ul>
              {playersList.map((item) => (
                <li type="none">
                  <h3 className="">{item.name}</h3>
                  <p>SCORE: {item.score}</p>
                  <p>{item.status}</p>
                </li>
              ))}
            </ul>
          </form>
        </div>
        <div className="App-h2">
          <ul>
            {dice.map((item) => (
              <Dice dice={item} result={newRoll} />
            ))}
          </ul>
        </div>
      </div>
      <div>
        <button
          className="App-button"
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

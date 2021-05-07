// import Rolldice from "./components/Rolldice";
import "./App.css";

import { useState } from "react";

function App() {
  const [nPlayers, setNPlayers] = useState("");
  const [playersList, setPlayersList] = useState([]);
  const [nDice, setNDice] = useState("");
  const [dice, setDice] = useState([]);
  const [nFaces, setNFaces] = useState("");
  const [rdyBtnStatus, setRdyBtnStatus] = useState("");
  const tempList = [];
  const tempDice = [];

  const resetBoard = (e) => {
    e.preventDefault();
    setPlayersList([]);
    setDice([]);
    setNPlayers("");
    setNDice("");
    setNFaces("");
    setRdyBtnStatus(!rdyBtnStatus);
  };

  const validateForm = (e) => {
    e.preventDefault();
    var x = document.forms["boardsetup"]["playersNumber"].value;
    var y = document.forms["boardsetup"]["diceNumber"].value;
    var z = document.forms["boardsetup"]["facesNumber"].value;

    if ((x == null || x == "", y == null || y == "", z == null || z == "")) {
      alert("Please Fill All Required Field");
      return false;
    }
    createPlayersList();
  };

  const createPlayersList = () => {
    setRdyBtnStatus(!rdyBtnStatus);
    var i;
    for (i = 0; i < nPlayers; i++) {
      const newPlayer = {
        id: `${i + 1}`,
        name: `Player ${i + 1}`,
        score: "",
        status: "",
      };
      tempList.push(newPlayer);
    }
    setPlayersList(tempList);

    for (i = 0; i < nDice; i++) {
      const newDice = {
        id: `${i + 1}`,
        name: `Dice ${i + 1}`,
        faces: `${nFaces}`,
      };
      tempDice.push(newDice);
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

          <button disabled={rdyBtnStatus} onClick={(e) => validateForm(e)}>
            READY
          </button>
        </form>
      </div>
      <div className="App-row">
        <div className="App-headerSec">
          <form>
            <ul>
              {playersList.map((item) => (
                <li key={item.id}>
                  <h2>{item.name}</h2>
                  <button> Roll </button>
                  <br />
                </li>
              ))}
            </ul>
          </form>
        </div>
        <div className="App-headerSec">
          <ul>
            {dice.map((item) => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <h2>{item.faces}</h2>
                <br />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <button onClick={(e) => resetBoard(e)}>RESET</button>
      </div>
    </div>
  );
}

export default App;

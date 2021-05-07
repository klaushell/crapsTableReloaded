import Rolldice from "./components/Rolldice";
import "./App.css";

import { useState } from "react";

function App() {
  const [nPlayers, setNPlayers] = useState("");
  const [playersList, setPlayersList] = useState([]);
  const [nDice, setNDice] = useState("");
  const [dice, setDice] = useState([]);
  const [nFaces, setNFaces] = useState("");
  const tempList = [];
  const tempDice = [];

  const resetBoard = (e) => {
    e.preventDefault();
    setPlayersList([]);
    setDice([]);
    setNDice("");
    setNFaces("");
  };

  const createPlayersList = (e) => {
    e.preventDefault();

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

  return (
    <div className="App">
      <title>crapsTableReloaded</title>
      <header className="App-header">Craps Table Reloaded!!!</header>
      <div className="App-row">
        <form>
          <input
            name="playersNumber"
            placeholder="How many players?"
            onChange={(e) => {
              setNPlayers(e.target.value);
              resetBoard(e);
              console.log(playersList);
            }}
          />
          <br />
          <input
            name="diceNumber"
            placeholder="Number of dice?"
            onChange={(e) => {
              setNDice(e.target.value);
            }}
          />
          <br />
          <input
            name="facesNumber"
            placeholder="Faces on each dice?"
            onChange={(e) => {
              setNFaces(e.target.value);
            }}
          />
          <br />

          <button onClick={(e) => createPlayersList(e)}>READY</button>
        </form>
      </div>
      <div className="App-row">
        <div className="App-headerSec">
          <ul>
            {playersList.map((item) => (
              <li key="{item.id}">
                <h2>{item.name}</h2>
                <br />
                <button onclick={(e) => Rolldice()}> Roll </button>
                <br />
              </li>
            ))}
          </ul>
        </div>
        <div className="App-headerSec"></div>
        <ul>
          {dice.map((item) => (
            <li key="{item.id}">
              <h2>{item.name}</h2>
              <h2>{item.id}</h2>
              <h2>{item.faces}</h2>
              <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

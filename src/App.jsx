import Rolldice from "./components/Rolldice";
import "./App.css";

import { useState } from "react";

function App() {
  const [nPlayers, setNPlayers] = useState("");
  const [playersList, setPlayersList] = useState([]);
  const [nDice, setNDice] = useState("");
  const [nFaces, setNFaces] = useState("");
  const tempList = [];

  const resetBoard = (e) => {
    e.preventDefault();
    setPlayersList([]);
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
        dice: `${nDice}`,
        faces: `${nFaces}`,
        score: "",
        status: "",
      };

      tempList.push(newPlayer);
    }
    setPlayersList(tempList);
  };

  return (
    <div className="App">
      <form>
        <title>crapsTableReloaded</title>
        <header className="App-header">Craps Table Reloaded!!!</header>
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
      </div>
    </div>
  );
}

export default App;

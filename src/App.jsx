// import Rolldice from "./components/Rolldice";
// import "./App.css";

import { useState } from "react";

function App() {
  const [nPlayers, setNPlayers] = useState("");
  const [player, setPlayer] = useState({});
  const [playersList, setPlayersList] = useState([]);
  const [nDice, setNDice] = useState("");
  const [nFaces, setNFaces] = useState("");
  const tempList = [];

  const clearPlayers = (e) => {
    e.preventDefault();
    console.log({ value: e.target.value });
    setPlayersList([]);
  };

  const createPlayersList = (e) => {
    e.preventDefault();

    var i;
    for (i = 0; i < nPlayers; i++) {
      const newPlayer = {
        id: `${i + 1}`,
        name: `Player ${i + 1}`,
      };

      tempList.push(newPlayer);
    }

    console.log(tempList);
    console.log(playersList);
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
            clearPlayers(e);
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
  );
}

export default App;

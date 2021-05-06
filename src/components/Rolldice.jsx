const diceDefault = 6;

const Rolldice = (faces, oldRoll) => {
  if (!faces || faces < 0) {
    faces = diceDefault;
  }
  let newRoll = Math.floor(Math.random() * faces) + 1;
  if (newRoll === oldRoll) {
    Rolldice(faces, oldRoll);
  } else {
    return newRoll;
  }
};

export default Rolldice;

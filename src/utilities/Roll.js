const diceDefault = 6;

function roll(faces, oldRoll) {
  if (!faces || faces < 0) {
    faces = diceDefault;
  }
  let newRoll = Math.floor(Math.random() * faces) + 1;
  if (newRoll === oldRoll) {
    Rolldice(faces, oldRoll);
  } else {
    return newRoll;
  }
}

module.exports = {
  roll,
};

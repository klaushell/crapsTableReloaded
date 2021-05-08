const diceDefault = 6;

function roll(faces, oldRoll) {
  if (!faces || faces < 1) {
    faces = diceDefault;
  }
  let newRoll = Math.floor(Math.random() * faces) + 1;
  if (newRoll === oldRoll) {
    newRoll = roll(faces, newRoll);
  }
  return newRoll;
}

module.exports = {
  roll,
};

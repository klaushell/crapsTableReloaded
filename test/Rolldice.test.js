const { expect } = require("chai");
const solutionFile = require("../src/utilities/Rolldice.js");
const rolldice = solutionFile.Rolldice;

describe("Rolldice", function () {
  const scenarios = [
    { faces: 6, cycles: 100 },
    { faces: 4, cycles: 1000 },
    { faces: 8, cycles: 100 },
    { faces: 10, cycles: 2000 },
    { faces: 6, cycles: 500 },
    { faces: null, cycles: 100 },
    { faces: -1, cycles: 200 },
  ];
  scenarios.forEach((scenario) =>
    it(`Should not repeat same roll after ${scenario.cycles} rolls.`, function () {
      for (i = 1; i < scenario.cycles; i++) {
        const oldRoll = rolldice(scenario.faces);
        const roll = rolldice(scenario.faces, oldRoll);
        expect(roll).to.not.be.equal(oldRoll);
      }
    })
  );
});

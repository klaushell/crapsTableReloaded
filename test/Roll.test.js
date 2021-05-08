const { expect } = require("chai");
const solutionFile = require("../src/utilities/Roll.js");
const rolldice = solutionFile.roll;

describe("Roll", function () {
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
      for (i = 0; i < scenario.cycles; i++) {
        const oldRoll = rolldice(scenario.faces); // 5
        const roll = rolldice(scenario.faces, oldRoll); // ???
        expect(roll).to.not.be.equal(oldRoll);
      }
    })
  );
});

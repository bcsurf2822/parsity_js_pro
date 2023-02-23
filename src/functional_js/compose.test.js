const { composeFunctions } = require("./compose");

describe("composeFunctions", () => {
  it("returns a function that takes in an argument and passes it through all the functions", () => {
    const add4 = (num) => num + 4;
    const multiplyBy2 = (num) => num * 2;
    const divideBy2 = (num) => num / 2;
    const subtract2 = (num) => num - 2;

    const composedFunction = composeFunctions(
      add4,
      multiplyBy2,
      divideBy2,
      subtract2
    );

    expect(composedFunction(10)).toEqual(12);
    expect(composedFunction(11)).toEqual(13);
    expect(composedFunction(12)).toEqual(14);
  });
});

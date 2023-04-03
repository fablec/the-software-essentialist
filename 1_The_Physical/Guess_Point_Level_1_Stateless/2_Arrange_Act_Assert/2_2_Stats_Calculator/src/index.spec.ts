import { getMin, getMax, getAvg, getLength } from "./index";
const sequence = [2, 4, 21, -8, 53, 40];

describe("stats calculator", () => {
  it("get mininmal value", () => {
    expect(getMin(sequence)).toEqual(-8);
  });

  it("get maximal value", () => {
    expect(getMax(sequence)).toEqual(53);
  });

  it("number of elements", () => {
    expect(getLength(sequence)).toEqual(6);
  });

  it("get Average value", () => {
    expect(getAvg(sequence)).toEqual(18.666666666666668);
  });
});

import { isValidMilitaryRange } from "./index";

describe("military time validator", () => {
  it(`"01:12 - 14:32" is valid`, () =>
    expect(isValidMilitaryRange("01:12 - 14:32")).toBe(true));

  it(`"25:00 - 12:23" is invalid`, () =>
    expect(isValidMilitaryRange("25:00 - 12:23")).toBe(false));

  it(`"22:00 - 23:12" is valid`, () =>
    expect(isValidMilitaryRange("22:00 - 23:12")).toBe(true));

  it(`"22:00 - 00:12" is invalid`, () =>
    expect(isValidMilitaryRange("22:00 - 00:12")).toBe(false));

  it(`"24:00 - 24:12" is invalid`, () =>
    expect(isValidMilitaryRange("24:00 - 24:12")).toBe(false));
});

import { PasswordValidate } from "./index";

describe("password validator", () => {
  it("password length less than 5 is invalid", () => {
    const expected = { value: false, err: "password too short" };
    const res = PasswordValidate("1234");
    expect(res.value).toBe(expected.value);
    expect(res.err).toContain(expected.err);
  });

  it("password length greater than 15 is invalid", () => {
    const expected = { value: false, err: "password too long" };
    const res = PasswordValidate("abcdefghijklmnop");
    expect(res.value).toBe(expected.value);
    expect(res.err).toContain(expected.err);
  });

  it("password should contains at least one digit", () => {
    const expected = {
      value: false,
      err: "password must have at least a digit",
    };
    const res = PasswordValidate("abcde");
    expect(res.value).toBe(expected.value);
    expect(res.err).toContain(expected.err);
  });

  it("password should contains at least an uppercase character", () => {
    const expected = {
      value: false,
      err: "password must have at least an uppercase",
    };
    const res = PasswordValidate("abcde");
    expect(res.value).toBe(expected.value);
    expect(res.err).toContain(expected.err);
  });

  it("password '12abCD' should be valid", () => {
    const res = PasswordValidate("12abCD");
    expect(res.value).toBe(true);
    expect(res.err.length).toEqual(0);
  });
});

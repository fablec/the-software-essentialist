import { isPalindrome } from "./index";

describe("palindrome checker", () => {
  it("mom is a palindrome", () => {
    expect(isPalindrome("mom")).toBe(true);
  });
  it("wow is a palindrome", () => {
    expect(isPalindrome("wow")).toBe(true);
  });
  it("bill is not a palindrome", () => {
    expect(isPalindrome("bill")).toBe(false);
  });
  it("Mom is a palindrome", () => {
    expect(isPalindrome("Mom")).toBe(true);
  });
  it(`"Was It A Rat i Saw" is a palindrome`, () => {
    const str = "Was It A Rat i Saw";
    expect(isPalindrome(str)).toBe(true);
  });
  it(`"Never Odd or Even" is a palindrome`, () => {
    const str = "Never Odd or Even";
    expect(isPalindrome(str)).toBe(true);
  });
});

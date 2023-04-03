const reverseString = (str: string): string => str.split("").reverse().join("");

const normalizeString = (str: string): string =>
  str.toLowerCase().replace(/\s/g, "");

export const isPalindrome = (str: string) =>
  reverseString(normalizeString(str)) === normalizeString(str);

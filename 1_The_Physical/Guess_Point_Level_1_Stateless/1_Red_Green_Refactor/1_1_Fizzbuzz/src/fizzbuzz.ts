const numbers = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eught",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eightteen",
  "nineteen",
];
const tens = [
  "twenty",
  "thitty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const isMultipleOfThree = (n: number): boolean => n % 3 === 0;

const isMultipleOfFive = (n: number): boolean => n % 5 === 0;

const getNumberAsString = (n: number) => {
  if (isMultipleOfFive(n) && isMultipleOfThree(n)) return "FizzBuzz";
  if (isMultipleOfThree(n)) return "Fizz";
  if (isMultipleOfFive(n)) return "Buzz";
  if (n < 20) return numbers[n];
  const D = Math.floor(n / 10);
  const d = n % 10;
  return tens[D - 2] + " " + numbers[d];
};

const fizzbuzz = (...numbers: number[]) => {
  let str = "";
  numbers.forEach(
    (n) => (str += (str.length ? ", " : "") + getNumberAsString(n))
  );
  return str;
};

export default fizzbuzz;

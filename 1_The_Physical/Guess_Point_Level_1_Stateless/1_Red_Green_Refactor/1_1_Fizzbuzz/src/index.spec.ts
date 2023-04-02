import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  test("1,2,3", () => {
    const res = fizzbuzz(1, 2, 3);
    expect(res).toEqual("one, two, Fizz");
  });

  test("3,5,15", () => {
    const expected = "Fizz, Buzz, FizzBuzz";
    expect(fizzbuzz(3, 5, 15)).toEqual(expected);
  });

  test("90, 91, 92, 93, 95", () => {
    const expected = "FizzBuzz, ninety one, ninety two, Fizz, Buzz";
    expect(fizzbuzz(90, 91, 92, 93, 95)).toEqual(expected);
  });
});

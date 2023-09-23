import greatestNumber from "../chapter-4/exercise-4";

test("greatest-number", () => {
  const array = [65, 55, 45, 35, 225, 15, 10];
  expect(greatestNumber(array)).toEqual(4);
});

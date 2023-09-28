import insertionSort from "../sorting/insertionSort";

test("insertion-sort", () => {
  const array = [65, 55, 45, 35, 25, 15, 10];
  insertionSort(array);
  expect(array).toEqual([10, 15, 25, 35, 45, 55, 65]);
});

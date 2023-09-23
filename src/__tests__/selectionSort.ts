import selectionSort from "../sorting/selectionSort";

test("selection-sort", () => {
  const array = [65, 55, 45, 35, 25, 15, 10];
  selectionSort(array);
  expect(array).toEqual([10, 15, 25, 35, 45, 55, 65]);
});

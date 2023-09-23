import bubbleSort from "../sorting/bubbleSort";

test("bubble-sort", () => {
  const arr = [65, 55, 45, 35, 25, 15, 10];
  bubbleSort(arr);
  expect(arr).toEqual([10, 15, 25, 35, 45, 55, 65]);
});

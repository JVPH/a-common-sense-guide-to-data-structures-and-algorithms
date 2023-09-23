/*
"The following function finds the greatest single number within an array,
but has an efficiency of O(N2). Rewrite the function so that it becomes a
speedy O(N)"
*/

export default function greatestNumber(array: number[]): number {
  let greatest = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[greatest]) {
      greatest = i;
    }
  }
  return greatest;
}

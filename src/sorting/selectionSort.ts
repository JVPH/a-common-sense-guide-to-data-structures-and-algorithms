export default function selectionSort(array: number[]): void {
  for (let i = 0; i < array.length - 1; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      const temp = array[i];
      array[i] = array[lowest];
      array[lowest] = temp;
    }
  }
}

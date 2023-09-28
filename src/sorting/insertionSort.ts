export default function insertionSort(array: number[]): void {
  for (let i = 1; i < array.length; i++) {
    const tempValue = array[i];
    let position = i - 1;

    while (position >= 0) {
      if (array[position] > tempValue) {
        array[position + 1] = array[position];
        position--;
      } else {
        break;
      }
    }
    array[position + 1] = tempValue;
  }
}

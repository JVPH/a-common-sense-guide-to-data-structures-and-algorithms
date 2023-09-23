// export default function bubbleSort(arr: number[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
// }

export default function bubbleSort(list: number[]): void {
  let unsortedUntilIndex = list.length - 1;
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < unsortedUntilIndex; i++) {
      if (list[i] > list[i + 1]) {
        const temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
        sorted = false;
      }
    }
    unsortedUntilIndex--;
  }
}

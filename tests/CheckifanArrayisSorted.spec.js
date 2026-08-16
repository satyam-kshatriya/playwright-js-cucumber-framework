let arr = [1, 2, 4, 3, 5];
let isSorted = true;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    isSorted = false;
    break;
  }
}
if (isSorted === true) {
  console.log("Array is sorted");
} else {
  console.log("array is not sorted");
}

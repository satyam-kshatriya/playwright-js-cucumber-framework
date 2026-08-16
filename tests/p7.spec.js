let arr = [0, 1, 0, 3, 12];
let arr1 = [];
let index = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != 0) {
    arr1[index] = arr[i];
    index++;
  }
}
console.log(index);
while (index < arr.length) {
  arr1[index] = 0;
  index++;
}
console.log(arr1);

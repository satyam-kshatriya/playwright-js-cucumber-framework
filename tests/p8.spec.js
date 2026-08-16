let arr = [1, 2, 3, 4, 5];
let k = 5;
let arr1 = [];
for (let i = 0; i < arr.length; i++) {
  arr1[(i + k) % arr.length] = arr[i];
}
console.log(arr1);

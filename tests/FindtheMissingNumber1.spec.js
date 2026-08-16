let arr = [1, 2, 4, 5];

//finding missing number when array is not sorted
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}

let missingnum = ((arr.length + 1) * (arr.length + 2)) / 2 - sum;
console.log(missingnum);

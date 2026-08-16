let arr = [1, 2, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum = arr[i] + sum;
}
missingnum = ((arr.length + 1) * (arr.length + 1 + 1)) / 2 - sum;
console.log(missingnum);

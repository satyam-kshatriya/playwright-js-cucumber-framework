let arr = [1, 1, 0, 1, 1, 1, 0, 1];
let count = 0;
let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 1) {
    count++;
    if (count > max) {
      max = count;
    }
  } else {
    count = 0;
  }
}
console.log(max);

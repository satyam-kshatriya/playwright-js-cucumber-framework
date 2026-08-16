let arr = [1, 2, 4, 5];
let missingnumner = 0;
//finding missing number when array is sorted
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i + 1] != arr[i] + 1) {
    missingnumner = arr[i] + 1;
  }
}
console.log("missing number is :" + missingnumner);

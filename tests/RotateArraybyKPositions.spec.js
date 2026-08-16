let arr = [1, 2, 3, 4, 5];
let k = 11;
let leng = arr.length;

let result = [];
for (let i = 0; i < arr.length; i++) {
  result[(i + k) % leng] = arr[i];
}
console.log(result);

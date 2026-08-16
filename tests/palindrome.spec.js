//Move All Zeros to End
let num = ["1", "2", "0", "0", "2"];
index = 0;
let arr1 = [];
for (let i = 0; i < num.length; i++) {
  if (num[i] != 0) {
    arr1[index] = num[i];
    index++;
  }
}
console.log(index);
console.log(arr1);
while (index < num.length) {
  arr1[index] = 0;
  index++;
}
console.log(arr1);

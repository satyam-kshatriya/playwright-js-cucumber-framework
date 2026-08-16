//union of arrays

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

let set1 = new Set();

for (let ch of arr1) {
  set1.add(ch);
}

for (let ch of arr2) {
  set1.add(ch);
}

console.log(set1);

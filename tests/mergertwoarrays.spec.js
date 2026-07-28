let str1 = ["1", "2", "3", "4"];
let str2 = ["3", "4", "5"];
let set1 = new Set();

for (let ch of str1) {
  set1.add(ch);
}

for (let ch of str2) {
  set1.add(ch);
}

console.log(set1);

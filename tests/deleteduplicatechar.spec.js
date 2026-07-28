let str = "aabbccdd";
let map1 = new Map();
let str1 = "";
for (let ch of str) {
  if (!map1.has(ch)) {
    map1.set(ch, 1);
    str1 = str1 + ch;
  }
}
console.log(str1);

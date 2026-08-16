let str = "aabbccdd";
let map1 = new Map();
let str2 = "";
for (let ch of str) {
  if (!map1.has(ch)) {
    map1.set(ch, 1);
    str2 = str2 + ch;
  }
}
console.log(str2);

let str = "aabbcdde";
let map1 = new Map();
for (let ch of str) {
  if (!map1.has(ch)) {
    map1.set(ch, 1);
  } else {
    map1.set(ch, map1.get(ch) + 1);
  }
}
console.log(map1);
for (let ch of str) {
  if (map1.get(ch) === 1) {
    console.log("first non repeating character is " + ch);
    break;
  }
}

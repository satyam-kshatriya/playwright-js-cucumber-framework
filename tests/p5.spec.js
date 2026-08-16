let arr = [2, 5, 1, 2, 3, 5, 1];
let map1 = new Map();

for (let ch of arr) {
  if (!map1.has(ch)) {
    map1.set(ch, 1);
  } else {
    map1.set(ch, map1.get(ch) + 1);
    console.log(ch);
    break;
  }
}

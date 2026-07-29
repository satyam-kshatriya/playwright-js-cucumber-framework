let arr = [2, 3, 4, 2, 3, 5, 6, 5];
let map = new Map();

for (let x of arr) {
  if (!map.has(x)) {
    map.set(x, 1);
  } else {
    map.set(x, map.get(x) + 1);
  }
}

console.log(map);
let found = false;
for (let y of arr) {
  if (map.get(y) == 1) {
    console.log("first non repeating is:" + y);
    found = true;
    break;
  }
}
if (found == true) {
  console.log("non reapting number found");
} else {
  console.log("non reapting number NOT found");
}

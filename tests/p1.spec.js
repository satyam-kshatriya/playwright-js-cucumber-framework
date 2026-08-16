let name = "satyamchattriya";
let map = new Map();

for (let ch of name) {
  if (!map.has(ch)) {
    map.set(ch, 1);
  } else {
    map.set(ch, map.get(ch) + 1);
  }
}
console.log(map);
for (let ch of name) {
  if (map.get(ch) == 1) {
    console.log(ch);
    break;
  }
}

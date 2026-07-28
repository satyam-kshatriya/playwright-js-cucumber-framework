let str1 = "listen";
let str2 = "silentaa";

console.log(str1.length);
console.log(str2.length);

if (str1.length !== str2.length) {
  console.log("not anagram");
} else {
  let map = new Map();
  for (let ch of str1) {
    if (!map.has(ch)) {
      map.set(ch, 1);
    } else {
      map.set(ch, map.get(ch) + 1);
    }
  }
  console.log(map);

  //main logic for anagram
  let isanagram = true;
  for (let ch of str2) {
    if (!map.has(ch) || map.get(ch) == 0) {
      isanagram = false;
      break;
    } else {
      map.set(ch, map.get(ch) - 1);
    }
  }
  if (isanagram) {
    console.log("anagram");
  } else {
    console.log("not anagram");
  }
}

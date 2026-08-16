let str1 = "satyam";
let str2 = "satyam";
let map = new Map();

if (str1.length !== str2.length) {
  console.log("not anagram");
} else {
  for (let ch of str1) {
    if (!map.has(ch)) {
      map.set(ch, 1);
    } else {
      map.set(ch, map.get(ch) + 1);
    }
  }
  console.log(map);

  let anagram = true;

  for (let ch of str2) {
    if (map.get(ch) == 0 || !map.has(ch)) {
      anagram = false;
      break;
    } else {
      map.set(ch, map.get(ch) - 1);
    }
  }
  if (anagram) {
    console.log("string is anagram");
  } else {
    console.log("string is NOT anagram");
  }
}

let str1 = "listen";
let str2 = "silent";
let map1 = new Map();

if (str1.length !== str2.length) {
  console.log("Not anagram");
}

for (let ch of str1) {
  if (!map1.has(ch)) {
    map1.set(ch, 1);
  } else {
    map1.set(ch, map1.get(ch) + 1);
  }
}

for (let i = 0; i < str2.length; i++) {
  if (!map1.has(str2[i])) {
    console.log("not anagram");
    break;
  } else {
    map1.set(ch, map1.get(ch) - 1);
  }
}

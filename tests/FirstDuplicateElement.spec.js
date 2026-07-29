let arr = [2, 5, 1, 2, 3, 5, 1];
let set1 = new Set();
let duplicate = -1;

for (let x of arr) {
  if (set1.has(x)) {
    console.log("duplicate element is :" + x);
    break;
  } else {
    set1.add(x);
  }
}

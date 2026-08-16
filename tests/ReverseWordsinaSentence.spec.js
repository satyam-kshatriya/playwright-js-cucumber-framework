let str = "I love Playwright";
let arr = str.split(" ");
let revarr = [];
console.log(arr);
for (let i = arr.length - 1; i >= 0; i--) {
  revarr.push(arr[i]);
}
console.log(revarr.join(" "));

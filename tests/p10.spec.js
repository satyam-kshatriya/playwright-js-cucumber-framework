let str = "I am learning Playwright Automation";
let arr = str.split(" ");
let longest = "";
console.log(arr);
for (let ch of arr) {
  if (ch.length > longest.length) {
    longest = ch;
  }
}
console.log(longest);

let str = "I am learning Playwright Automation";
let word = str.split(" ");
console.log(word);
let longest = "";
for (let arr of word) {
  if (arr.length > longest.length) {
    longest = arr;
  }
}
console.log(longest);

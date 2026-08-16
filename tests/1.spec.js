// Find Longest Word in a Sentence
let sentense = "my name is satyam kshatriya";
let arr = sentense.split(" ");
console.log(arr);
let longest = "";
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > longest.length) {
    longest = arr[i];
  }
}
console.log(longest);

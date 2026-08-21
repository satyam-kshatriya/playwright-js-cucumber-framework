//reverse alternate words in string

let str = "Hello World This Is A Test";
let words = str.split(" ");
for (let i = 0; i < words.length; i += 2) {
  words[i] = words[i].split("").reverse().join("");
}
console.log(words.join(" "));

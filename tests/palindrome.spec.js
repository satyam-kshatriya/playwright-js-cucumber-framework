let name = "caca";
let name1 = name.toLowerCase();
console.log(name1);
let name2 = name1.split('').reverse().join('');
if(name1===name2) {
    console.log("palindrom");
}
else {

     console.log("not palindrom");
}
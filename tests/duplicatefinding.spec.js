let str = ['1','2','3','4','1'];
let str1 = new Set();
let str2 = new Set();

for (let i=0;i<str.length;i++)
{
if(!str1.has(str[i]))
{
str1.add(str[i])
}
else {
str2.add(str[i])
}

}
console.log([...str2]);
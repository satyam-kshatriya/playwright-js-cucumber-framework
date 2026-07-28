let str = "satyamchattriya" ;

let str1 = str.split('');

let vowels = ['a','e','i','o','u']

let count = 0;

console.log([...str1]);

for(let i= 0; i<str1.length;i++)
{

for(let j= 0; j<vowels.length;j++)
{
if(str1[i] == vowels[j])
    {
count = count +1 ;
}

}
}
console.log(count);
let str = "satyamchattriya";
let  str1 = new Map(); 

for(let ch of str){

    if(!str1.has(ch))
    {
        str1.set(ch,1)
    }

    else if(str1.has(ch))
    {
        str1.set(ch,str1.get(ch)+1);
    }
}

console.log(str1);

for(let ch of str){

    if(str1.get(ch) === 1)
    {
        console.log("first non repeating character is :" +  ch);
        break ;
    }
}

let str = "aabbccd";
let map = new Map();

for(let ch of str )
{
if (map.has(ch))
    {
    map.set(ch,map.get(ch)+1);
}
else {
    map.set(ch,1);
}
}
console.log(map);

for(let [key,value] of map)
{
    console.log( key + ':' + value );
}
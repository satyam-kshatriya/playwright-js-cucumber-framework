let arr = [1,2,4,5];
let missingnumner = 0;

for(let i =0 ; i< (arr.length -1); i++)
{
    if (arr[i+1] != arr[i] +1 ){

missingnumner = arr[i]+1;
    }
}
console.log("missing number is :" + missingnumner);
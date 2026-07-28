let arr = ['1','2','3','-4'] ;

let largest = -1/0;
let secondlargest = -1/0;

for(let i = 0; i<arr.length;i++)
{
if(arr[i]>largest)
{
    secondlargest = largest ;
    largest = arr[i];
    
}

else if (arr[i]>secondlargest && arr[i] != largest)
{
    secondlargest = arr[i];
}


}
console.log( "largest is : " + largest);
console.log("second largest number is : " + secondlargest);

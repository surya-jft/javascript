var arr = [1,2,4,2,3,2,3,4,5,6];
var num= [];
console.log("remove duplicate values from an array");

for(var i= 0; i<arr.length; i++)
{
    if(!num.includes(arr[i]))
    {
        num.push(arr[i]);
    }
}
console.log(num);
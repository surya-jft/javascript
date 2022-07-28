var arr = [23,43,1111,44,2222222,444,122345];
var first,second,third;
first = arr[0];
for(var i=1;i<arr.length;i++)
{
    if(arr[i]>first)
    {
        third = second;
        second = first;
        first = arr[i];
    }
    else if(arr[i]>second)
    {
        third = second;
        second = arr[i];
    }
    else if(arr[i]>third)
    {
        third = arr[i];
    }
    
}
console.log(third);
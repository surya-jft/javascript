var arr = [1,2,4,2,3,2,3,4,5,6];

console.log("occurrences of each number of an array");

for(var i= 0; i<arr.length; i++)
{
    var count = 0;
    for(var j= 0; j<arr.length ; j++)
    {
        if(arr[i]==arr[j])
        {
            count++;
        }
    }
    console.log("Number "+arr[i],"Occured "+count+" time");
}
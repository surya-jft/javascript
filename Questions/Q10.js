var arr= [1,2,3,4,5,0,7,8,9,10,11,12,13];
var num;
for(var i=0; i<arr.length; i++)
{
    if(arr[i]==0)
    {
        num = i+1;
        console.log(num);
    }
}
var str = "ssssuryaaaaaa";

console.log("Duplicate characters in a given string");

for(var i= 0; i<str.length; i++)
{
    var count = 0;
    for(var j= 0; j<str.length ; j++)
    {
        if(str[i]==str[j] && str[i] != " ")
        {
            count++;
            str[j] = "0";
        }
    }
    if(count > 1 && str[i] !="0")
    {
       console.log(str[i]);
    }
}
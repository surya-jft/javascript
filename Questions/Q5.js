var num =1991;

for(var n =num+1 ; n>num; n++)
{
    var s = n.toString();
    var a = s.split("").reverse().join("");
    var rev = Number(a);
    if(n==rev)
    {
        console.log("The next palindrome is",n);
        break;
    }
}
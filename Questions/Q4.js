var num = 1991;
var s = num.toString();
var a = s.split("").reverse().join("");
var rev = Number(a);
if(rev == num)
{
    console.log("The number "+num+" is palindrome");
}
else
{
    console.log("The number "+num+" is not a palindrome");    
}
var num;
var prime=true;
num = Math.floor(Math.random() * (100-1));
if (num==1)
{
    console.log("1 is neither prime nor composite number");
}

else if(num>1)
{
    for(var i=2;i<num;i++)
    {
        if(num%i==0)
        {
            prime = false;
            break;
        }
    }
    if(prime==true)
    {
        console.log("The number "+num+" is prime number");
    }
    else
    {
        console.log("The number "+num+" is not a prime number");
    }
}    
else
{
    console.log("The number "+num+" is not a prime number");
}
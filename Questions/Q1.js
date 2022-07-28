/*
var a ="surya";
var reverse = a.split("").reverse().join("");
console.log(reverse);
*/





var name = "Surya Prakash";

function reverse()
{
    var newString = "";
    for (var i = name.length - 1; i >= 0; i--) {
        newString += name[i];
    }
    console.log(newString);
}
reverse();
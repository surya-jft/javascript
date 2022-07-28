/*
var name = "Hi my name is"
var rev1 = name.split("").reverse().join("");
var rev2 = rev1.split(" ").reverse().join(" ");
console.log(rev1);
*/



var string = "Hi my name is";
var arr = string.split(" ");
var revJoin = [];

for (var i =0; i<arr.length; i++){
    var temp = arr[i].split("");
    var rev = temp.reverse();
    revJoin.push(rev.join(""));
}

var revStr = revJoin.join(" ");

console.log(revStr);
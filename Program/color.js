// function fn1()
// {
//     var rd1 = document.getElementById("rd1");
//     var rd2 = document.getElementById("rd2");
//     var rd3 = document.getElementById("rd3");

//     if(rd1.checked==true){
//     label1=document.getElementById("label1").style.backgroundColor="red";
//     label2=document.getElementById("label2").style.backgroundColor="red";
//     label3=document.getElementById("label3").style.backgroundColor="red";
//     label4=document.getElementById("label4").style.backgroundColor="red";
//     label5=document.getElementById("label5").style.backgroundColor="red";
//     label6=document.getElementById("label6").style.backgroundColor="red";
//     }

//     else if(rd2.checked==true){
//     label1=document.getElementById("label1").style.backgroundColor="green";
//     label2=document.getElementById("label2").style.backgroundColor="green";
//     label3=document.getElementById("label3").style.backgroundColor="green";
//     label4=document.getElementById("label4").style.backgroundColor="green";
//     label5=document.getElementById("label5").style.backgroundColor="green";
//     label6=document.getElementById("label6").style.backgroundColor="green";
//     }

//     else if(rd3.checked==true){
//     label1=document.getElementById("label1").style.backgroundColor="blue";
//     label2=document.getElementById("label2").style.backgroundColor="blue";
//     label3=document.getElementById("label3").style.backgroundColor="blue";
//     label4=document.getElementById("label4").style.backgroundColor="blue";
//     label5=document.getElementById("label5").style.backgroundColor="blue";
//     label6=document.getElementById("label6").style.backgroundColor="blue";
//         }
// }


$(document).ready(function() {
    $("#rd1").on("click", function() {
        $(".d").css("backgroundColor", "red");
    })
    $("#rd2").on("click", function() {
        $(".d").css("backgroundColor", "green");
    })
    $("#rd3").on("click", function() {
        $(".d").css("backgroundColor", "blue");
    })
})

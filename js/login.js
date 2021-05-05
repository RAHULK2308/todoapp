var username=document.getElementById("username");
var pwd=document.getElementById("password");


var f=document.getElementById("form1");


f.addEventListener("submit", function(){
    if(username.value=="admin" && pwd.value=="12345")
     {
        alert("success") 
     } else{
         event.preventDefault();
     }
},true);



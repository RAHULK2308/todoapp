var username=document.getElementById("username");
var pwd=document.getElementById("password");

function check(name,pwd,callback)
{
   if(name.value==="admin" && pwd.value==="12345"){
      return(callback(true));
   }else{
      return(callback(false));
   }
}
function action(result){
   if (result){
      $("#message").css("color","green")
      $("#message").html("<h6>VALID</h6>")
      alert("success")
      return true;
   } else{
      $("#message").css("color","RED")
      $("#message").html("<h6>INVALID</h6>")
      return false;
   }
}

function validate(){
   return (check(username,pwd,action))
};
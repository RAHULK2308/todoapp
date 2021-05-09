

const main = document.getElementById("main");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => main.innerHTML = getTodo(todos));
  const getTodo = (todos) => {
  const names = todos
    .map((todos) => `<tr><td class="tbln">ID :${todos.id}  <input type="checkbox" onclick=checkcount()  value=${todos.title} ${check(todos.completed)}></tr></td><tr><td> Title :${todos.title}</td></tr>`)
    
return `<th>${names}</th>`;
};
function check(val){

if(val){
    return "checked"
} else {
    return null ;
}
}
 function checkcount(){

    function Display() {
        alert("Congratulations...! You completed 5 Tasks")
    }
    
    let Count = new Promise(function(Resolve, Reject) {
        var Checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
        x=Checkbox.length;
        
   
        if (x == 95) {
        Resolve("OK");
        } 
    });
    
    Count.then(
        function() {
            Display();
        }
    );
}

   $("#link2").click(function(){
        alert("SuccessFully Logout");
      });
    
    
    
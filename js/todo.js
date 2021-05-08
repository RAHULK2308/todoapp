var loadAjax = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhr.send();

    xhr.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            
            var htmlData = JSON.parse(xhr.responseText);
            var htmlContent =""
            for(var i =0; i<htmlData.length; i++){
                var currentRecord = htmlData[i];
                htmlContent += "<tr><td>"+currentRecord.id+"</td><td>"+currentRecord.title+"</td><td><input type='checkbox' id='test' value=''></td></tr>"
                document.getElementById("tableBody").innerHTML = htmlContent;
                if (currentRecord.completed==true){
                    var input = document.getElementById("test");
                    input.setAttribute('value', true);
                    input.setAttribute('disabled', true);
                    var parent = document.getElementById("tableBody");
                    parent.appendChild(input);
                    console.log(parent)
               }
                }
            }
            

            
        }
    }


   
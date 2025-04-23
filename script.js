let input1 = document.getElementById("name");
        let input2 = document.getElementById("password");
        let div = document.querySelector("div");


        function del(btn , div2){
            btn.addEventListener("click",function(){
                div2.remove();
            })
        }
        function clear(){
            input1.value = "";
            input2.value = "";
        }

        document.getElementById("login").addEventListener("click" , function(e){
            e.preventDefault();
            let value1 = input1.value;
            let value2 = input2.value;
            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let deletebtn = document.createElement("button");
            deletebtn.innerText = "delete";
            li.innerText=`Name : ${value1}`;
            li2.innerText=`Password : ${value2}`;
            let div2 = document.createElement("div");
            div2.appendChild (li);
            div2.appendChild (li2);
            div2.appendChild (deletebtn);
            div.appendChild (div2);
            clear();
            del(deletebtn , div2);
        })
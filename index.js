let signupBtn = document.getElementById("signupBtn");
        let signinBtn = document.getElementById("signinBtn");
        let nameField = document.getElementById("nameField");
        let title = document.getElementById("title");


signinBtn.onclick = function(){
            nameField.style.maxHeight = "0";
            title.innerHTML = "Sign In";
            signupBtn.classList.add("disable");
            signinBtn.classList.remove("disable");
        }

signupBtn.onclick = function(){
            nameField.style.maxHeight = "60px";
            title.innerHTML = "Sign Up";
            signupBtn.classList.remove("disable");
            signinBtn.classList.add("disable");
        }


var objPeople = [
    {
        username:"sam@gmail.com",
        password:"coder"
    },
    {
        username:"matt@gmail.com",
        password:"class"
    },
    {
        username:"chris@gmail.com",
        password:"forever"
    }

]

document.querySelectorAll("button")[1].addEventListener("click",getinfo);

function getinfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for(i=0;i<objPeople.length;i++){
        if(username===objPeople[i].username && password === objPeople[i].password){
            alert(username+" is logged in!!!");
            return;
        }
    }
    console.log("incorrect username or password");
}
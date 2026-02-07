let password=document.getElementById("password");
let button=document.getElementById("togglePassword");

button.onclick=function(){
    if(password.type =="password"){
        password.type="text";
        button.src="images/eye-open.png";
    }
    else{
        password.type ="password";
        button.src="images/eye-close.png";
    }
}
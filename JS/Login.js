let usernameDOM=document.getElementById("username");
let passwordDOM=document.getElementById("password");
let logInBtn=document.getElementById("log-in");

let getUser=localStorage.getItem('username');
let getPass=localStorage.getItem('password');


logInBtn.addEventListener('click',function(e){
    e.preventDefault(); // why ???????????????????
    if(usernameDOM.value==="" || passwordDOM.value===""){
        alert("Please Fill The Data Bellow n3ldindymak alkhawa");
    }
    else{
        if((getUser && getUser.trim()===usernameDOM.value.trim())
           && (getPass && getPass===passwordDOM.value)){ 

            setTimeout(()=>{ window.location="HOME.html"; },1500)
        }
        
    }

})
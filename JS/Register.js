// variables :

let usernameDOM=document.getElementById("name");
let emailDOM=document.getElementById("email");
let passwordDOM=document.getElementById("password");
let signUpBtn=document.getElementById("signUp");

// events in button :

signUpBtn.addEventListener('click',function(e){
    e.preventDefault(); // why ???????????????????
    if(usernameDOM.value==="" || emailDOM.value==="" || passwordDOM.value===""){
        alert("Please Fill The Data Bellow n3ldindymak alkhawa");
    }
    else{
        localStorage.setItem('username',usernameDOM.value);
        localStorage.setItem('email',emailDOM.value);
        localStorage.setItem('password',passwordDOM.value); // faulte to save password in localstorage

        setTimeout(()=>{ window.location="LOGIN.html"; },1500)
    }

    
});
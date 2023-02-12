let userInfoDOM=document.getElementById("user-info");
let userDOM=document.getElementById("user");
let linksDOM=document.getElementById("links");
let logOutDom=document.getElementById("logeOut");

let usernameValue=localStorage.getItem('username');

if(usernameValue){
    linksDOM.remove();  // hide the first nav
    userInfoDOM.style.display="flex"; // show a new nav
    userDOM.innerHTML=usernameValue;
}

//login out of the page :
logOutDom.addEventListener('click',function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location="REGISTER.html";},1500)

});
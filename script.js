const button = document.getElementById("Connect with me");
const message = document.getElementById("message");

button.addEventListener("click",()=>{
    if(message.textContent===""){
    message.textContent = "Thanks for visiting my coding journey!";
    message.style.marginTop= "20px";
    message.style.fontSize= "18px";
}else{
    message.textContent = "";
}
});
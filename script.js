const button = document.getElementById("helloBtn");
const message = document.getElementById("message");

button.addEventListener("click",()=>{
    message.textContent = "Thanks for visiting my coding journey!";
    message.style.marginTop= "20px";
    message.style.fontSize= "18px";
});
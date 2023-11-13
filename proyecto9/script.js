const body = document.querySelector("body");
const toggle = document.getElementById("toggle");

toggle.addEventListener('click', ()=>{
    toggle.classList.toggle("toggleClaro");
    body.classList.toggle("toggleClaro");
}) 
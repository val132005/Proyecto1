const deg = 6;
const horas = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');

setInterval(()=>{
    let tiempo = new Date();
    let hr = tiempo.getHours()*30;
    let min = tiempo.getMinutes()*deg;
    let seg = tiempo.getSeconds()*deg;



    horas.style.transform =`rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;


})

function calcularTiempo(){
    let tiempoD = new Date();

    let horaD = tiempoD.getHours();
    let minutosD = tiempoD.getMinutes();
    let segundosD = tiempoD.getSeconds();

    let amOPm = horaD >= 12 ? "PM" : "AM";

    // Convertir a formato de 12 horas
    horaD = horaD % 12 || 12; // Convertir 0 a 12

    horaD = horaD<10 ? "0" + horaD:horaD;
    minutosD = minutosD<10 ? "0" + minutosD:minutosD;
    segundosD = segundosD<10 ? "0" + segundosD:segundosD;


    let pantallaReloj = horaD + ":" + minutosD + ":" + segundosD + " " + amOPm;

    let relojDigital = document.querySelector(".relojDigital");
    relojDigital.innerHTML = pantallaReloj;

}

setInterval(calcularTiempo, 1000);



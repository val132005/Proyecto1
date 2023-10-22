// .querySelector metodo para realizar a rreglos a partir de un contenid definido 

const pantalla = document.querySelector(".pantalla");

const botones = document.querySelectorAll(".boton");

botones.forEach(boton =>{
    boton.addEventListener("click", () => {
        let botonOn = boton.textContent;
        if (boton.id === "borrar"){
            if (pantalla.textContent.length === 1 || pantalla.textContent === "!Erorr!"){
                pantalla.textContent="0";
            }else{
                
                pantalla.textContent = pantalla.textContent.slice(0, -1);
                
            }
            return;
            
        }

        if (boton.id === "igual") {
            try {
                const expresion = pantalla.textContent;
                if (expresion.includes("//")) {
                    pantalla.textContent = "!Erorr!";
                } else {
                    const resultado = eval(expresion);
                    if (isNaN(resultado) || !isFinite(resultado)) {
                        pantalla.textContent = "!Erorr!";
                    } else {
                        pantalla.textContent = resultado;
                    }
                }
            } catch (error) {
                pantalla.textContent = "!Erorr!";
            }
            return;
        }


        if (boton.id === "limpiar") {
            pantalla.textContent = "0";
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "!Erorr!") {
            pantalla.textContent = botonOn;
        } else {
            pantalla.textContent +=botonOn;
        }

        
    })



})

})

const btnEmpezar=document.querySelector("#btn-empezarJuego");
const pantallaJuego=document.querySelector(".juego");
const pantallaInicio=document.querySelector(".inicio");
const cabeza=document.querySelector(".cabeza");

btnEmpezar.addEventListener("click",function(){
    pantallaInicio.classList.add("ocultarInicio");
    pantallaJuego.classList.add("mostrarJuego");
    cabeza.style.background="none";
});


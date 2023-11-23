export default (() => {


    
let cortina = document.getElementsByClassName("cortina");
let despliegue =document.getElementsByClassName('top-bar-hamburguer');

 despliegue.addEventListener("click", () => {
    cortina.classList.toggle("active");
 });


})();
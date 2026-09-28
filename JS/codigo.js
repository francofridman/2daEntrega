
const btnCargar = document.getElementById("btn-cargar");
const listaTenistas = document.getElementById("btn-tenistas");
const btnTema = document.getElementById("btn-tema");

function cargarTenistas () {
    fetch('js/datos.json')
    .then(res => res.json())
    .then(tenistas => {
        

         for(const tenista of tenistas)  {
             document.querySelector("#btn-tenistas").innerHTML +=
             `<div> <h2>  ${tenista.nombre}</h2>
             <p>Edad : ${tenista.edad} </p>
             <p>Mano : ${tenista.mano}  </p>
              <p>Revés : ${tenista.reves}  </p>
              <p>Características : ${tenista.caracteristicas}  </p>
           
            </div>`

 }  

}) 
.catch(error => console.error("Error al cargar los datos:", error));
 }

function cambiarTema() {
    document.body.classList.toggle("dark");
}

btnTema.addEventListener("click", cambiarTema);
btnCargar.addEventListener("click", cargarTenistas);


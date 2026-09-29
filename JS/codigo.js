
const btnCargar = document.getElementById("btn-cargar");
const listaTenistas = document.getElementById("btn-tenistas");
const btnTema = document.getElementById("btn-tema");

function cargarTenistas () {

    fetch('JS/datos.json')
    .then(res => res.json())
    .then(tenistas => {
       

         for(tenista of tenistas)  {
             document.querySelector("#btn-tenistas").innerHTML +=
             `<div> <h2 class="nombre">  ${tenista.nombre}</h2>
             <p><strong>Edad : </strong>${tenista.edad} </p>
             <p><strong>Mano : </strong>${tenista.mano}  </p>
              <p><strong>Revés : </strong>${tenista.reves}  </p>
              <p><strong>Características : </strong>${tenista.caracteristicas}  </p>
           
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



const btnCargar = document.getElementById("btn-cargar");
const listaTenistas = document.getElementById("btn-tenistas");

function cargarTenistas () {
    fetch('js/datos.json')
    .then(res => res.json())
    .then(tenistas => {
         for(tenista of tenistas)  {
             document.querySelector("section").innerHTML +=
             `<div> <h2>  ${tenista.nombre}</h2>
             <p>Edad : ${tenista.edad} </p>
             <p>Mano : ${tenista.mano}  </p>
              <p>Revés : ${tenista.reves}  </p>
              <p>Características : ${tenista.caracteristicas}  </p>
           
            </div>`

 }  
listaTenistas.innerHTML = htmlAcumulado;
}) 
.catch(error => console.error("Error al cargar los datos:", error));
 }

btnCargar.addEventListener("click", cargarTenistas);
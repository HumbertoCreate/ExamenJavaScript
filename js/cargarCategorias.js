


// Eventos
document.addEventListener('DOMContentLoaded', obtenerCartegorias);


// Funciones

function obtenerCartegorias(){
    const url = 'http://localhost:4000/api/categorias';

    fetch(url, {
        method: 'GET'
    })
    .then(respuesta => {
        if (respuesta.ok) {
            // console.log(respuesta);
            // console.log(respuesta.text());
            return respuesta.text();
        } else
            throw "ERROR: No hay categorias";
    })
    .then(function(texto) {
        console.log(texto);
    });
}
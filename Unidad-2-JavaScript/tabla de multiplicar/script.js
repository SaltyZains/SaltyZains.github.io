function multiplicar(){

    let body = document.getElementById('body');

    let numero = document.getElementById('numero').value;
    let maximo = document.getElementById('maximo').value;

    let tabla = document.createElement("table");
    let tEncabezado = document.createElement("thead");
    let tFila = document.createElement("tr");


    let tMultiplo = document.createElement("th");
    tMultiplo.innerText = "Multiplo";
    tFila.appendChild(tMultiplo);

    let tResultado = document.createElement("th");
    tResultado.innerText = "Resultado";
    tFila.appendChild(tResultado);

    tEncabezado.appendChild(tFila);
    tabla.appendChild(tEncabezado);
    
    for (let i = 1; i < maximo; i++) {
        let fila = document.createElement("tr");

        let multiplicacion = document.createElement("td");
        let resultado = document.createElement("td");

        multiplicacion.innerText = i;
        resultado.innerText = i * numero;

        fila.appendChild(multiplicacion);
        fila.appendChild(resultado);
        tabla.appendChild(fila);
    }

    body.appendChild(tabla);
}



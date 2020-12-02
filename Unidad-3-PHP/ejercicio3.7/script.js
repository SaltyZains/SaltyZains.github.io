let selectPaises = document.getElementById("paises");
let selectEstados = document.getElementById("estados");
let selectCiudades = document.getElementById("ciudades");


selectPaises.addEventListener("change", function() {
    eliminarOpciones(selectEstados)
    eliminarOpciones(selectCiudades)
    cargarDatos(selectEstados, selectPaises, 'estados', 'paisId')
})


selectEstados.addEventListener("change", function() {
    eliminarOpciones(selectCiudades)
    cargarDatos(selectCiudades, selectEstados, 'ciudades', 'estadoId')
})


function cargarDatos(selector, selectorAnterior, tabla, idWhere) {
    let xhr = new XMLHttpRequest();
    let dato = selectorAnterior.value;

    selector.disabled = false;
    xhr.open('GET', 'servidor.php?dato=' + dato + '&tabla=' + tabla + '&idWhere=' + idWhere, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let json = JSON.parse(xhr.responseText);
            
            for (let key in json) {
                let option = document.createElement('option');
                option.text = key
                option.setAttribute('value', json[key])
                selector.add(option);
            }
        } 
    }
    xhr.send();
}


function eliminarOpciones(selector) {
    for (let i = selector.options.length - 1; i >= 0; i--) {
        selector.remove(i);
    }
}
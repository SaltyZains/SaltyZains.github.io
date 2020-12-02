let contador = 1;

function agregar(){

    let boton = document.getElementById("aceptar");
    let numero = document.getElementById("numero").value;
    let contactos = [];


    for (let i = 0; i < numero; i++) {
        let contacto = {
            id: contador,
            nombre: prompt("Nombre:"),
            numero: prompt("Ingrese el numero:")
        }
        contactos[i] = contacto; 
        contador++;   
    }

    for (let index = 0; index < numero; index++) {
        document.write("ID: " +contactos[index].id + " Nombre: " + contactos[index].nombre + " Numero: " + contactos[index].numero);
        document.write("<br>");
    }
}
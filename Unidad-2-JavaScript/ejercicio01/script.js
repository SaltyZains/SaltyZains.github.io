/*
document.write("<h1>Hola mundo</h1>");  printf

var nombre = prompt("Introduce tu nombre: ");
var edad = prompt("Introduce tu edad: ");
var estatura = prompt("Introduce tu estatura: ");

let trabaja = true;
let telefono = '1711100'

document.write("Nombre:" + nombre + ' Edad:' + edad + " Estatura:" + estatura);
*/
/*

escribir una pagina que calcule el area de un triangulo

base, altura, area


/*
if(trabaja){
    alert("FIERRO PARIENTE");
}else{
    alert("Ya ponte a trabajar, no seas arrastrado");
}
*/


/*
switch (parseFloat(estatura))    {
    case 1.80:
        document.write("Estas bien alto");
        break;
    case 1.60:
        document.write("Estas mas o menos alto");
        break;
    case 1.40:
        document.write("Estas bien bajito");
        break;
    default:
        break;
}
*/

/* Ciclos */

let tabla = prompt("Selecciona una tabla de multiplicar:");
let i = 0;
/*
for(i = 0; i<10; i++){
    document.write('<p class="color">' + tabla + " x " + (i + 1) + " = " + (tabla * (i+1)) + "</p>");
}


document.write("Ciclos con While");
while(i<10){
    document.write('<p class="color">' + tabla + " x " + (i + 1) + " = " + (tabla * (i+1)) + "</p>");
    i++;
}
*/
document.write("Ciclos con Do While");
do {
    document.write('<p class="color">' + tabla + " x " + (i + 1) + " = " + (tabla * (i+1)) + "</p>");
    i++;
} while (i<10);


let arreglo = [10, 20, 30];

/* Escribir una pagina que permita leer las calificaciones del alumno y generar
su promedio debe colocar en pantalla cada calificacion asi como su promedio
*/
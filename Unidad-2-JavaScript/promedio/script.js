let numero = prompt("Ingrese el numero de materias:");
let calificacion;
let sumatoria = 0.0;

for (let i = 0; i < numero; i++) {
    calificacion = prompt("Ingrese la calificacion de la materia " + (i+1) +":");
    sumatoria = sumatoria + parseFloat(calificacion);
    document.write("<p>Calificacion Numero " + (i + 1) +": " + calificacion + "</p>");
}
sumatoria = sumatoria / parseInt(numero);
document.write("<h1>El promedio es de:" + sumatoria + "</h1>");
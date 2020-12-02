
function suma(n1,n2){
    let resultado = parseInt(n1) + parseInt(n2);
    return resultado;
}

document.write("La suma es: " + suma(prompt("Ingrese el numero 1: "),prompt("Ingrese el numero 2: ")));
document.write("<br>");

const producto = function multi(a,b){
    return a * b;
}

document.write("El producto es: " + producto(10,5));
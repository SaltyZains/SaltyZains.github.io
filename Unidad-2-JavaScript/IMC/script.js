let altura = prompt("Ingrese su altura:");
let peso = prompt("Ingrese su peso:");
peso = parseFloat(peso);
altura = (parseFloat(altura) * parseFloat(altura));
let imc = peso / altura;

if (imc < 18.5) {
    document.write( '<h1 style="text-align: center;">' + "Su IMC es de: " + imc + " lo cual lo situa en la condicion de INFRAPESO" + "</h1>");
} else if(imc >= 18.5 && imc <= 24.9){
    document.write( '<h1 style="text-align: center;">' + "Su IMC es de: " + imc + " lo cual lo situa en la condicion de NORMAL" + "</h1>");
}else if(imc >= 25 && imc <= 29.9){
    document.write( '<h1 style="text-align: center;">' + "Su IMC es de: " + imc + " lo cual lo situa en la condicion de SOBREPESO" + "</h1>");
}else if(imc >= 30 && imc <= 34.9){
    document.write( '<h1 style="text-align: center;">' + "Su IMC es de: " + imc + " lo cual lo situa en la condicion de OBESIDAD" + "</h1>");
}else if(imc >= 35){
    document.write( '<h1 style="text-align: center;">' + "Su IMC es de: " + imc + " lo cual lo situa en la condicion de OBESIDAD MÓRBIDA" + "</h1>");
}
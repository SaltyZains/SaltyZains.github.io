function calcularIMC(){
    let vPeso = document.getElementById('peso').value;
    let vAltura = document.getElementById('altura').value;
    
    let resultado = (vPeso / (vAltura * vAltura)) * 100;
    resultado = (Math.round(resultado)) / 100;

    let vIMC = document.getElementById('imc');

    

    /*
    vIMC.setAttribute("class","titulo-principal");
    vIMC.classList.add();
    vIMC.className = 
    */

    
    if (resultado < 18.5) {
        vIMC.innerText = "Su IMC es de: " + resultado + " lo cual lo situa en la condicion de INFRAPESO";
    } else if(resultado >= 18.5 && resultado <= 24.9){
        vIMC.innerText = "Su IMC es de: " + resultado + " lo cual lo situa en la condicion de NORMAL";
    }else if(resultado >= 25 && resultado <= 29.9){
        vIMC.innerText = "Su IMC es de: " + resultado + " lo cual lo situa en la condicion de SOBREPESO";
    }else if(resultado >= 30 && resultado <= 34.9){
        vIMC.innerText = "Su IMC es de: " + resultado + " lo cual lo situa en la condicion de OBESIDAD";
    }else if(resultado >= 35){
        vIMC.innerText = "Su IMC es de: " + resultado + " lo cual lo situa en la condicion de OBESIDAD MÓRBIDA";
    }
    

    
}
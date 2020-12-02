let operandoa;
let operandob;
let operacion;
function init(){

    let cero = document.getElementById('cero');
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let suma = document.getElementById('mas');
    let resta = document.getElementById('menos');
    let blimpiar = document.getElementById('limpiar')
    let multiplicacion = document.getElementById('multiplicacion');
    let division = document.getElementById('division');
    let igual = document.getElementById('igual');
    var resultado = document.getElementById('resultado');


    uno.onclick = function(e){
        resultado.innerText = resultado.innerText  + "1";
    }
    dos.onclick = function(e){
        resultado.innerText = resultado.innerText  + "2";
    }
    tres.onclick = function(e){
        resultado.innerText = resultado.innerText  + "3";
    }
    cuatro.onclick = function(e){
        resultado.innerText = resultado.innerText  + "4";
    }
    cinco.onclick = function(e){
        resultado.innerText = resultado.innerText  + "5";
    }
    seis.onclick = function(e){
        resultado.innerText = resultado.innerText  + "6";
    }
    siete.onclick = function(e){
        resultado.innerText = resultado.innerText  + "7";
    }
    ocho.onclick = function(e){
        resultado.innerText = resultado.innerText  + "8";
    }
    nueve.onclick = function(e){
        resultado.innerText = resultado.innerText  + "9";
    }
    cero.onclick = function(e){
        resultado.innerText = resultado.innerText  + "0";
    }
    blimpiar.onclick = function(e){
        resetear();
    }

    suma.onclick = function(e){
        operandoa = resultado.innerText;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.innerText;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.innerText;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.innerText;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado.innerText;
        resolver();
    }

    function limpiar(){
        resultado.innerText = "";
    }
    
    function resetear(){
        resultado.innerText = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }

    function resolver(){
        var res = 0;
        switch(operacion){
          case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
          case "-":
              res = parseFloat(operandoa) - parseFloat(operandob);
              break;
          case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
          case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        }
        resetear();
        resultado.innerText = res;
      }

}


function init(){
    let valor = 1;
    let auxiliar = 1;
    
    let botonFactorial = document.getElementById("factorial");
    let botonPotencia = document.getElementById("potencia");
    let resultado = document.getElementById("respuesta");

    botonFactorial.onclick = function(e){
        factorial();
    }

    botonPotencia.onclick = function(e){
        potencia();
    }

    function factorial(){
        let numero = document.getElementById("numero").value;
        for (let i = 2; i <= parseInt(numero); i++) {
            valor =  valor * i;
        }
        resultado.innerText = "El numero factorial es: " + valor;
        valor = 1;
    }
    
    function potencia(){
        let numero = document.getElementById("numero").value;
        let val = document.getElementById("potenciacion").value;
        for (let index = 1; index <= val; index++) {
            auxiliar =  auxiliar * numero;
        }
        resultado.innerText = "El resultado de la potencia es: " + auxiliar;
    }
    
}




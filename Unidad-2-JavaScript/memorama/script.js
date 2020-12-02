let min = 2;
let seg = 59;
let arreglo = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
let acierto = 0;
let aleatorio = 0;
let numeroUno = 0;
let numeroDos = 0;

let auxUno = 0;


function init(){
    let interval;
    let datos = {
        imagenes: [
            "imagenes/interrogante.jpg",
            "imagenes/alabarda.jpg",
            "imagenes/arco.jpg",
            "imagenes/espada.jpg",
            "imagenes/lanza.jpg",
            "imagenes/espadon.jpg",
            "imagenes/maza.jpg",
            "imagenes/daga.jpg",
            "imagenes/dual.jpg"
        ]
    }
    
    shuffle(arreglo);

    let iniciar = document.getElementById("iniciar");
    let detener = document.getElementById("detener");

    let botonUno = document.getElementById("uno");
    let botonDos = document.getElementById("dos");
    let botonTres = document.getElementById("tres");
    let botonCuatro = document.getElementById("cuatro");
    let botonCinco = document.getElementById("cinco");
    let botonSeis = document.getElementById("seis");
    let botonSiete = document.getElementById("siete");
    let botonOcho = document.getElementById("ocho");
    let botonNueve = document.getElementById("nueve");
    let botonDiez = document.getElementById("diez");
    let botonOnce = document.getElementById("once");
    let botonDoce = document.getElementById("doce");
    let botonTrece = document.getElementById("trece");
    let botonCatorce = document.getElementById("catorce");
    let botonQuince = document.getElementById("quince");
    let botonDieciseis = document.getElementById("dieciseis");

    let txtAciertos = document.getElementById("aciertoss");

    botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
    botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
    botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
    botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
    botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
    botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
    botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
    botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
    botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
    botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
    botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
    botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
    botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
    botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
    botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
    botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");

    iniciar.onclick = function(e){
        interval =setInterval(temporizador, 1000);
    }

    detener.onclick = function(e){
        alert("Fallaste");
        clearInterval(interval);
        document.getElementById("segundos").innerText="Segundos: " + 0;
        document.getElementById("minutos").innerText="Minutos: " + 3;
        min = 2;
        seg = 59;
        acierto = 0;
        numeroDos = 0;
        numeroUno = 0;
        txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
        botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
        botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
        botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
        botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
        botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
        botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
        botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
        botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
        botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
        botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
        botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
        botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
        botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
        botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
        botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
        botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
        shuffle(arreglo);
    }

    botonUno.onclick = function(e){
        botonUno.setAttribute("style","background-image: url("+datos.imagenes[arreglo[0]]+");");
        if(numeroUno == 0){
            numeroUno = arreglo[0];
            auxUno = 1;
        }else if(numeroDos == 0){
            numeroDos = arreglo[0];
            if(numeroUno == numeroDos){
                acierto++;
                if(acierto == 8){
                    acierto = 0;
                    numeroDos = 0;
                    numeroUno = 0;
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    alert("Felicidades ganaste");
                    botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    clearInterval(interval);
                    document.getElementById("segundos").innerText="Segundos: " + 0;
                    document.getElementById("minutos").innerText="Minutos: " + 3;
                    min = 2;
                    seg = 59;
                    shuffle(arreglo);
                }else{
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    numeroUno = 0;
                    numeroDos = 0;
                }   
            }else{
                numeroUno = 0;
                numeroDos = 0;
                botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                switch (auxUno) {
                    case 1:
                        botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 2:
                        botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 3:
                        botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 4:
                        botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 5:
                        botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 6:
                        botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 7:
                        botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 8:
                        botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 9:
                        botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 10:
                        botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 11:
                        botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 12:
                        botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 13:
                        botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 14:
                        botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 15:
                        botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 16:
                        botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;

                }
                auxUno = 0;
            }
        }
    }

    botonDos.onclick = function(e){
        botonDos.setAttribute("style","background-image: url("+datos.imagenes[arreglo[1]]+");");
        if(numeroUno == 0){
            numeroUno = arreglo[1];
            auxUno = 2;
        }else if(numeroDos == 0){
            numeroDos = arreglo[1];
            if(numeroUno == numeroDos){
                acierto++;
                if(acierto == 8){
                    numeroDos = 0;
                    numeroUno = 0;
                    acierto = 0;
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    alert("Felicidades ganaste");
                    botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    clearInterval(interval);
                    document.getElementById("segundos").innerText="Segundos: " + 0;
                    document.getElementById("minutos").innerText="Minutos: " + 3;
                    min = 2;
                    seg = 59;
                    shuffle(arreglo);
                }else{
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    numeroUno = 0;
                    numeroDos = 0;
                }    
            }else{
                numeroUno = 0;
                numeroDos = 0;
                botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                switch (auxUno) {
                    case 1:
                        botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 2:
                        botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 3:
                        botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 4:
                        botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 5:
                        botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 6:
                        botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 7:
                        botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 8:
                        botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 9:
                        botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 10:
                        botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 11:
                        botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 12:
                        botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 13:
                        botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 14:
                        botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 15:
                        botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 16:
                        botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;

                }
                auxUno = 0;
            }
        }
    }

    botonTres.onclick = function(e){
        botonTres.setAttribute("style","background-image: url("+datos.imagenes[arreglo[2]]+");");
        if(numeroUno == 0){
            numeroUno = arreglo[2];
            auxUno = 3;
        }else if(numeroDos == 0){
            numeroDos = arreglo[2];
            if(numeroUno == numeroDos){
                acierto++;
                if(acierto == 8){
                    numeroDos = 0;
                    numeroUno = 0;
                    acierto = 0;
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    alert("Felicidades ganaste");
                    botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    clearInterval(interval);
                    document.getElementById("segundos").innerText="Segundos: " + 0;
                    document.getElementById("minutos").innerText="Minutos: " + 3;
                    min = 2;
                    seg = 59;
                    shuffle(arreglo);
                }else{
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    numeroUno = 0;
                    numeroDos = 0;
                }
                   
            }else{
                numeroUno = 0;
                numeroDos = 0;
                botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                switch (auxUno) {
                    case 1:
                        botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 2:
                        botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 3:
                        botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 4:
                        botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 5:
                        botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 6:
                        botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 7:
                        botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 8:
                        botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 9:
                        botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 10:
                        botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 11:
                        botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 12:
                        botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 13:
                        botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 14:
                        botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 15:
                        botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 16:
                        botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;

                }
                auxUno = 0;
            }
        }
    }

    botonCuatro.onclick = function(e){
        botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[arreglo[3]]+");");
        if(numeroUno == 0){
            numeroUno = arreglo[3];
            auxUno = 4;
        }else if(numeroDos == 0){
            numeroDos = arreglo[3];
            if(numeroUno == numeroDos){
                acierto++;
                if(acierto == 8){
                    numeroDos = 0;
                    numeroUno = 0;
                    acierto = 0;
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    alert("Felicidades ganaste");
                    botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    clearInterval(interval);
                    document.getElementById("segundos").innerText="Segundos: " + 0;
                    document.getElementById("minutos").innerText="Minutos: " + 3;
                    min = 2;
                    seg = 59;
                    shuffle(arreglo);
                }else{
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    numeroUno = 0;
                    numeroDos = 0;
                }    
            }else{ 
                numeroUno = 0;
                numeroDos = 0;
                botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                switch (auxUno) {
                    case 1:
                        botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 2:
                        botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 3:
                        botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 4:
                        botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 5:
                        botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 6:
                        botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 7:
                        botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 8:
                        botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 9:
                        botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 10:
                        botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 11:
                        botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 12:
                        botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 13:
                        botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 14:
                        botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 15:
                        botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 16:
                        botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;

                }
                auxUno = 0;
            }
        }
    }

    botonCinco.onclick = function(e){
        botonCinco.setAttribute("style","background-image: url("+datos.imagenes[arreglo[4]]+");");
        if(numeroUno == 0){
            numeroUno = arreglo[4];
            auxUno = 5;
        }else if(numeroDos == 0){
            numeroDos = arreglo[4];
            if(numeroUno == numeroDos){
                acierto++;
                if(acierto == 8){
                    numeroDos = 0;
                    numeroUno = 0;
                    acierto = 0;
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    alert("Felicidades ganaste");
                    botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    clearInterval(interval);
                    document.getElementById("segundos").innerText="Segundos: " + 0;
                    document.getElementById("minutos").innerText="Minutos: " + 3;
                    min = 2;
                    seg = 59;
                    shuffle(arreglo);
                }else{
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    numeroUno = 0;
                    numeroDos = 0;
                }
                   
            }else{
                numeroUno = 0;
                numeroDos = 0;
                botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                switch (auxUno) {
                    case 1:
                        botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 2:
                        botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 3:
                        botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 4:
                        botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 5:
                        botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 6:
                        botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 7:
                        botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 8:
                        botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 9:
                        botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 10:
                        botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 11:
                        botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 12:
                        botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 13:
                        botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 14:
                        botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 15:
                        botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 16:
                        botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;

                }
                auxUno = 0;
            }
        } 
    }

    botonSeis.onclick = function(e){
        botonSeis.setAttribute("style","background-image: url("+datos.imagenes[arreglo[5]]+");");
        if(numeroUno == 0){
            numeroUno = arreglo[5];
            auxUno = 6;
        }else if(numeroDos == 0){
            numeroDos = arreglo[5];
            if(numeroUno == numeroDos){
                acierto++;
                if(acierto == 8){
                    numeroDos = 0;
                    numeroUno = 0;
                    acierto = 0;
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    alert("Felicidades ganaste");
                    botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    clearInterval(interval);
                    document.getElementById("segundos").innerText="Segundos: " + 0;
                    document.getElementById("minutos").innerText="Minutos: " + 3;
                    min = 2;
                    seg = 59;
                    shuffle(arreglo);
                }else{
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    numeroUno = 0;
                    numeroDos = 0;
                }
                   
            }else{
                numeroUno = 0;
                numeroDos = 0;
                botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                switch (auxUno) {
                    case 1:
                        botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 2:
                        botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 3:
                        botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 4:
                        botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 5:
                        botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 6:
                        botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 7:
                        botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 8:
                        botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 9:
                        botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 10:
                        botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 11:
                        botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 12:
                        botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 13:
                        botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 14:
                        botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 15:
                        botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 16:
                        botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;

                }
                auxUno = 0;
            }
        }   
    }

    botonSiete.onclick = function(e){
        botonSiete.setAttribute("style","background-image: url("+datos.imagenes[arreglo[6]]+");");
        if(numeroUno == 0){
            numeroUno = arreglo[6];
            auxUno = 7;
        }else if(numeroDos == 0){
            numeroDos = arreglo[6];
            if(numeroUno == numeroDos){
                acierto++;
                if(acierto == 8){
                    numeroDos = 0;
                    numeroUno = 0;
                    acierto = 0;
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    alert("Felicidades ganaste");
                    botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    clearInterval(interval);
                    document.getElementById("segundos").innerText="Segundos: " + 0;
                    document.getElementById("minutos").innerText="Minutos: " + 3;
                    min = 2;
                    seg = 59;
                    shuffle(arreglo);
                }else{
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    numeroUno = 0;
                    numeroDos = 0;
                }
                   
            }else{
                numeroUno = 0;
                numeroDos = 0;
                botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                switch (auxUno) {
                    case 1:
                        botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 2:
                        botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 3:
                        botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 4:
                        botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 5:
                        botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 6:
                        botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 7:
                        botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 8:
                        botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 9:
                        botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 10:
                        botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 11:
                        botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 12:
                        botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 13:
                        botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 14:
                        botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 15:
                        botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 16:
                        botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;

                }
                auxUno = 0;
            }
        }
    }

    botonOcho.onclick = function(e){
        botonOcho.setAttribute("style","background-image: url("+datos.imagenes[arreglo[7]]+");");
        if(numeroUno == 0){
            numeroUno = arreglo[7];
            auxUno = 8;
        }else if(numeroDos == 0){
            numeroDos = arreglo[7];
            if(numeroUno == numeroDos){
                acierto++;
                if(acierto == 8){
                    numeroDos = 0;
                    numeroUno = 0;
                    acierto = 0;
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    alert("Felicidades ganaste");
                    botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    clearInterval(interval);
                    document.getElementById("segundos").innerText="Segundos: " + 0;
                    document.getElementById("minutos").innerText="Minutos: " + 3;
                    min = 2;
                    seg = 59;
                    shuffle(arreglo);
                }else{
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    numeroUno = 0;
                    numeroDos = 0;
                }
                   
            }else{
                numeroUno = 0;
                numeroDos = 0;
                botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                switch (auxUno) {
                    case 1:
                        botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 2:
                        botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 3:
                        botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 4:
                        botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 5:
                        botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 6:
                        botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 7:
                        botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 8:
                        botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 9:
                        botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 10:
                        botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 11:
                        botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 12:
                        botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 13:
                        botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 14:
                        botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 15:
                        botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 16:
                        botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;

                }
                auxUno = 0;
            }
        }
    }

    botonNueve.onclick = function(e){
        botonNueve.setAttribute("style","background-image: url("+datos.imagenes[arreglo[8]]+");");
        if(numeroUno == 0){
            numeroUno = arreglo[8];
            auxUno = 9;
        }else if(numeroDos == 0){
            numeroDos = arreglo[8];
            if(numeroUno == numeroDos){
                acierto++;
                if(acierto == 8){
                    numeroDos = 0;
                    numeroUno = 0;
                    acierto = 0;
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    alert("Felicidades ganaste");
                    botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    clearInterval(interval);
                    document.getElementById("segundos").innerText="Segundos: " + 0;
                    document.getElementById("minutos").innerText="Minutos: " + 3;
                    min = 2;
                    seg = 59;
                    shuffle(arreglo);
                }else{
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    numeroUno = 0;
                    numeroDos = 0;
                }
                   
            }else{
                numeroUno = 0;
                numeroDos = 0;
                botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                switch (auxUno) {
                    case 1:
                        botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 2:
                        botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 3:
                        botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 4:
                        botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 5:
                        botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 6:
                        botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 7:
                        botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 8:
                        botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 9:
                        botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 10:
                        botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 11:
                        botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 12:
                        botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 13:
                        botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 14:
                        botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 15:
                        botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 16:
                        botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;

                }
                auxUno = 0;
            }
        }
    }

    botonDiez.onclick = function(e){
        botonDiez.setAttribute("style","background-image: url("+datos.imagenes[arreglo[9]]+");");
        if(numeroUno == 0){
            numeroUno = arreglo[9];
            auxUno = 10;
        }else if(numeroDos == 0){
            numeroDos = arreglo[9];
            if(numeroUno == numeroDos){
                acierto++;
                if(acierto == 8){
                    numeroDos = 0;
                    numeroUno = 0;
                    acierto = 0;
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    alert("Felicidades ganaste");
                    botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    clearInterval(interval);
                    document.getElementById("segundos").innerText="Segundos: " + 0;
                    document.getElementById("minutos").innerText="Minutos: " + 3;
                    min = 2;
                    seg = 59;
                    shuffle(arreglo);
                }else{
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    numeroUno = 0;
                    numeroDos = 0;
                }
                   
            }else{
                numeroUno = 0;
                numeroDos = 0;
                botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                switch (auxUno) {
                    case 1:
                        botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 2:
                        botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 3:
                        botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 4:
                        botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 5:
                        botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 6:
                        botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 7:
                        botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 8:
                        botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 9:
                        botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 10:
                        botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 11:
                        botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 12:
                        botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 13:
                        botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 14:
                        botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 15:
                        botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 16:
                        botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;

                }
                auxUno = 0;
            }
        }
    }

    botonOnce.onclick = function(e){
        botonOnce.setAttribute("style","background-image: url("+datos.imagenes[arreglo[10]]+");");
        if(numeroUno == 0){
            numeroUno = arreglo[10];
            auxUno = 11;
        }else if(numeroDos == 0){
            numeroDos = arreglo[10];
            if(numeroUno == numeroDos){
                acierto++;
                if(acierto == 8){
                    numeroDos = 0;
                    numeroUno = 0;
                    acierto = 0;
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    alert("Felicidades ganaste");
                    botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    clearInterval(interval);
                    document.getElementById("segundos").innerText="Segundos: " + 0;
                    document.getElementById("minutos").innerText="Minutos: " + 3;
                    min = 2;
                    seg = 59;
                    shuffle(arreglo);
                }else{
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    numeroUno = 0;
                    numeroDos = 0;
                }
                   
            }else{
                numeroUno = 0;
                numeroDos = 0;
                botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                switch (auxUno) {
                    case 1:
                        botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 2:
                        botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 3:
                        botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 4:
                        botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 5:
                        botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 6:
                        botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 7:
                        botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 8:
                        botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 9:
                        botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 10:
                        botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 11:
                        botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 12:
                        botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 13:
                        botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 14:
                        botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 15:
                        botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 16:
                        botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;

                }
                auxUno = 0;
            }
        }
    }

    botonDoce.onclick = function(e){
        botonDoce.setAttribute("style","background-image: url("+datos.imagenes[arreglo[11]]+");");
        if(numeroUno == 0){
            numeroUno = arreglo[11];
            auxUno = 12;
        }else if(numeroDos == 0){
            numeroDos = arreglo[11];
            if(numeroUno == numeroDos){
                acierto++;
                if(acierto == 8){
                    numeroDos = 0;
                    numeroUno = 0;
                    acierto = 0;
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    alert("Felicidades ganaste");
                    botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    clearInterval(interval);
                    document.getElementById("segundos").innerText="Segundos: " + 0;
                    document.getElementById("minutos").innerText="Minutos: " + 3;
                    min = 2;
                    seg = 59;
                    shuffle(arreglo);
                }else{
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    numeroUno = 0;
                    numeroDos = 0;
                }  
            }else{
                numeroUno = 0;
                numeroDos = 0;
                botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                switch (auxUno) {
                    case 1:
                        botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 2:
                        botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 3:
                        botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 4:
                        botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 5:
                        botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 6:
                        botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 7:
                        botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 8:
                        botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 9:
                        botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 10:
                        botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 11:
                        botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 12:
                        botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 13:
                        botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 14:
                        botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 15:
                        botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 16:
                        botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;

                }
                auxUno = 0;
            }
        }
    }

    botonTrece.onclick = function(e){
        botonTrece.setAttribute("style","background-image: url("+datos.imagenes[arreglo[12]]+");");
        if(numeroUno == 0){
            numeroUno = arreglo[12];
            auxUno = 13;
        }else if(numeroDos == 0){
            numeroDos = arreglo[12];
            if(numeroUno == numeroDos){
                acierto++;
                if(acierto == 8){
                    numeroDos = 0;
                    numeroUno = 0;
                    acierto = 0;
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    alert("Felicidades ganaste");
                    botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    clearInterval(interval);
                    document.getElementById("segundos").innerText="Segundos: " + 0;
                    document.getElementById("minutos").innerText="Minutos: " + 3;
                    min = 2;
                    seg = 59;
                    shuffle(arreglo);
                }else{
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    numeroUno = 0;
                    numeroDos = 0;
                }  
            }else{
                numeroUno = 0;
                numeroDos = 0;
                botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                switch (auxUno) {
                    case 1:
                        botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 2:
                        botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 3:
                        botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 4:
                        botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 5:
                        botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 6:
                        botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 7:
                        botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 8:
                        botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 9:
                        botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 10:
                        botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 11:
                        botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 12:
                        botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 13:
                        botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 14:
                        botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 15:
                        botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 16:
                        botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;

                }
                auxUno = 0;
            }
        }
    }

    botonCatorce.onclick = function(e){
        botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[arreglo[13]]+");");
        if(numeroUno == 0){
            numeroUno = arreglo[13];
            auxUno = 14;
        }else if(numeroDos == 0){
            numeroDos = arreglo[13];
            if(numeroUno == numeroDos){
                acierto++;
                if(acierto == 8){
                    numeroDos = 0;
                    numeroUno = 0;
                    acierto = 0;
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    alert("Felicidades ganaste");
                    botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    clearInterval(interval);
                    document.getElementById("segundos").innerText="Segundos: " + 0;
                    document.getElementById("minutos").innerText="Minutos: " + 3;
                    min = 2;
                    seg = 59;
                    shuffle(arreglo);
                }else{
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    numeroUno = 0;
                    numeroDos = 0;
                }  
            }else{
                numeroUno = 0;
                numeroDos = 0;
                botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                switch (auxUno) {
                    case 1:
                        botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 2:
                        botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 3:
                        botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 4:
                        botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 5:
                        botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 6:
                        botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 7:
                        botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 8:
                        botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 9:
                        botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 10:
                        botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 11:
                        botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 12:
                        botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 13:
                        botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 14:
                        botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 15:
                        botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 16:
                        botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;

                }
                auxUno = 0;
            }
        }
    }

    botonQuince.onclick = function(e){
        botonQuince.setAttribute("style","background-image: url("+datos.imagenes[arreglo[14]]+");");
        if(numeroUno == 0){
            numeroUno = arreglo[14];
            auxUno = 15;
        }else if(numeroDos == 0){
            numeroDos = arreglo[14];
            if(numeroUno == numeroDos){
                acierto++;
                if(acierto == 8){
                    numeroDos = 0;
                    numeroUno = 0;
                    acierto = 0;
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    alert("Felicidades ganaste");
                    botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    clearInterval(interval);
                    document.getElementById("segundos").innerText="Segundos: " + 0;
                    document.getElementById("minutos").innerText="Minutos: " + 3;
                    min = 2;
                    seg = 59;
                    shuffle(arreglo);
                }else{
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    numeroUno = 0;
                    numeroDos = 0;
                }
            }else{
                numeroUno = 0;
                numeroDos = 0;
                botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                switch (auxUno) {
                    case 1:
                        botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 2:
                        botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 3:
                        botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 4:
                        botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 5:
                        botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 6:
                        botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 7:
                        botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 8:
                        botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 9:
                        botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 10:
                        botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 11:
                        botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 12:
                        botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 13:
                        botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 14:
                        botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 15:
                        botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 16:
                        botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;

                }
                auxUno = 0;
            }
        }
    }

    botonDieciseis.onclick = function(e){
        botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[arreglo[15]]+");");
        if(numeroUno == 0){
            numeroUno = arreglo[15];
            auxUno = 16;
        }else if(numeroDos == 0){
            numeroDos = arreglo[15];
            if(numeroUno == numeroDos){
                acierto++;
                if(acierto == 8){
                    numeroDos = 0;
                    numeroUno = 0;
                    acierto = 0;
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    alert("Felicidades ganaste");
                    botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                    clearInterval(interval);
                    document.getElementById("segundos").innerText="Segundos: " + 0;
                    document.getElementById("minutos").innerText="Minutos: " + 3;
                    min = 2;
                    seg = 59;
                    shuffle(arreglo);
                }else{
                    txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
                    numeroUno = 0;
                    numeroDos = 0;
                } 
            }else{
                numeroUno = 0;
                numeroDos = 0;
                botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                switch (auxUno) {
                    case 1:
                        botonUno.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 2:
                        botonDos.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 3:
                        botonTres.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 4:
                        botonCuatro.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 5:
                        botonCinco.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 6:
                        botonSeis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 7:
                        botonSiete.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 8:
                        botonOcho.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 9:
                        botonNueve.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 10:
                        botonDiez.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 11:
                        botonOnce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 12:
                        botonDoce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 13:
                        botonTrece.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 14:
                        botonCatorce.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 15:
                        botonQuince.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;
                    case 16:
                        botonDieciseis.setAttribute("style","background-image: url("+datos.imagenes[0]+");");
                        break;

                }
                auxUno = 0;
            }
        }
    }


    function temporizador()
    {   
        
        if (--seg<0) {
            seg=59;
            min = min - 1;
        }

        if (min<0) {
            alert("Fallaste");
            document.getElementById("segundos").innerText="Segundos: " + 0;
            document.getElementById("minutos").innerText="Minutos: " + 3;
            min = 2;
            seg = 59;
            acierto = 0;
            numeroDos = 0;
            numeroUno = 0;
            clearInterval(interval);
            txtAciertos.innerText = "Aciertos: "+ acierto +"/8";
        }else{
            document.getElementById("segundos").innerText="Segundos: " + seg;
            document.getElementById("minutos").innerText="Minutos: " + min;
        }
        
    }
 
    

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
       
}

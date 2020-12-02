let inicio;

function saludar(nombre){
    alert("Hola "+ nombre +"!!");
}

/*function empezar(){
    inicio = window.setInterval(function(){saludar("mario");},5000);
    inicio = window.setInterval(saludar,5000, "mario");
}*/



function cambiar_fondo(){
    let body = document.querySelector("body");
    console.log(body.style.backgroundColor);
    /*if(body.style.backgroundColor == "lime"){
        body.style.backgroundColor = "navy"
    }else{
        body.style.backgroundColor = "lime"
    }*/
    body.style.backgroundColor = body.style.backgroundColor == "lime" ? "navy" : "lime";
}

function empezar(){
    inicio = setInterval(cambiar_fondo,3000);
}

function detener(){
    window.clearInterval(inicio);
}
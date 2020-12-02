let inicio;


function cambiar_imagen(){
    let body = document.getElementById("img");
    if(body.getAttribute("src") == "https://www.todopaisajes.com/1920x1080/imagen-del-espacio.jpg"){
        body.setAttribute("src","https://www.wallpapertip.com/wmimgs/4-41454_free-download-wallpapers-hd-space-wallpaper-hd-pc.jpg");
    }else if(body.getAttribute("src") == "https://www.wallpapertip.com/wmimgs/4-41454_free-download-wallpapers-hd-space-wallpaper-hd-pc.jpg"){
        body.setAttribute("src","https://www.xtrafondos.com/descargar.php?id=2900&resolucion=1920x1080"); 
    }else{
        body.setAttribute("src","https://www.todopaisajes.com/1920x1080/imagen-del-espacio.jpg");
    }
}

function empezar(){
    inicio = setInterval(cambiar_imagen,3000);
}

function detener(){
    window.clearInterval(inicio);
}
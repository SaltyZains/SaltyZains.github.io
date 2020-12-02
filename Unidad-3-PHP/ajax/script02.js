var btnCargar= document.getElementById('cargar');

function cargarContenidoAjax(){
	var xhr = new XMLHttpRequest();
	let id = document.getElementById('id').value;

	xhr.open("GET", "servidor.php?id=" + id, true);
	xhr.onreadystatechange = function(){
		console.log(xhr.readyState);
		if (xhr.readyState == 4 && xhr.status == 200) {
			var json =JSON.parse(xhr.responseText);
			var contenido=document.getElementById('contenido');
			
			contenido.innerHTML = "ID: " + json.id + " Nombre: " + json.nombre + " Edad: " + json.edad + " Direccion: " + json.direccion;
		}
	}
	xhr.send();
}

btnCargar.addEventListener('click', cargarContenidoAjax);

let contador = 1;
function agregarElementos(){
    let body = document.getElementById("body");

    let titulo = document.createElement("h1");
    titulo.innerText = "Universidad Politecnica de Victoria";
    titulo.setAttribute("class","titulo");

    let texto = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic laboriosam tempore magni quasi inventore nesciunt incidunt animi a totam, repellendus blanditiis quibusdam quia perferendis quam veritatis dolores neque! Hic?");
    
    let parrafo = document.createElement("p");
    parrafo.appendChild(texto);
    parrafo.setAttribute("id",contador);
    parrafo.classList.add("parrafo");

    body.appendChild(titulo);
    body.appendChild(parrafo);

    contador++;
    
}
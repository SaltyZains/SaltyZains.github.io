let monto = 0;
let subtotal = 0;
let iva = 0;
let total = 0;
let auxiliar = 0;

let contador = 1;

function init(){

    let cuerpo = document.getElementById("body");
    let tabla = document.createElement("table");
    let tHead = document.createElement("thead");
    let tBody = document.createElement("tbody");
    let tFoot = document.createElement("tfoot");
    let tr = document.createElement("tr");

    let trSub = document.createElement("tr");
    let trIva = document.createElement("tr");
    let trTotal = document.createElement("tr");

    let textoSub = document.createElement("td");
    let textoIva = document.createElement("td");
    let textoTotal = document.createElement("td");


    let tdSub = document.createElement("td");
    let tdIva = document.createElement("td");
    let tdTotal = document.createElement("td");

    let numero = document.createElement("th");
    let producto = document.createElement("th");
    let productoUnitario = document.createElement("th");
    let unidades = document.createElement("th");
    let monto = document.createElement("th");
    let eliminar = document.createElement("th");
    let modificar = document.createElement("th");

    numero.innerText = "Numero";
    tr.appendChild(numero);
    producto.innerText = "Producto";
    tr.appendChild(producto);
    productoUnitario.innerText = "Producto Unitario";
    tr.appendChild(productoUnitario);
    unidades.innerText = "Unidades";
    tr.appendChild(unidades);
    monto.innerText = "Monto";
    tr.appendChild(monto);
    eliminar.innerText = "Eliminar";
    tr.appendChild(eliminar);
    modificar.innerText = "Modificar";
    tr.appendChild(modificar);

    tHead.appendChild(tr);

    textoSub.innerText = "Subtotal";
    textoSub.setAttribute("colspan",4);
    textoSub.setAttribute("style","text-align:center");
    trSub.appendChild(textoSub);
    tdSub.innerText = "0.00";
    trSub.appendChild(tdSub);
    trSub.setAttribute("id",trSub);

    textoIva.innerText = "IVA";
    textoIva.setAttribute("colspan",4);
    textoIva.setAttribute("style","text-align:center");
    trIva.appendChild(textoIva);
    tdIva.innerText = "0.00";
    trIva.appendChild(tdIva);
    trIva.setAttribute("id",trIva);

    textoTotal.innerText = "Total a Pagar:";
    textoTotal.setAttribute("colspan",4);
    textoTotal.setAttribute("style","text-align:center");
    trTotal.appendChild(textoTotal);
    tdTotal.innerText = "0.00";
    trTotal.appendChild(tdTotal);
    trTotal.setAttribute("id",trTotal);

    tFoot.appendChild(trSub);
    tFoot.appendChild(trIva);
    tFoot.appendChild(trTotal);

    tabla.appendChild(tHead);
    cuerpo.appendChild(tabla);

    let boton = document.getElementById("boton");

    boton.onclick = function(e){
        agregar();
    }

    

    function agregar(){
        let opcion = document.getElementById("opciones").value;
        let costo = document.getElementById("precio").value;
        let unidades = document.getElementById("unidades").value;
        

        let fila = document.createElement("tr");

        let filaNumero = document.createElement("td");
        let filaProducto = document.createElement("td");
        let filaPrecioUnitario = document.createElement("td");
        let filaUnidades = document.createElement("td");
        let filaMonto = document.createElement("td");
        let botonEliminar = document.createElement("td");
        let botonModificar = document.createElement("td");

        let btEliminar = document.createElement("button");
        let btModificar = document.createElement("button");

        
        
        btEliminar.innerText = "Eliminar";
        btModificar.innerText = "Modificar";
        

        monto = parseFloat(costo) * parseInt(unidades);
        subtotal = subtotal + monto;
        iva = subtotal * 0.16;
        total = subtotal + iva;

        btEliminar.setAttribute("onclick","fneliminar("+contador+");");
        btModificar.setAttribute("onclick","fnModificar("+contador+");");

        filaNumero.innerText = contador;
        filaProducto.innerText = opcion;
        filaPrecioUnitario.innerText = costo;
        filaUnidades.innerText = unidades;
        filaMonto.innerText = monto;

        filaProducto.setAttribute("id","filaProducto"+contador+"");
        filaPrecioUnitario.setAttribute("id","filaPrecioUnitario"+contador+"");
        filaUnidades.setAttribute("id","filaUnidades"+contador+"");
        filaMonto.setAttribute("id","filaMonto"+contador+"");
        
        botonEliminar.appendChild(btEliminar);
        botonModificar.appendChild(btModificar);


        tdSub.innerText = subtotal;
        tdSub.setAttribute("id","tdSub");

        tdIva.innerText = iva;
        tdIva.setAttribute("id","tdIva");
        
        tdTotal.innerText = total;
        tdTotal.setAttribute("id","tdTotal");

        tFoot.appendChild(trSub);
        tFoot.appendChild(trIva);
        tFoot.appendChild(trTotal);
        tFoot.setAttribute("id","tFoot");

        fila.appendChild(filaNumero);
        fila.appendChild(filaProducto);
        fila.appendChild(filaPrecioUnitario);
        fila.appendChild(filaUnidades);
        fila.appendChild(filaMonto);
        fila.appendChild(botonEliminar);
        fila.appendChild(botonModificar);

        fila.setAttribute("id",contador);

        tBody.appendChild(fila);
        tBody.setAttribute("id","tBody");

        tabla.appendChild(tBody);
        tabla.appendChild(tFoot);
        cuerpo.appendChild(tabla);

        contador++;
        auxiliar = monto;
        monto = 0;
        

    }

    
    
}

function fneliminar(contador){
    let tBody = document.getElementById("tBody");
    let fila = document.getElementById(contador);

    let tdSub = document.getElementById("tdSub");
    let tdIva = document.getElementById("tdIva");
    let tdTotal = document.getElementById("tdTotal");

    subtotal = subtotal - auxiliar;
    iva = subtotal / 0.16;
    total = subtotal - iva;

    tdSub.innerText = subtotal;
    tdIva.innerText = iva;
    tdTotal.innerText = total;

    tBody.removeChild(fila);    
}

function fnModificar(contador){
    let tBody = document.getElementById("tBody");
    let fila = document.getElementById(contador);

    let filaPrecioUnitario = document.getElementById("filaPrecioUnitario"+contador+"");
    let filaUnidades = document.getElementById("filaUnidades"+contador+"");
    let filaMonto = document.getElementById("filaMonto"+contador+"");

    let precios =  prompt("Ingrese el precio:");
    let unidadessss = prompt("Ingrese las unidades:");
    let operacion = 0;

    operacion = precios * unidadessss;

    let tdSub = document.getElementById("tdSub");
    let tdIva = document.getElementById("tdIva");
    let tdTotal = document.getElementById("tdTotal");

    subtotal = subtotal - auxiliar;
    iva = subtotal / 0.16;
    total = subtotal - iva;

    subtotal = subtotal + operacion;
    iva = subtotal * 0.16;
    total = subtotal + iva; 

    tdSub.innerText = subtotal;
    tdIva.innerText = iva;
    tdTotal.innerText = total;

    filaPrecioUnitario.innerText = precios;
    filaUnidades.innerText = unidadessss;
    filaMonto.innerText = operacion;

    

    fila.appendChild(filaNumero);
    fila.appendChild(filaProducto);
    fila.appendChild(filaPrecioUnitario);
    fila.appendChild(filaUnidades);
    fila.appendChild(filaMonto);
    tBody.appendChild(fila);
}


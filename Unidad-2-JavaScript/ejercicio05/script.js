let mat="1830121";
let nom = "Mario Delarbre";

let alumno = {
    matricula: mat,
    nombre: nom ,
    carrera: "Ing. Sist. Comp.",
    promedio: 9.2,
    pasatiempos: ["leer","cantar","Jugar Videojuegos","Ver peliculas"],
    direccion: {
        calle: "av. nuevas tecnologia",
        numero: 5902,
        colonia: "Parque Cientifico",
        cp: 87138,
        funcionara: ["Si","No"]
    }
}

document.write(alumno.direccion.funcionara[0]);


<?php
    //include('conexion.php'); <-- include es traer un archivo no vital, en pocas palabras opcional
    require('conexion.php');

    $conexion = conectar($servidor,$usuario,$contrasena,$bd);

    $consulta = "SELECT id, nombre, edad, direccion FROM personas";
    $registros = mysqli_query($conexion,$consulta);

    //var_dump($registros);

    if($registros->num_rows>0){
        while ($fila = $registros->fetch_assoc()) {
            echo "ID: " . $fila["id"] . "<br>";
            echo "Nombre: " . $fila["nombre"] . "<br>";
            echo "Edad: " . $fila["edad"] . "<br>";
            echo "Domicilio: " . $fila["direccion"] . "<br>";
        }
    }else{
        echo "Error al hacer hacer la consulta a la BD o registro no localizado";
    }

    /*
    $nombre = 'Juan Perez';
    $consulta = "INSERT INTO personas VALUES(NULL, '$nombre',24,'Berriozabal No.513 Col. Centro');";

    if(mysqli_query($conexion,$consulta)){
        echo "Registro insertado exitosamente <br>";
    }else {
        echo "ERROR AL INSERTAR UN NUEVO REGISTRO <br>";
    }
    */

    desconectar($conexion);
?>

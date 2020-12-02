<?php

    $servidor = "localhost";
    $usuario = "root";
    $contrasena = "";
    $bd = "ejemplo";

    $conexion = mysqli_connect($servidor,$usuario,$contrasena,$bd);
    
    $consulta = "SELECT id, nombre, edad, direccion FROM personas WHERE id=1";
    $registros = mysqli_query($conexion,$consulta);

    if($resultado->num_rows>0){
        while ($fila=$resultado->fetch_assoc()) {
            $datos = array(
                'id' => $fila["id"],
                'nombre' => $fila["nombre"],
                'edad' => $fila["edad"],
                'direccion' => $fila["direccion"]
            );
        }
    }

    /*
    $tecnologias = array(
        'frontend' => 'html5,css3,javascript',
        'backend' => 'php,mysql,apache',
        'fullstack' => 'html5,css3,javascript,php,mysql,apache'
    );
    */
    echo json_encode($datos);
?>
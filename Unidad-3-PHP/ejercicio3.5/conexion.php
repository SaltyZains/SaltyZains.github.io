<?php
    $servidor = "127.0.0.1";
    $usuario = "root";
    $contrasena = "";
    $bd = "ejemplo";

    function conectar($servidor,$usuario,$contrasena,$bd){
        $conexion = mysqli_connect($servidor,$usuario,$contrasena,$bd);

        if (!$conexion) {
            die('Ocurrio un error al hacer la conexion con la base de datos <br>');
        }else {
            echo "CONEXION A LA BD REALIZADA EXITOSAMENTE! <br>";
        }

        return $conexion;
    }

    function desconectar($conexion){
        mysqli_close($conexion);
    }

?>
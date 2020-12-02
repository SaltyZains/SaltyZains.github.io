<?php
    $servidor = "localhost";
    $usuario = "root";
    $contrasena = "";
    $bd = "libreria";

    function conectar($servidor,$usuario,$contrasena,$bd){
        $conexion = mysqli_connect($servidor,$usuario,$contrasena,$bd);

        if (!$conexion) {
            die('Ocurrio un error al hacer la conexion con la base de datos <br>');
        }

        return $conexion;
    }

    function desconectar($conexion){
        mysqli_close($conexion);
    }

?>
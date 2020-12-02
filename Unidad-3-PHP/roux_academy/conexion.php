<?php
    $servidor = "localhost";
    $usuario = "root";
    $contrasena = "";
    $bd = "usuarios";

    $conexion = mysqli_connect($servidor,$usuario,$contrasena,$bd);

    if (!$conexion) {
        die('Ocurrio un error al hacer la conexion con la base de datos <br>');
    }

    function valida_usuario_bd($usuario, $contrasena, $conexion){
        $query = "select 1 as user_valido from datos where usuario='$usuario' and contrasena='$contrasena'";
        //echo $query . '<br/>';
        $resultado = mysqli_query ($conexion, $query) or die ("error al ejecutar la consulta");
        if(mysqli_num_rows($resultado)==0){
            return false;
        }else{
            return true;
        }
    }

    /*
    if(valida_usuario_bd('mario','buenas',$conexion)){
        echo "usuario valido";
    }else{
        echo "usuario invalido";
    }
    */
    
?>
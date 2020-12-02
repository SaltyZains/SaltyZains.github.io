<?php
    
    if(isset($_GET["tabla"])){
        $tabla = $_GET["tabla"];
    }else{
        $tabla = 0;
    }

    if(isset($_GET["resultados"])){
        $resultados = $_GET["resultados"];
    }else{
        $resultados = 0;
    }
    
    /*
    $tabla = 5;
    $resultados = 10;
    */

    /*
    Existen estos dos
    $_GET
    $_POST 
    */
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tablas de multiplicar</title>
</head>
<body>

    <form action="" method="GET">
        <input type="text" placeholder="Tabla" name= "tabla">
        <input type="text" placeholder="Resultados" name= "resultados">
        <input type="submit" namespace= "Enviar">
    </form>

    <?php
        if($resultados>0){
    ?>

        <table border = "2">
        <tr>
            <th>Tabla</th>
            <th>Multiplicador</th>
            <th>Resultados</th>
        </tr>
        <?php
            for ($i=1; $i <= $resultados; $i++) {
        ?>  
            <tr>
                <th> <?php echo $tabla ?> </th>
                <th> <?php echo $i ?> </th>
                <th> <?php echo ($i * $tabla) ?> </th>
            </tr> 
        <?php
            }
        ?>
        </table>

    <?php
        }
    ?>

    
    

</body>
</html>
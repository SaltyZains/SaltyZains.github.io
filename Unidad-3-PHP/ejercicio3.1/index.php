<?php
    //esto es codigo php
    $edad = 20;
    $nombre = "Mario Delarbre";
    $trabaja = true;
    $altura = 1.78;

    $colores = array('amarillo','rojo','verde');
                    //    0        1      2

    $alumnos = array("123" => "Juan Perez",
                     "456" => "Monita",
                     "789" => "Mario G"
                     );

    $alumno1 = (object)["matricula"=>"1830121",
                        "nombre"=>"Felipez",
                        "carrera"=>"ITI",
                        "promedio"=>7.8,
                        "colores"=>$colores];

    if($trabaja){
        $texto = "SI";
    }else{
        $texto = "NO";
    }
    
    /*                    
    echo "Nombre: " . $nombre . "<br>";
    echo "Edad: " . $edad . "<br>";
    echo "Trabaja: " . $trabaja?"Si":"No" . "<br>";
    echo "<br>";
    echo "Altura:" . $altura . "<br>";
    echo "Colores: " . $colores[0]."<br>";
    echo "Alumno 2: " . $alumnos["456"] . "<br>";
    */
    /*
    print_r($colores);
    echo "<br>";
    var_dump($alumnos);
    echo "<br>";
    var_dump($alumno1);
    */
                     /*
    for($i = 0; $i < 10; $i++){
        echo "Ciclo For i = " . $i . "<br>";
    }
    $i = 0;
    
    while($i < 10){
        echo "Ciclo While i = " . $i . "<br>";
        $i++;
    }

    $i = 0;
    do{
        echo "Ciclo Do While i = " . $i . "<br>";
        $i++; 
    }while($i < 10);

    $i = 1;
    foreach($colores as $color){
        echo "Color $i: $color <br>";
        $i++;
    }

    foreach($alumnos as $matricula => $nombre){
        echo "Matricula : $matricula - $nombre <br>";
    }
    */

    /*
    for($i=0;$i<10;$i++){
        echo "<h2>Subtitulo " . ($i+1) . "</h2>";
    }
    */

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>AQUI ABAJO DEBEN APARECER LOS SUBTITULOS</h1>
    
    <?php 
        for($i=0;$i<10;$i++){
    ?>
            <h2> Subtitulo <?php echo ($i+1); ?> </h2>
    <?php    
        } 
    ?>

    <?php
        for($i = 0; $i < 10;$i++){
            echo "<h2> Subtitulo ". ($i + 1) . "</h2>";
        }
    ?>

</body>
</html>

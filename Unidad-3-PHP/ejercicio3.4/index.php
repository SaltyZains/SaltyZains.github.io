<?php
    require('conexion.php');

    $conexion = conectar($servidor,$usuario,$contrasena,$bd);

    $consulta = "SELECT id,Titulo, Editorial, Autor, Enlace, Precio FROM libros";
    $registros = mysqli_query($conexion,$consulta);
    if($registros->num_rows>0){
        while ($fila = $registros->fetch_assoc()) {
            $titulo = $fila["Titulo"];
            $autor = $fila["Autor"];
            $precio = $fila["Precio"];
            $editorial = $fila["Editorial"];
            $enlace = $fila["Enlace"];
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="css/estilo.css">
</head>
<body>
    
    <main>
        <h1>LISTA DE LIBROS</h1>
        <a href="registrar.php">Nuevo</a>
        <table border = "2">
            <th>
                <tr>
                    <th>Titulo</th>
                    <th>Editorial</th>
                    <th>Autor</th>
                    <th>Enlace</th>
                    <th>Precio</th>
                </tr>
            </th>
            <tbody>
            <?php
                if (isset($_GET["titulo"])) {
                    $titulo = $_GET["titulo"];
                    $autor = $_GET["autor"];
                    $precio = $_GET["precio"];
                    $editorial = $_GET["editorial"];
                    $enlace = $_GET["enlace"];

                    $consulta = "INSERT INTO libros VALUES (NULL,'$titulo', '$editorial', '$autor', '$enlace', '$precio')";
                    $registros = mysqli_query($conexion,$consulta);

                }

                $consulta = "SELECT id,Titulo, Editorial, Autor, Enlace, Precio FROM libros";
                $registros = mysqli_query($conexion,$consulta);

                if($registros->num_rows>0){
                    while ($fila = $registros->fetch_assoc()) {
                        $id = $fila["id"];
                        $titulo = $fila["Titulo"];
                        $editorial = $fila["Editorial"];
                        $autor = $fila["Autor"];
                        $enlace = $fila["Enlace"];
                        $precio = $fila["Precio"];

                        echo "<tr>";
                        echo "<td> $titulo </td>";
                        echo "<td> $autor </td>";
                        echo "<td> $precio </td>";
                        echo "<td> $editorial </td>";
                        echo "<td> $enlace </td>";
                    }
                }
            ?>
                </tr>
            </tbody>
        </table>
    </main>
</body>
</html>
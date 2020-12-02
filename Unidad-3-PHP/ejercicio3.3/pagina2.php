<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página 2</title>
</head>
<body>
    <h1>Bienvenido a la pagina 2</h1>

    <?php
        if(isset($_GET["titulo"])){
            $titulo = $_GET["titulo"];
            $autor = $_GET["autor"];
            $editorial = $_GET["editorial"];
            $paginas = $_GET["paginas"];
            
            echo "<h3> Titulo: $titulo </h3>";
            echo "<h3> Autor: $autor </h3>";
            echo "<h3> Editorial: $editorial </h3>";
            echo "<h3> Paginas: $paginas </h3>";
        }
    ?>

</body>
</html>
<?php
    require 'abre_sesion.php';
    $_SESSION=array();
    session_destroy();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cierre</title>
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
</head>
<body>
    <p>
        <h1>Session cerrada, hasta la proxima</h1>
        <a href="login.php">Acceder</a>
    </p>
</body>
</html>
<?php
    require 'conexion.php';
    $valido=false;
    if(isset($_POST['aceptar'])){
        $usuario = $_POST['usuario'];
        $contrasena = $_POST['contrasena'];

        if (!valida_usuario_bd($usuario,$contrasena, $conexion)) {
            echo "No es valido <br/>";
            $valido = false;
        }else {
            echo "Si es valido <br/>";
            session_start();
            $valido = true;
            $_SESSION['usuario']=$usuario;
            header('Location:index.php');
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="text/css" href="/Trabajos/Unidad_3_PHP/roux_academy/css/estilo.css">
    <title>Acceso</title>
    <meta charset="utf-8">
</head>
<body>
    <main>
        <div class="contenedor_log">
            <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="POST">
                <input type="text" class="form_ctrl" name="usuario" placeholder="Usuario" required="Introduce el nombre">
                <input type="password" class="form_ctrl" name="contrasena" placeholder="Contraseña" required>
                <input type="submit" class="btn" name="aceptar" placeholder="Ingresar">
                <br>
                <a href="/Trabajos/Unidad_3_PHP/roux_academy/register/index.php">Registrarse</a>
                <?php
                    if(!$valido && isset($_POST['aceptar'])){
                        echo '<p class="alerta">Usuario y/o contraseña no valido</p>';
                    }
                ?>
            </form>
        </div>
    </main>
</body>
</html>
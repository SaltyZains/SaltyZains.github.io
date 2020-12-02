<?php 
	$id = $_GET["id"];
	$conexion = mysqli_connect("localhost", "root", "", "ejemplo");
	$consulta = "SELECT id, nombre, edad, direccion FROM personas WHERE id = $id";
	$resultado = mysqli_query($conexion, $consulta);

	if ($resultado->num_rows > 0) {
		while ($fila = $resultado->fetch_assoc()) {
			$datos = Array(
				"id" => $fila["id"],
				"nombre" => $fila["nombre"],
				"edad" => $fila["edad"],
				"direccion" => $fila["direccion"],
			);
		}
	}

	echo json_encode($datos);
 ?>
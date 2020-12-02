<?php
	$arreglo = array();
    $dato = $_GET['dato'];
    $tabla = $_GET['tabla'];
	$idWhere = $_GET['idWhere'];

    $conexion = mysqli_connect("localhost", "root", "", "ejemplo");
	$consulta = "SELECT id, nombre FROM $tabla WHERE $idWhere = $dato";
	$resultado = mysqli_query($conexion, $consulta);

	if ($resultado->num_rows > 0) {
		while ($fila = $resultado->fetch_assoc()) {
			$arreglo[$fila['nombre']] = $fila['id'];
		}
	}
	
	echo json_encode($arreglo);
?>
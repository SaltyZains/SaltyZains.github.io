<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina1</title>
</head>
<body>
    <form action="pagina2.php" method="GET">
        <input type="text" name = "titulo" placeholder= "Titulo" required>
        <input type="text" name = "autor" placeholder= "Autor" required>
        <label for="editorial">Editorial</label>
        <select name="editorial" id="">
            <option value="1">McGraw-Hill</option>
            <option value="2">Ghandi</option>
            <option value="3">Panini</option>
        </select>
        <input type="number" name = "paginas" placeholder= "Paginas" required>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>
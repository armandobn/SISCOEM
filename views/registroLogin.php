<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REGISTRO</title>
</head>
<body>
    <H1>REGISTRO</H1>
    <span> ¿ya estas registrado? <a href="/SISCOEM/views/login.php">Login</a></span>
    <form action="/SISCOEM/views/login.php" method="post">
        <input type="text" id="nombre "name="nombre" placeholder="Ingresa tu nombre">
        <input type="text" id="apePaterno" name="apePaterno" placeholder="Ingresa tu apellido paterno">
        <input type="text" id="apeMaterno "name="apeMaterno" placeholder="Ingresa tu apellido materno">
        <input type="text" idate="email" name="email" placeholder="Ingresa tu email">
        <input type="password" id="password" name="password" placeholder="Ingresa tu email">
        <input type="submit" id="btn_registro" value="registro">
       
    </form>
</body>
</html>

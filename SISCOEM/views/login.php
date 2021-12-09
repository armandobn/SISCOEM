<?php
require_once("../database/database.php");
require_once("../controllers/login_controller.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN</title>
</head>
<body>
    <H1>LOGIN</H1>
    <form action="/login" method="post">
        <input type="text" name="email" placeholder="Ingresa tu email">
        <input type="password" name="password" placeholder="Ingresa tu password">
        <input type="submit" value="ingresar">
        <a href="registroLogin.php">Registrarse</a>
    </form>
</body>
</html>
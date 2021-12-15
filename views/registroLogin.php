<?php
require_once("../database/database.php");
$message = '';

  if (!empty($_POST['nombre'])|| !empty($_POST['apePaterno'])|| !empty($_POST['apeMaterno'])|| !empty($_POST['email']) && !empty($_POST['password'])) {
    $sql = "INSERT INTO logins (nombre, apePaterno, apeMaterno, email, password) VALUES (:nombre, :apePaterno, :apeMaterno, :email, :password)";    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nombre', $_POST['nombre']);
    $stmt->bindParam(':apePaterno', $_POST['apePaterno']);
    $stmt->bindParam(':apeMaterno', $_POST['apeMaterno']);
    $stmt->bindParam(':email', $_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $stmt->bindParam(':password', $password);

    if ($stmt->execute()) {
      $message = 'Se a creado el usuario';
    } else {
      $message = 'error No se a creador el usuario';
    }
  }
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
    <H1>REGISTRO</H1>
    <span> ¿ya estas registrado? <a href="/registroLogin.php">Login</a></span>
    <form action="/registroLogin" method="post">
        <input type="text" name="nombre" placeholder="Ingresa tu nombre">
        <input type="text" name="apePaterno" placeholder="Ingresa tu apellido paterno">
        <input type="text" name="apeMaterno" placeholder="Ingresa tu apellido materno">
        <input type="text" name="email" placeholder="Ingresa tu email">
        <input type="password" name="password" placeholder="Ingresa tu email">
        <input type="password" name="confirm_password" placeholder="Confirma tu password">
        <input type="submit" value="Registrar">
       
    </form>
</body>
</html>
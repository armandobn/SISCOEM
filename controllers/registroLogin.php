<?php
require_once("../database/database.php");
require_once("../views/registroLogin.php");


$objeto_para_usar_conexion = conexion();

$nombre = $_POST['nombre'];
$apePaterno = $_POST['apePaterno'];
$apeMaterno = $_POST['apeMaterno'];
$email_= $_POST['email'];
$password = sha1($_POST['password']);


$query_insert_usuario = "insert into logins(nombre, apePaterno, apeMaterno, email, password) 
                                        values('$nombre', '$apePaterno', '$apeMaterno', '$email', '$password')";

echo $resultado_de_la_ejecucion_del_query = mysqli_query($objeto_para_usar_conexion, $query_insert_usuario);
?>
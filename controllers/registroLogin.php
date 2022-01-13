<?php
require_once("../database/database.php");
require_once("../login/views/registroLogin.php");


$objeto_para_usar_conexion = conexion();


    $nombre = $mysqli->real_escape_string($_POST['nombre']);
    $apePaterno = $mysqli->real_escape_string( $_POST['apePaterno']);
    $apeMaterno = $mysqli->real_escape_string($_POST['apeMaterno']);
    $email= $mysqli->real_escape_string( $_POST['email']);
    $password = $mysqli->real_escape_string( sha1($_POST['password']));
    $confirm_password = $mysqli->real_escape_string( sha1($_POST['confirm_password']));




$query_insert_usuario = "INSERT INTO logins(nombre, apePaterno, apeMaterno, email, password, confirm_password); 
                                        values('$nombre', '$apePaterno', '$apeMaterno', '$email', '$password', '$confirm_password')";

echo $resultado_de_la_ejecucion_del_query = mysqli_query($objeto_para_usar_conexion, $query_insert_usuario);
?>
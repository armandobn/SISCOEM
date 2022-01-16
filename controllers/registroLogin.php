<?php
<<<<<<< Updated upstream
require_once("../database/database.php");
require_once("../login/views/registroLogin.php");
=======
    require_once("../database/database.php");
//require_once("../database/database.php");
//require_once("../views/registroLogin.php");
>>>>>>> Stashed changes


$objeto_para_usar_conexion = conexion();

<<<<<<< Updated upstream
=======
$nombre = $_POST['nombre'];
$apePaterno = $_POST['apePaterno'];
$apeMaterno = $_POST['apeMaterno'];
$email= $_POST['email'];
$password = sha1($_POST['password']);
>>>>>>> Stashed changes

    $nombre = $mysqli->real_escape_string($_POST['nombre']);
    $apePaterno = $mysqli->real_escape_string( $_POST['apePaterno']);
    $apeMaterno = $mysqli->real_escape_string($_POST['apeMaterno']);
    $email= $mysqli->real_escape_string( $_POST['email']);
    $password = $mysqli->real_escape_string( sha1($_POST['password']));
    $confirm_password = $mysqli->real_escape_string( sha1($_POST['confirm_password']));

<<<<<<< Updated upstream



$query_insert_usuario = "INSERT INTO logins(nombre, apePaterno, apeMaterno, email, password, confirm_password); 
                                        values('$nombre', '$apePaterno', '$apeMaterno', '$email', '$password', '$confirm_password')";
=======
$query_insert_usuario = "INSERT INTO logins(nombre, apePaterno, apeMaterno, email, password) 
                                        vALUES('$nombre', '$apePaterno', '$apeMaterno', '$email', '$password')";
>>>>>>> Stashed changes

echo $resultado_de_la_ejecucion_del_query = mysqli_query($objeto_para_usar_conexion, $query_insert_usuario);
?>
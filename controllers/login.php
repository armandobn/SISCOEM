<?php 

  session_start();
  require_once("../database/database.php");
  

  $objeto_conexion = conexion();

  $email = $_POST['email'];
  $password = sha1($_POST['password']);


  $query_de_busqueda = "SELECT * FROM logins WHERE email='$email' and password='$password'";

  $resultado_del_query= mysqli_query($objeto_conexion, $query_de_busqueda);

  if(mysqli_num_rows($resultado_del_query) > 0){
    $_SESSION['inicio']=$email;
    echo 1;
  }else{
    echo 0;
  }
  
?>
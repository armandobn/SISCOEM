<?php
 function conexion(){
     $conexion = new mysqli('127.0.0.1', 'root', '', 'simdirne_siscoem');


     if($conexion->connect_errno){
         echo'Error en la conexion a nuestro Schema' .$conexion->connect_error;

     }
     $conexion->set_charset('utf8');

     return $conexion;
 }


 
?>
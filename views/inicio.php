<?php

  session_start();

  if(isset($_SESSION['user'])){
    
?>

  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php  
      require_once "dependencias.php";
    ?>
  </head>
  <body>
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <div class="jumbotron mt-4">
            <h1 class="display-3">Bienvenido al sistema</h1>
            <br>
            <p class="lead">Esta venta es segura y si no estas logueado... <br> Jamás la podrás ver</p>
            <br>
            <hr class="my-2 mt-4">
            <p class="lead d-flex justify-content-end mt-4">
              <a class="btn btn-primary btn-lg mt-4" href="../php/control_salida_sistema.php" role="button">Salir</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
  </html>

<?php  

  }else{
    header("location:../index.php");
  }

?>


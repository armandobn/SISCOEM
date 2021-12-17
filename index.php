<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SISCOEM</title>
  <?php require_once 'controllers/app/dependencias.php' ?>
</head>
<body>
  <div class="container">
    <?php 
    require_once 'views/navbar.php';
      if(isset($_GET['vista'])){
        
        switch($_GET['vista']){
          case 'login':
            require_once 'views/login.php';
          break;

          case 'personal':
            require_once 'views/personal.php';
            break;

          default:
            require_once 'views/login.php';
          break;
        }
    
      }else{
        require_once 'views/login.php';
      }

    ?>
  </div>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

  <div class="container">
    <h1>Ejecutar Comando</h1>
  <p>Running Mix <br>
    npm run dev - Desarrollo<br>
    npm run prod - Produccion
  </p>
  <form id="form_comando" method="post">
    @csrf
    <input type="text" name="id_comando">
    <span id="btn_comando" class="btn btn-primary">Ejecutar</span>
    
  </form>

    <div id="tabla_uno"></div>
  
  </div>
  
  
</body>
</html>

<script>

  $(document).ready(function () {
    $('#btn_comando').click(function(){
      $.ajax({
        type:'POST',
        url:'/agregarComando',
        data:$('#form_comando').serialize(),
        success:function(r){
          console.log(r);
          $('#tabla_uno').html(r);
        }

      });
    });
      
  });
</script>
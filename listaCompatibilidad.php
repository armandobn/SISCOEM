<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ejemplo de nueva página para GOB.mx</title>
  <!-- CSS -->
  <link href="/favicon.ico" rel="shortcut icon">
  <link href="https://framework-gb.cdn.gob.mx/assets/styles/main.css" rel="stylesheet">
  <!-- Respond.js soporte de media queries para Internet Explorer 8 -->
  <!-- ie8.js EventTarget para cada nodo en Internet Explorer 8 -->
  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ie8/0.2.2/ie8.js"></script>
    <![endif]-->
</head>
<body>
  <!-- Contenido -->
  <main class="page">
    <div class="container">
      <div class="row">
        <div class="col">
          <br>
          <br>
          <h1 style="text-align:center;" class="lead">Personal Docente/ Administratrivo con Horas
            Compativilidad de Empleos</h1>
          <br>
          <form action="" method="GET" onsubmit="return lista()">
            <div class="form-inline">
              <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" class="form-control" id="nombre" placeholder="Ingresa Nombre">
              </div>
              <div class="form-group" style="margin-inline: 11px;">
                <label for="tmm" class="control-label">Tipo de MOV-MOT:</label>
                <input type="text" class="form-control" id="tmm" placeholder="Ingresa MOV-MOT">
              </div>
              <div class="form-group">
                <label for="ct" class="control-label">C.T:</label>
                <input type="text" class="form-control" id="ct" placeholder="Ingresa C.T">
              </div>
            </div>
            <br>
            <div class="form-inline">
              <div class="form-group">
                <label for="filiacion">Filiacion: </label>
                <input type="text" class="form-control" id="filiacion" placeholder="Ingresa filiacion">
              </div>
              <div class="form-group" style="margin-inline: 11px;">
                <label for="ceocb" class="control-label">CETis o CBTis No:</label>
                <input type="text" class="form-control" id="ceocb" placeholder="Ingresa CETis o CBTis No">
              </div>
              <div class="form-group">
                <label for="fecha" class="control-label">Fecha:</label>
                <input type="text" class="form-control" id="fecha" placeholder="Ingresa Fecha">
              </div>
            </div>
            <br>
            <div class="form-inline">
              <div class="form-group">
                <label for="efectos">Efectos:</label>
                <input type="text" class="form-control" id="efectos" placeholder="Ingresa Efectos">
              </div>
              <div class="form-group" style="margin-inline: 11px;">
                <label for="siapsepweb" class="control-label">No.Doc SIAPSEPWEB:</label>
                <input type="text" class="form-control" id="siapsepweb" placeholder="Ingresa No.Doc SIAPSEPWEB">
              </div>
              </div>
              <br>
              <div class="form-inline">
              <div class="form-group">
                <label for="clave">Clave(s):</label>
                <input type="text" class="form-control" id="clave" placeholder="Ingresa Clave(s)">
              </div>
              <div class="form-group" style="margin-inline: 11px;">
                <label for="consecutivo" class="control-label">No.Consecutivo:</label>
                <input type="text" class="form-control" id="consecutivo" placeholder="Ingresa No.Consecutivo">
              </div>
              </div>
          </form>
        </div>
      </div>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col">
          <form method="POST" onsubmit="return tablaLista()">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Documentacion Soporte</th>
                  <th scope="col"> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Cuatro tantos del formato de compatibilidad de empleos con firmas autografas y
                    sellos.</td>
                  <td>
                    <label>
                      <input type="checkbox" id="opcion01" value="opcion01">
                    </label>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Constancia de nombramiento cotejada(con la firma autografa del interesado o
                    fotocopia cuando este debidamente autorizada.)</td>
                  <td>
                  <label>
                      <input type="checkbox" id="opcion02" value="opcion02">
                    </label>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Talones de pago cotejados.</td>
                  <td>
                  <label>
                      <input type="checkbox" id="opcion03" value="opcion03">
                    </label>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Horario cotejado.</td>
                  <td>
                  <label>
                      <input type="checkbox" id="opcion04" value="opcion04">
                    </label>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Original del nombramiento personalizado(en la asignacion de nuevos recursos).</td>
                  <td>
                  <label>
                      <input type="checkbox" id="opcion05" value="opcion05">
                    </label>
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Original del oficio de justificacion de efectos extemporaneos.</td>
                  <td>
                  <label>
                      <input type="checkbox" id="opcion06" value="opcion06">
                    </label>
                  </td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Original de la constancia de actividades tecnico-pedagogicas(al ostentar plazas
                    administrativas con plazas docentes).</td>
                  <td>
                  <label>
                      <input type="checkbox" id="opcion07" value="opcion07">
                    </label>
                  </td>
                </tr>
                <tr>
                  <th scope="row"> </th>
                  <td>Total de documentos.</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6 text-center">
          <h3>Director</h3>
          <form  method="GET" class="form-horizontal" role="form" onsubmit="return firma()">>
            <div class="form-group">
              <label class="col-sm-3 control-label" for="nombre">Nombre:</label>
              <div class="col-sm-9">
                <input class="form-control" id="nombre" placeholder="ingresa Nombre" type="text">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label" for="fecha">Fecha:</label>
              <div class="col-sm-9">
                <input class="form-control" id="fecha" placeholder="ingresa Fecha" type="text">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label" for="firma">Firma:</label>
              <div class="col-sm-9">
                <input class="form-control" style="border-bottom: 3px solid black;" id="firma" placeholder="Firma"
                  type="text">
              </div>
            </div>
            <div class="form-group">
              <button class="btn btn-primary" type="submit" id="btn" name="btn">Completado</button>
            </div>
          </form>
      </div>
    </div>
  </main>
  <!-- JS -->
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ie8/0.2.2/ie8.js"></script>
  <script src="https://framework-gb.cdn.gob.mx/gobmx.js"></script>
  <script src="js/listasCompatibilidad.js"></script>
</body>
</html>
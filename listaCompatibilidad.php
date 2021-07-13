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

          <form action="">
            <div class="form-inline">
              <div class="form-group">
                <label for="staticEmail">Nombre: </label>
                <input type="text" class="form-control" id="staticEmail" placeholder="Ingresa Nombre">
              </div>

              <div class="form-group" style="margin-inline: 11px;">
                <label for="staticEmail" class="control-label">Tipo de MOV-MOT:</label>
                <input type="text" class="form-control" id="staticEmail" placeholder="Ingresa MOV-MOT:">
              </div>

              <div class="form-group">
                <label for="staticEmail" class="control-label">C.T:</label>
                <input type="text" class="form-control" id="staticEmail" placeholder="Ingresa C.T">
              </div>
            </div>
          </form>

          <br>
          <form id="frmformulario" method="POST" class="form-horizontal" role="form" onsubmit="return logear()">
            <div class="col-md-4 mb-3">
              <label for="nombre">Nombre:</label>
              <input type="text" class="form-control" id="nombre" placeholder="Nombre">
            </div>
            <div class="col-md-4 mb-3">
              <label for="tmm">Tipo de MOV-MOT.:</label>
              <input type="text" class="form-control" id="tmm" placeholder="Tipo de MOV - MOT">
            </div>
            <div class="col-md-4 mb-3">
              <label for="ct">C.T:</label>
              <input type="text" class="form-control" id="Ct" placeholder="C.T">
            </div>
            <br>
            <div class="col-md-4 mb-3">
              <label for="filiacion">Filiacion:</label>
              <input type="text" class="form-control" id="filiacion" placeholder="Filiacion">
            </div>
            <div class="col-md-4 mb-3">
              <label for="ctcb">CETis o CBTis No:</label>
              <input type="text" class="form-control" id="ctcb" placeholder="CETis o CBTis No">
            </div>
            <div class="col-md-4 mb-3">
              <label for="fecha">Fecha:</label>
              <input type="text" class="form-control" id="fecha" placeholder="Fecha">
            </div>
            <br>
            <div class="col-md-4 mb-2">
              <label for="efectos">Efectos:</label>
              <input type="text" class="form-control" id="efectos" placeholder="Efectos">
            </div>
            <div class="col-md-4 mb-2">
              <label for="siapsepweb">No.Doc SIAPSEPWEB:</label>
              <input type="text" class="form-control" id="siapsepweb" placeholder="No.Doc SIAPSEPWEB">
            </div>
            <br>
            <div class="col-md-4 mb-2">
              <label for="clave">Clave(s):</label>
              <input type="text" class="form-control" id="clave" placeholder="Clave(s)">
            </div>
            <div class="col-md-4 mb-2">
              <label for="concecutivo">No.Consecutivo:</label>
              <input type="text" class="form-control" id="concecutivo" placeholder="No.Consecutivo">
            </div>
            <br>

          </form>
        </div>
      </div>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col">
          <form id="frmlista" method="POST" class="form-row" role="form" onsubmit="return logear()">
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
                      <input type="checkbox" value="opcion-01">
                    </label>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Constancia de nombramiento cotejada(con la firma autografa del interesado o
                    fotocopia cuando este debidamente autorizada.)</td>
                  <td>X</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Talones de pago cotejados.</td>
                  <td>X</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Horario cotejado.</td>
                  <td>X</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Original del nombramiento personalizado(en la asignacion de nuevos recursos).</td>
                  <td>X</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Original del oficio de justificacion de efectos extemporaneos.</td>
                  <td>X</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Original de la constancia de actividades tecnico-pedagogicas(al ostentar plazas
                    administrativas con plazas docentes).</td>
                  <td>X</td>
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
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label class="col-sm-3 control-label" for="email-03">Nombre:</label>
              <div class="col-sm-9">
                <input class="form-control" id="email-03" placeholder="ingresa Nombre" type="text">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label" for="email-03">Fecha:</label>
              <div class="col-sm-9">
                <input class="form-control" id="email-03" placeholder="ingresa Fecha" type="text">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label" for="email-03">Firma:</label>
              <div class="col-sm-9">
                <input class="form-control" style="border-bottom: 3px solid black;" id="email-03" placeholder="Firma"
                  type="text">
              </div>
            </div>
            <div class="form-group">
              <button class="btn btn-primary" type="submit">Completado</button>
            </div>
          </form>

        </div>
        <div class="col-md-3"></div>
      </div>


      <div class="row">
        <div class="card">
          <h5 class="card-header">Director</h5>
          <div class="card-body">
            <form id="frmlogin" method="POST" class="form-horizontal" role="form" onsubmit="return logear()">
              <div class="form-group">
                <label class="col-sm-3 control-label" for="nombre">Nombre:</label>
                <div class="col-sm-9">
                  <input class="form-control" id="nombre" placeholder="Ingresa nombre" type="text">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label" for="fecha">Fecha:</label>
                <div class="col-sm-9">
                  <input class="form-control" id="fecha" placeholder="fecha" type="text">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label" for="firma">Firma:</label>
                <div class="col-sm-9">
                  <input class="form-control" id="firma" placeholder="firma" type="text">
                </div>
              </div>
            </form>
          </div>
        </div>
        <br>
        <button class="btn btn-primary" type="submit">Completado</button>
        <br>
      </div>
    </div>

  </main>


  <!-- JS -->
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ie8/0.2.2/ie8.js"></script>
  <script src="https://framework-gb.cdn.gob.mx/gobmx.js"></script>
  <script src="js/validar_index.js"></script>

</body>

</html>
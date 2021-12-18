<div class="container">

  <div class="row top-buffer">
    <div class="col"></div>
  </div>
  <div class="row">
    <div class="col-md-3">
      <h1>CISCOEM</h1>
    </div>
    <div class="col-md-9">
      <p>
      <h4>Sistema de Compatibilidad de Empleo</h4>
      <h4>Crear formato de compatibilidad</h4>
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col-md-4">
      <div class="form-group">
        <div class="form-label" for="select_institucion">Seleccione la institución 1
          <span class="form-text" id="asterisco_select_institucion">*</span>:
        </div>
        <select class="form-control text-center" id="select_institucion">
          <option value=""></option>
          <option value="0">Plantel</option>
          <option value="1">Institucion externa</option>
        </select>
      </div>
    </div>
  </div>

  <div class="alert" id="alerta"></div>

  <form action="#" method="POST" class="form-inline" role="form" id="form_buscar_rfc">
    <div class="form-group">
      <label class="control-label" for="buscar_rfc">Registro Federal de Contribuyentes(R.F.C)
        <span class="form-text" id="asterisco_buscar_rfc">*</span>:
      </label>
      <input class="form-control" id="buscar_rfc" name="rfc" placeholder="Ingresa el RFC" type="text" disabled>
    </div>
    <button type="button" class="btn btn-primary" id="btn_buscar_rfc" disabled>Buscar</button>
  </form>

  <hr class="red">
  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#tab-01">Datos Personales</a></li>
    <li><a data-toggle="tab" href="#tab-02">Institucion 1</a></li>
    <li><a data-toggle="tab" href="#tab-03">Institucion 2</a></li>
    <li><a data-toggle="tab" href="#tab-04">Institucion Externa</a></li>
    <li><a data-toggle="tab" href="#tab-05">Lista Checable</a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane active" id="tab-01">
      <?php require_once 'datosPersonales.php' ?>
    </div>
    <div class="tab-pane" id="tab-02">
      <?php require_once 'institucionUno.php' ?>
    </div>
    <div class="tab-pane" id="tab-03">
      <?php require_once 'institucionDos.php' ?>
    </div>
    <div class="tab-pane" id="tab-04">...</div>
    <div class="tab-pane" id="tab-05">
      <?php require_once 'listaChecable.php' ?>
    </div>
  </div>

</div>

<script src="models/generales.js"></script>
<script src="models/formatoCompatibiliad.js"></script>
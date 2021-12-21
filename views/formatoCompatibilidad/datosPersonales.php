<form action="#" method="post" id="form_formatoCompatibilidad">

  <div class="row">
    <div class="col-md-4">
      <div class="form-group">
        <label class="control-label" for="curp">Clave Única de Registro de Población(CURP)
          <span class="form-text" id="asterisco_curp">*</span>:
        </label>
        <input class="form-control" id="curp" name="curp" placeholder="" type="text" disabled>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="form-group">
        <label for="" class="form-label" for="nombre">Nombre(s)
          <span class="form-text" id="asterisco_nombre">*</span>:
        </label>
        <input type="text" class="form-control" placeholder="" id="nombre" name="nombre" disabled>
      </div>
    </div>
    <div class="col-md-4">
      <div class="form-group">
        <label for="" class="form-label" for="apePaterno">Apellido Paterno
          <span class="form-text" id="asterisco_apePaterno">*</span>:
        </label>
        <input type="text" class="form-control" placeholder="" id="apePaterno" name="apePaterno" disabled>
      </div>
    </div>
    <div class="col-md-4">
      <div class="form-group">
        <label for="" class="form-label" for="apeMaterno">Apellido Materno
          <span class="form-text" id="asterisco_apeMaterno">*</span>:
        </label>
        <input type="text" class="form-control" placeholder="" id="apeMaterno" name="apeMaterno" disabled>
      </div>
    </div>
  </div>



  <div id="institucion_externa"></div>

  <div class="clearfix bottom-buffer">
    <div class="pull-left text-muted text-vertical-align-button">
      * Campos obligatorios
    </div>
    <div class="pull-right">
      <button type="button" class="btn btn-primary" id="btn_registrar" disabled>Registrar</button>
      <span class="btn btn-default" id="btn_salir" disabled>Salir</span>
    </div>
  </div>
</form>

<script src="models/generales.js"></script>
<script src="models/personal.js"></script>
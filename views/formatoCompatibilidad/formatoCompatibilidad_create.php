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

  <form action="#" method="POST" class="form-inline top-buffer" role="form" id="form_buscar_rfc">
   
    <div class="form-group">
      <label class="control-label" for="buscar_rfc">Registro Federal de Contribuyentes(R.F.C)
        <span class="form-text" id="asterisco_buscar_rfc">*</span>:
      </label>
      <input class="form-control" id="buscar_rfc" name="rfc" placeholder="Ingresa el RFC" type="text" disabled>
    </div>
    <button type="button" class="btn btn-primary" id="btn_buscar_rfc" disabled>Buscar</button>
  </form>

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

    <hr class="red">
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label class="control-label" for="certifica_inst_uno">Institucion 1 que certifica los datos del puesto
            actual:</label>
          <input class="form-control" id="certifica_inst_uno" placeholder="" type="text">
        </div>
      </div>
    </div>



    <div class="row">
      <div class="col-md-2">
        <div class="form-group">
          <div class="form-label" for="unidad_inst_uno">Unidad
            <span class="form-text" id="asterisco_unidad_inst_uno">*</span>:
          </div>
          <select class="form-control" id="unidad_inst_uno" disabled>
            <option value="">Unidad</option>
            @foreach ($unidads as $unidad)
            <option value="{{ $unidad->unidad }}">{{ $unidad->unidad }}</option>
            @endforeach
          </select>
        </div>

      </div>
      <div class="col-md-2">
        <div class="form-group">
          <div class="form-label" for="sub_unidad_inst_uno">Sub-unidad
            <span class="form-text" id="asterisco_sub_unidad_inst_uno">*</span>:
          </div>
          <select class="form-control" id="sub_unidad_inst_uno" disabled>
            <option value="">Sub-unidad</option>
            @foreach ($subUnidads as $subUnidad)
            <option value="{{ $subUnidad->subUnidad }}">{{ $subUnidad->subUnidad }}</option>
            @endforeach
          </select>
        </div>

      </div>
      <div class="col-md-2">
        <div class="form-group">
          <div class="form-label" for="categoria_inst_uno">Categoria
            <span class="form-text" id="asterisco_categoria_inst_uno">*</span>:
          </div>
          <select class="form-control" id="categoria_inst_uno" disabled>
            <option value="">Categoria</option>
            <option disabled><strong>-----Docente-----</strong></option>
            @foreach ($docens as $docen)
            <option value="{{ $docen->categoria }}">{{ $docen->categoria }}</option>
            @endforeach
            <option disabled><strong>-----Admistrativo-----</strong></option>
            @foreach ($admins as $admin)
            <option value="{{ $admin->categoria }}">{{ $admin->categoria }}</option>
            @endforeach
          </select>
        </div>

      </div>

      <div class="col-md-2">
        <div class="form-group">
          <div class="form-label" for="horas_inst_uno">Horas
            <span class="form-text" id="asterisco_horas_inst_uno">*</span>:
          </div>
          <select class="form-control text-center" id="horas_inst_uno" disabled>
            <option value="">Horas</option>
            {{ $i = 0 }}
            @foreach ($horas as $hora)
            <option class="text-center" value="{{ $hora->horas }}">{{ $hora->horas }} -
              {{ $i++ }} Horas
            </option>
            @endforeach
          </select>
        </div>

      </div>
      <div class="col-md-2">
        <div class="form-group">
          <div class="form-label" for="plaza_inst_uno">Plaza
            <span class="form-text" id="asterisco_plaza_inst_uno">*</span>:
          </div>
          <input type="text" class="form-control" placeholder="Ingresa la plaza" id="plaza_inst_uno" disabled>
        </div>

      </div>
      <div class="col-md-2">
        <div class="form-group">
          <div class="form-label" for="motivo_inst_uno">Motivo
            <span class="form-text" id="asterisco_motivo_inst_uno">*</span>:
          </div>
          <select class="form-control" id="motivo_inst_uno" disabled>
            <option value="">Motivo</option>
            @foreach ($motivos as $motivo)
            <option value="{{ $motivo->nick }}">{{ $motivo->nick }}</option>
            @endforeach
          </select>
        </div>
      </div>

    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <div class="form-label" for="puesto_inst_uno">Denominacion de la categoria o puesto
            <span class="form-text" id="asterisco_puesto_inst_uno">*</span>:
          </div>
          <input type="text" class="form-control" id="puesto_inst_uno" disabled>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="form-group datepicker-group">
          <label class="control-label" for="fecha_inicio_inst_uno">Fecha de inicio
            <span id="asterisco_fecha_inicio_inst_uno">*</span>:
          </label>
          <input class="form-control" id="fecha_inicio_inst_uno" name="fecha_inicio_inst_uno" type="text" disabled>
          <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group datepicker-group">
          <label class="control-label" for="fecha_termino_inst_uno">Fecha de termino
            <span id="asterisco_fecha_termino_inst_uno">*</span>:
          </label>
          <input class="form-control" id="fecha_termino_inst_uno" name="fecha_termino_inst_uno" type="text" disabled>
          <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
        </div>
      </div>
      <div class="col-md-4">
        <div class="pull-right">
          <button type="button" class="btn btn-primary" id="btn_agregar_inst_uno" disabled>Agregar</button>
        </div>

      </div>

    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th rowspan="2">Puesto o contrato</th>
            <th rowspan="2">Código presupuestal o grupo, grado y nivel</th>
            <th rowspan="2">Unidad de adscripción ubicación del centro de trabajo</th>
            <th colspan="3">Fecha de alta</th>
            <th rowspan="2">Tipo de nombramiento</th>
            <th rowspan="2">Remuneración del puesto</th>
            <th rowspan="2">Partida y clave presupuestal</th>
            <th rowspan="2">Ubicación del centro de trabajo, horario(*).</th>
          </tr>
          <tr>
            <th>Dia</th>
            <th>Mes</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody id="tabla_inst_uno">


        </tbody>
      </table>
    </div>

    <hr class="red">
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label class="control-label" for="certifica_inst_dos">Institucion 2 que valida los datos del puesto o
            contrato a
            desempeñar:</label>
          <input class="form-control" id="certifica_inst_dos" name="certifica_inst_dos" placeholder="" type="text" disabled>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2">
        <div class="form-group">
          <div class="form-label" for="unidad_inst_dos">Unidad
            <span class="form-text" id="asterisco_unidad_inst_dos">*</span>:
          </div>
          <select class="form-control" id="unidad_inst_dos" disabled>
            <option value="">Unidad</option>
            @foreach ($unidads as $unidad)
            <option value="{{ $unidad->unidad }}">{{ $unidad->unidad }}</option>
            @endforeach
          </select>
        </div>

      </div>
      <div class="col-md-2">
        <div class="form-group">
          <div class="form-label" for="sub_unidad_inst_dos">Sub-unidad
            <span class="form-text" id="asterisco_sub_unidad_inst_dos">*</span>:
          </div>
          <select class="form-control" id="sub_unidad_inst_dos" disabled>
            <option value="">Sub-unidad</option>
            @foreach ($subUnidads as $subUnidad)
            <option value="{{ $subUnidad->subUnidad }}">{{ $subUnidad->subUnidad }}</option>
            @endforeach
          </select>
        </div>

      </div>
      <div class="col-md-2">
        <div class="form-group">
          <div class="form-label" for="categoria_inst_dos">Categoria
            <span class="form-text" id="asterisco_categoria_inst_dos">*</span>:
          </div>
          <select class="form-control" id="categoria_inst_dos" disabled>
            <option value="">Categoria</option>
            <option disabled><strong>-----Docente-----</strong></option>
            @foreach ($docens as $docen)
            <option value="{{ $docen->categoria }}">{{ $docen->categoria }}</option>
            @endforeach
            <option disabled><strong>-----Admistrativo-----</strong></option>
            @foreach ($admins as $admin)
            <option value="{{ $admin->categoria }}">{{ $admin->categoria }}</option>
            @endforeach
          </select>
        </div>

      </div>

      <div class="col-md-2">
        <div class="form-group">
          <div class="form-label" for="horas_inst_dos">Horas
            <span class="form-text" id="asterisco_horas_inst_dos">*</span>:
          </div>
          <select class="form-control text-center" id="horas_inst_dos" disabled>
            <option value="">Horas</option>
            {{ $i = 0 }}
            @foreach ($horas as $hora)
            <option class="text-center" value="{{ $hora->horas }}">{{ $hora->horas }} -
              {{ $i++ }} Horas
            </option>
            @endforeach
          </select>
        </div>

      </div>
      <div class="col-md-2">
        <div class="form-group">
          <div class="form-label" for="plaza_inst_dos">Plaza
            <span class="form-text" id="asterisco_plaza_inst_dos">*</span>:
          </div>
          <input type="text" class="form-control" placeholder="Ingresa la plaza" id="plaza_inst_dos" disabled>
        </div>

      </div>
      <div class="col-md-2">
        <div class="form-group">
          <div class="form-label" for="motivo_inst_dos">Motivo
            <span class="form-text" id="asterisco_motivo_inst_dos">*</span>:
          </div>
          <select class="form-control" id="motivo_inst_dos" disabled>
            <option value="">Motivo</option>
            @foreach ($motivos as $motivo)
            <option value="{{ $motivo->nick }}">{{ $motivo->nick }}</option>
            @endforeach
          </select>
        </div>
      </div>

    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <div class="form-label" for="puesto_inst_dos">Denominacion de la categoria o puesto
            <span class="form-text" id="asterisco_puesto_inst_dos">*</span>:
          </div>
          <input type="text" class="form-control" id="puesto_inst_dos" disabled>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="form-group datepicker-group">
          <label class="control-label" for="fecha_inicio_inst_dos">Fecha de inicio
            <span id="asterisco_fecha_inicio_inst_dos">*</span>:
          </label>
          <input class="form-control" id="fecha_inicio_inst_dos" name="fecha_inicio_inst_dos" type="text" disabled>
          <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group datepicker-group">
          <label class="control-label" for="fecha_termino_inst_dos">Fecha de termino
            <span id="asterisco_fecha_termino_inst_dos">*</span>:
          </label>
          <input class="form-control" id="fecha_termino_inst_dos" name="fecha_termino_inst_dos" type="text" disabled>
          <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
        </div>
      </div>
      <div class="col-md-4">
        <div class="pull-right">
          <button type="button" class="btn btn-primary" id="btn_agregar_inst_dos" disabled>Agregar</button>
        </div>

      </div>

    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th rowspan="2">Puesto o contrato</th>
            <th rowspan="2">Código presupuestal o grupo, grado y nivel</th>
            <th rowspan="2">Unidad de adscripción ubicación del centro de trabajo</th>
            <th colspan="3">Fecha de alta</th>
            <th rowspan="2">Tipo de nombramiento</th>
            <th rowspan="2">Remuneración actual y de honorarios</th>
            <th rowspan="2">Partida y clave presupuestal</th>
            <th rowspan="2">Ubicación del centro de trabajo, horario y tiempo de traslado(*).</th>
          </tr>
          <tr>
            <th>Dia</th>
            <th>Mes</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody id="tabla_inst_dos">

        </tbody>
      </table>
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
</div>

<script src="models/generales.js"></script>
<script src="models/formatoCompatibiliad.js"></script>
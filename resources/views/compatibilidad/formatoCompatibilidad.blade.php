@extends('layouts.plantilla')

@section('title', 'Formato Compatibilidad')

@section('content')
    @extends('layouts.plantillaNav')

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

    <form class="form-inline top-buffer" role="form" id="form_buscar_rfc">
        @csrf
        <div class="form-group">
            <label class="control-label" for="buscar_rfc">Registro Federal de Contribuyentes(R.F.C)
                <span class="form-text" id="asterisco_buscar_rfc">*</span>:
            </label>
            <input class="form-control" id="buscar_rfc" placeholder="Ingresa el RFC" type="text" disabled>
        </div>
        <button type="button" class="btn btn-primary" id="btn_buscar_rfc" disabled>Buscar</button>
    </form>

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
                <label class="control-label" for="">Institucion 1 que certifica los datos del puesto
                    actual:</label>
                <input class="form-control" id="inst_uno" placeholder="" type="text" disabled>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label" for="unidad">Unidad
                    <span class="form-text" id="asterisco_unidad">*</span>:
                </div>
                <select class="form-control" id="unidad">
                    <option value="">Unidad</option>
                    <option value="13">13</option>
                    <option value="19">19</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="27">27</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="65">65</option>
                    <option value="68">68</option>
                </select>
            </div>

        </div>
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label" for="sub_unidad">Sub-unidad
                    <span class="form-text" id="asterisco_sub_unidad">*</span>:
                </div>
                <select class="form-control" id="sub_unidad">
                    <option value="">Sub-unidad</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="27">27</option>
                    <option value="52">52</option>
                    <option value="98">98</option>
                </select>
            </div>

        </div>
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label" for="categoria">Categoria
                    <span class="form-text" id="asterisco_categoria">*</span>:
                </div>
                <select class="form-control" id="categoria">
                    <option value="">Categoria</option>
                    <option disabled><strong>-----Docente-----</strong></option>
                    {{-- @foreach ($docens as $docen)
                        <option value="{{ $docen->categoria }}">{{ $docen->categoria }}</option>
                    @endforeach
                    <option disabled><strong>-----Admistrativo-----</strong></option>
                    @foreach ($admins as $admin)
                        <option value="{{ $admin->categoria }}">{{ $admin->categoria }}</option>
                    @endforeach --}}
                </select>
            </div>

        </div>

        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label" for="horas">Horas
                    <span class="form-text" id="asterisco_horas">*</span>:
                </div>
                <select class="form-control text-center" id="horas">
                    <option value="">Horas</option>
                    <option value="000">000 - 0 Horas</option>
                    <option value="010">010 - 1 Horas</option>
                    <option value="020">020 - 2 Horas</option>
                    <option value="030">030 - 3 Horas</option>
                    <option value="040">040 - 4 Horas</option>
                    <option value="050">050 - 5 Horas</option>
                    <option value="060">060 - 6 Horas</option>
                    <option value="070">070 - 7 Horas</option>
                    <option value="080">080 - 8 Horas</option>
                    <option value="090">090 - 9 Horas</option>
                    <option value="100">100 - 10 Horas</option>
                    <option value="110">110 - 11 Horas</option>
                    <option value="120">120 - 12 Horas</option>
                    <option value="130">130 - 13 Horas</option>
                    <option value="140">140 - 14 Horas</option>
                    <option value="150">150 - 15 Horas</option>
                    <option value="160">160 - 16 Horas</option>
                    <option value="170">170 - 17 Horas</option>
                    <option value="180">180 - 18 Horas</option>
                    <option value="190">190 - 19 Horas</option>
                </select>
            </div>

        </div>
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label" for="plaza">Plaza
                    <span class="form-text" id="asterisco_plaza">*</span>:
                </div>
                <input type="text" class="form-control" placeholder="Ingresa la plaza" id="plaza">
            </div>

        </div>
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label" for="motivo">Motivo
                    <span class="form-text" id="asterisco_motivo">*</span>:
                </div>
                <select class="form-control" id="motivo">
                    <option value="">Motivo</option>
                    {{-- @foreach ($motivos as $motivo)
                        <option value="{{ $motivo->nick }}">{{ $motivo->nick }}</option>
                    @endforeach --}}
                </select>
            </div>
        </div>

    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <div class="form-label" for="puesto">Denominacion de la categoria o puesto
                    <span class="form-text" id="asterisco_puesto">*</span>:
                </div>
                <input type="text" class="form-control" id="puesto" disabled>
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
                <button type="text" class="btn btn-primary" id="btn_agregar_inst_uno" disabled>Agregar</button>
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
                <label class="control-label" for="">Institucion 2 que valida los datos del puesto o contrato a
                    desempeñar:</label>
                <input class="form-control" id="" placeholder="" type="text" disabled>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label" for="unidad">Unidad
                    <span class="form-text" id="asterisco_unidad">*</span>:
                </div>
                <select class="form-control" id="unidad">
                    <option value="">Unidad</option>
                    <option value="13">13</option>
                    <option value="19">19</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="27">27</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="65">65</option>
                    <option value="68">68</option>
                </select>
            </div>

        </div>
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label" for="sub_unidad">Sub-unidad
                    <span class="form-text" id="asterisco_sub_unidad">*</span>:
                </div>
                <select class="form-control" id="sub_unidad">
                    <option value="">Sub-unidad</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="27">27</option>
                    <option value="52">52</option>
                    <option value="98">98</option>
                </select>
            </div>

        </div>
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label" for="categoria">Categoria
                    <span class="form-text" id="asterisco_categoria">*</span>:
                </div>
                <select class="form-control" id="categoria">
                    <option value="">Categoria</option>
                    <option disabled><strong>-----Docente-----</strong></option>
                    {{-- @foreach ($docens as $docen)
                        <option value="{{ $docen->categoria }}">{{ $docen->categoria }}</option>
                    @endforeach
                    <option disabled><strong>-----Admistrativo-----</strong></option>
                    @foreach ($admins as $admin)
                        <option value="{{ $admin->categoria }}">{{ $admin->categoria }}</option>
                    @endforeach --}}
                </select>
            </div>

        </div>

        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label" for="horas">Horas
                    <span class="form-text" id="asterisco_horas">*</span>:
                </div>
                <select class="form-control text-center" id="horas">
                    <option value="">Horas</option>
                    <option value="000">000 - 0 Horas</option>
                    <option value="010">010 - 1 Horas</option>
                    <option value="020">020 - 2 Horas</option>
                    <option value="030">030 - 3 Horas</option>
                    <option value="040">040 - 4 Horas</option>
                    <option value="050">050 - 5 Horas</option>
                    <option value="060">060 - 6 Horas</option>
                    <option value="070">070 - 7 Horas</option>
                    <option value="080">080 - 8 Horas</option>
                    <option value="090">090 - 9 Horas</option>
                    <option value="100">100 - 10 Horas</option>
                    <option value="110">110 - 11 Horas</option>
                    <option value="120">120 - 12 Horas</option>
                    <option value="130">130 - 13 Horas</option>
                    <option value="140">140 - 14 Horas</option>
                    <option value="150">150 - 15 Horas</option>
                    <option value="160">160 - 16 Horas</option>
                    <option value="170">170 - 17 Horas</option>
                    <option value="180">180 - 18 Horas</option>
                    <option value="190">190 - 19 Horas</option>
                </select>
            </div>

        </div>
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label" for="plaza">Plaza
                    <span class="form-text" id="asterisco_plaza">*</span>:
                </div>
                <input type="text" class="form-control" placeholder="Ingresa la plaza" id="plaza">
            </div>

        </div>
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label" for="motivo">Motivo
                    <span class="form-text" id="asterisco_motivo">*</span>:
                </div>
                <select class="form-control" id="motivo">
                    <option value="">Motivo</option>
                    {{-- @foreach ($motivos as $motivo)
                        <option value="{{ $motivo->nick }}">{{ $motivo->nick }}</option>
                    @endforeach --}}
                </select>
            </div>
        </div>

    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <div class="form-label" for="puesto">Denominacion de la categoria o puesto
                    <span class="form-text" id="asterisco_puesto">*</span>:
                </div>
                <input type="text" class="form-control" id="puesto" disabled>
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
                <button type="text" class="btn btn-primary" id="btn_agregar_inst_dos" disabled>Agregar</button>
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

    <div class="clearfix bottom-buffer">
        <div class="pull-left text-muted text-vertical-align-button">
            * Campos obligatorios
        </div>
        <div class="pull-right">
            <span class="btn btn-primary" id="btn_registrar" disabled>Registrar</span>
            <span class="btn btn-default" id="btn_salir" disabled>Salir</span>
        </div>
    </div>


@endsection
@section('complementos')
    <script src="https://framework-gb.cdn.gob.mx/assets/scripts/jquery-ui-datepicker.js"></script>
    <script src="{{ asset('js/formatoCompatibilidad.js') }}"></script>
@endsection

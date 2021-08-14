@extends('layouts.plantilla')

@section('title', 'Registrar Docente')

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
        <h4>Registrar docente</h4>
        </p>
    </div>
</div>

<form action="{{ route('registrarDocente.create') }}" method="post" id="form_registrar_docente">
    @csrf

    <div class="row top-buffer">
        <div class="col-md-4">
            <div class="form-group">
                <label for="" class="form-label" for="nombre">Nombre(s)
                    <span class="form-text" id="asterisco_nombre">*</span>:
                </label>
                <input type="text" class="form-control" placeholder="Ingresa nombre(s)" id="nombre" name="nombre">
            </div>
        </div>
        {{-- <button type="submit">Envirar Formulario</button> --}}

        <div class="col-md-4">
            <div class="form-group">
                <label for="" class="form-label" for="apePaterno">Apellido Paterno
                    <span class="form-text" id="asterisco_apePaterno">*</span>:
                </label>
                <input type="text" class="form-control" placeholder="Ingresa primer apellido" id="apePaterno"
                    name="apePaterno">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label for="" class="form-label" for="apeMaterno">Apellido Materno
                    <span class="form-text" id="asterisco_apeMaterno">*</span>:
                </label>
                <input type="text" class="form-control" placeholder="Ingresa segundo apellido" id="apeMaterno"
                    name="apeMaterno">
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="" class="form-label" for="rfc">Registro Federal de Contribuyentes(RFC)
                    <span class="form-text" id="asterisco_rfc">*</span>:
                </label>
                <input type="text" class="form-control" placeholder="Ingresa RFC" id="rfc" name="rfc">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="" class="form-label" for="curp">Clave Única de Registro de Población(CURP)
                    <span class="form-text" id="asterisco_curp">*</span>:
                </label>
                <input type="text" class="form-control" placeholder="Ingresa CURP" id="curp" name="curp">
            </div>
        </div>
        <div class="col-md-4"></div>
    </div>

    <hr class="red">
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
                    
                    @foreach ($docens as $docen)
                        <option value="{{$docen->categoria}}">{{$docen->categoria}}</option>
                    @endforeach
                    <option disabled><strong>-----Admistrativo-----</strong></option>
                    @foreach ($admins as $admin)
                        <option value="{{$admin->categoria}}">{{$admin->categoria}}</option>
                    @endforeach
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
                    <option value="120">120 - 20 Horas</option>
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
                    @foreach ($motivos as $motivo)
                        <option value="{{$motivo->nick}}">{{$motivo->nick}}</option>
                    @endforeach
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
            <button type="button" id="btn_agregar" class="btn btn-primary">Agregar</button>
        </div>
        <div class="col-md-4">
            <button type="button" id="btn_eliminar" class="btn btn-primary">Eliminar ultimo elemento</button>
        </div>
    </div>

    
    <div class="row top-buffer ">
        <div class="col-md-8">
            <div class="form-group">
                <label for="" class="form-label" for="tabla" id="tabla">Datos
                    <span class="form-text" id="asterisco_tabla">*</span>:
                </label>
                {{-- <input class="form-control" id="tabla" type="hidden"> --}}
            </div>        
        </div>
    </div>

    
    <div class="table-responsive form-group">

        <table class="table table-bordered" id="tabla_base">
            <thead>
                <tr>
                    <th scope="col">Unidad</th>
                    <th scope="col">Sub-unidad</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Horas</th>
                    <th scope="col">Plaza</th>
                    <th scope="col">Motivo</th>
                    <th scope="col">Denominacion de la categoria o puesto</th>
                </tr>
            </thead>
            <tbody id="tabla_uno">

            </tbody>
        </table>
    </div>

    <div class="row top-buffer">
        <div class="col-md-4">
            <div class="form-group datepicker-group">
                <label class="control-label" for="ingresoGob">Ingreso al gobierno federal
                    <span id="asterisco_ingresoGob">*</span>:
                </label>
                <input class="form-control" id="ingresoGob" name="ingresoGob" type="text">
                <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group datepicker-group">
                <label class="control-label" for="ingresoSep">Ingreso a la SEP
                    <span id="asterisco_ingresoSep">*</span>:
                </label>
                <input class="form-control" id="ingresoSep" name="ingresoSep" type="text">
                <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group datepicker-group">
                <label class="control-label" for="ingresoDgti">Ingreso a la DGETI
                    <span id="asterisco_ingresoDgti">*</span>:
                </label>
                <input class="form-control" id="ingresoDgti" name="ingresoDgti" type="text">
                <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                <label for="observaciones" class="form-label">Observaciones
                    <span class="form-text" id="asterisco_observaciones">*</span>:
                </label>
                <textarea class="form-control" placeholder="Ingresa observaciones" rows="5" id="observaciones"
                    name="observaciones"></textarea>
            </div>
        </div>
    </div>

    <div class="clearfix bottom-buffer">
        <div class="pull-left text-muted text-vertical-align-button">
            * Campos obligatorios
        </div>
        <div class="pull-right">
            <span class="btn btn-primary" id="btn_registrar">Registrar</span>
            <span class="btn btn-default">Salir</span>
        </div>
    </div>
</form>


@endsection
@section('complementos')
<script src="https://framework-gb.cdn.gob.mx/assets/scripts/jquery-ui-datepicker.js"></script>
<script src="{{ asset('js/docente_c.js') }}"></script>
@endsection

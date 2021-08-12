@extends('layouts.plantilla')

@section('title', 'Registrar Docente')

@section('content')

@extends('layouts.plantillaNav')



@foreach ($docentes as $docente)
        <li>
          <a href="#">{{$docente->nombre}}</a> 
          {{-- {{route('cursos.show','abc')}}"> --}}
          {{-- {{route('cursos.show',$curso->id)}} --}}
        </li>
@endforeach

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

<form action="{{route('registrarDocente.create')}}" method="post" id="form_registrar_docente">
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
        <div class="col-md-4">
            <div class="form-group">
                <label for="" class="form-label" for="primer_apellido">Primer apellido
                    <span class="form-text" id="asterisco_primer_apellido">*</span>:
                </label>
                <input type="text" class="form-control" placeholder="Ingresa primer apellido" id="primer_apellido"
                    name="primer_apellido">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label for="" class="form-label" for="segundo_apellido">Segundo apellido
                    <span class="form-text" id="asterisco_segundo_apellido">*</span>:
                </label>
                <input type="text" class="form-control" placeholder="Ingresa segundo apellido" id="segundo_apellido"
                    name="segundo_apellido">
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
                <select class="form-control" id="unidad" name="unidad">
                    <option value="">Unidad</option>
                    <option value="27">27</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

        </div>
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label" for="sub_unidad">Sub-unidad
                    <span class="form-text" id="asterisco_sub_unidad">*</span>:
                </div>
                <select class="form-control" id="sub_unidad" name="sub_unidad">
                    <option value="">Sub-unidad</option>
                    <option value="02">02</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

        </div>
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label" for="categoria">Categoria
                    <span class="form-text" id="asterisco_categoria">*</span>:
                </div>
                <select class="form-control" id="categoria" name="categoria">
                    <option value="">Categoria</option>
                    <option value="E4523">E4523</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

        </div>
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label" for="horas">Horas
                    <span class="form-text" id="asterisco_horas">*</span>:
                </div>
                <select class="form-control" id="horas" name="horas">
                    <option value="">Horas</option>
                    <option value="050">050 - 5 Horas</option>
                    <option value="020">2</option>
                    <option value="030">3</option>
                    <option value="040">4</option>
                    <option value="060">6</option>
                </select>
            </div>

        </div>
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label" for="plaza">Plaza
                    <span class="form-text" id="asterisco_plaza">*</span>:
                </div>
                <input type="text" class="form-control" placeholder="Ingresa la plaza" id="plaza" name="plaza">
            </div>

        </div>
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label" for="motivo">Motivo
                    <span class="form-text" id="asterisco_motivo">*</span>:
                </div>
                <select class="form-control" id="motivo" name="motivo">
                    <option value="">Motivo</option>
                    <option value="95">95</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
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
                <input type="text" class="form-control" id="puesto" name="puesto" value="Profesor de asignatura 'C'">
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

    <div class="table-responsive top-buffer">
        <table class="table table-bordered">
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
                <label class="control-label" for="calendarYear_gobierno">Ingreso al gobierno federal
                    <span id="asterisco_calendarYear_gobierno">*</span>:
                </label>
                <input class="form-control" id="calendarYear_gobierno" name="calendarYear_gobierno" type="text">
                <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group datepicker-group">
                <label class="control-label" for="calendarYear_sep">Ingreso a la SEP
                    <span id="asterisco_calendarYear_sep">*</span>:
                </label>
                <input class="form-control" id="calendarYear_sep" name="calendarYear_sep" type="text">
                <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group datepicker-group">
                <label class="control-label" for="calendarYear_dgeti">Ingreso a la DGETI
                    <span id="asterisco_calendarYear_dgeti">*</span>:
                </label>
                <input class="form-control" id="calendarYear_dgeti" name="calendarYear_dgeti" type="text">
                <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                <label for="observaciones" class="form-label" >Observaciones
                    <span class="form-text" id="asterisco_observaciones">*</span>:
                </label>
                <textarea class="form-control" placeholder="Ingresa observaciones" rows="5" 
                    id="observaciones" name="observaciones"></textarea>
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

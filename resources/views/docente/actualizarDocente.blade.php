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
        <h4>Actualizar docente</h4>
        </p>
    </div>
</div>

<div class="alert" id="alerta"></div>

<form action="{{route('actualizarDocente.obtenerRfc')}}" method="post" id="form_buscar_rfc">
    @csrf
    <div class="row">
        <div class="col-md-4">
            <div class="form-group">
                <label class="control-label" for="buscar_rfc">R.F.C
                    <span class="form-text" id="asterisco_buscar_rfc">*</span>:
                </label>
                <input class="form-control" id="buscar_rfc" name="buscar_rfc" placeholder="Ingrese R.F.C" type="text">
            </div>
            <div class="pull-right">
                <button type="button" class="btn btn-primary" id="btn_buscar_rfc">Buscar</button>
            </div>
        </div>
    </div>
</form>
  
<form action="#" method="post" id="form_actualizar_docente">
    @csrf
    @method('put')
    
    <div class="row top-buffer">
        <div class="col-md-4">
            <div class="form-group">
                <label for="" class="form-label" for="nombre">Nombre(s)
                    <span class="form-text" id="asterisco_nombre">*</span>:
                </label>
                <input type="text" class="form-control" placeholder="Ingresa nombre(s)" id="nombre" name="nombre" disabled>
            </div>
        </div>

        <div class="col-md-4">
            <div class="form-group">
                <label for="" class="form-label" for="apePaterno">Apellido Paterno
                    <span class="form-text" id="asterisco_apePaterno">*</span>:
                </label>
                <input type="text" class="form-control" placeholder="Ingresa primer apellido" id="apePaterno"
                    name="apePaterno" disabled>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label for="" class="form-label" for="apeMaterno">Apellido Materno
                    <span class="form-text" id="asterisco_apeMaterno">*</span>:
                </label>
                <input type="text" class="form-control" placeholder="Ingresa segundo apellido" id="apeMaterno"
                    name="apeMaterno" disabled>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="" class="form-label" for="rfc">Registro Federal de Contribuyentes(RFC)
                    <span class="form-text" id="asterisco_rfc">*</span>:
                </label>
                <input type="text" class="form-control" placeholder="Ingresa RFC" id="rfc" name="rfc" disabled>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="" class="form-label" for="curp">Clave Única de Registro de Población(CURP)
                    <span class="form-text" id="asterisco_curp">*</span>:
                </label>
                <input type="text" class="form-control" placeholder="Ingresa CURP" id="curp" name="curp" disabled>
            </div>
        </div>
        <div class="col-md-4"></div>
    </div>

    <div class="row top-buffer">
        <div class="col-md-4">
            <div class="form-group datepicker-group">
                <label class="control-label" for="ingresoGob">Ingreso al gobierno federal
                    <span id="asterisco_ingresoGob">*</span>:
                </label>
                <input class="form-control" id="ingresoGob" name="ingresoGob" type="text" disabled>
                <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group datepicker-group">
                <label class="control-label" for="ingresoSep">Ingreso a la SEP
                    <span id="asterisco_ingresoSep">*</span>:
                </label>
                <input class="form-control" id="ingresoSep" name="ingresoSep" type="text" disabled>
                <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group datepicker-group">
                <label class="control-label" for="ingresoDgti">Ingreso a la DGETI
                    <span id="asterisco_ingresoDgti">*</span>:
                </label>
                <input class="form-control" id="ingresoDgti" name="ingresoDgti" type="text" disabled>
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
                    name="observaciones" disabled></textarea>
            </div>
        </div>
    </div>
</form>
<form action="" method="post" id="form_eliminar_todo_docente">
    <div class="bottom-buffer">
        <div class="pull-left text-muted text-vertical-align-button">
            * Campos obligatorios
        </div>
        <div class="pull-right">
            <span class="btn btn-primary" id="btn_actualizar" disabled>Actualizar</span>

           
                @csrf            
                @method('delete')               
                <button type="submit" class="btn btn-default" id="btn_eliminar_registro" disabled>Eliminar</button>
           
            
        </div>
    </div>
</form>


<a href="#" id="datosTabla" class="btn btn-primary" disabled>Actualizar tabla datos</a>


<hr class="red">

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


@endsection
@section('complementos')
<script src="https://framework-gb.cdn.gob.mx/assets/scripts/jquery-ui-datepicker.js"></script>
<script src="{{ asset('js/docente_u.js') }}"></script>
@endsection

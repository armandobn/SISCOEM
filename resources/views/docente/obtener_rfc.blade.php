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
    <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#tab-01"> Buscar por RFC</a></li>
        <li><a data-toggle="tab" href="#tab-04">Buscar por nombre completo</a></li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane active" id="tab-01">
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label" for="buscar_rfc">Buscar por R.F.C
                            <span class="form-text" id="asterisco_buscar_rfc">*</span>:
                        </label>
                        <input class="form-control" id="buscar_rfc" name="buscar_rfc" placeholder="Ingrese R.F.C" type="text">
                    </div>
                    <div class="pull-right">
                        <button type="button" class="btn btn-primary" id="btn_buscar_rfc">Buscar</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane" id="tab-04">
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label" for="buscar_rfc">Buscar por nombre completo
                            <span class="form-text" id="asterisco_buscar_rfc">*</span>:
                        </label>
                        <input class="form-control" id="" name="" placeholder="Ingrese nombre completo" type="text">
                    </div>
                    <div class="pull-right">
                        <button type="button" class="btn btn-primary" id="">Buscar</button>
                    </div>
                </div>
            </div>
        </div>
      </div>


    
</form> 

@endsection
@section('complementos')
<script src="https://framework-gb.cdn.gob.mx/assets/scripts/jquery-ui-datepicker.js"></script>
<script src="{{ asset('js/docente_rfc.js') }}"></script>
@endsection

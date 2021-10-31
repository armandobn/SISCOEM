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


    <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#tab-01"> Buscar por RFC</a></li>
        <li><a data-toggle="tab" href="#tab-04">Buscar por nombre completo</a></li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane active" id="tab-01">
            <div class="row">
                <div class="col-md-4">
                    <form action="{{ route('actualizarDocente.obtenerRfc') }}" method="post" id="form_buscar_rfc">
                        @csrf
                        <div class="form-group">
                            <label class="control-label" for="buscar_rfc">Buscar por R.F.C
                                <span class="form-text" id="asterisco_buscar_rfc">*</span>:
                            </label>
                            <input class="form-control" id="buscar_rfc" name="buscar_rfc" placeholder="Ingresa RFC"
                                type="text">
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" id="option1" name="option_rfc" value="0"
                                    checked="checked"> Formato de Compatibilidad
                            </label>
                            <label>
                                <input type="radio" id="option2" name="option_rfc" value="1"
                                    > Docente
                            </label>    
                        </div>
                        <div class="pull-right">
                            <button type="button" class="btn btn-primary" id="btn_buscar_rfc">Buscar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="tab-pane" id="tab-04">
            <div class="row">
                <div class="col-md-4">
                    <form action="{{ route('actualizarDocente.obtenerCurp') }}" method="post" id="form_buscar_curp">
                        @csrf
                        <div class="form-group">
                            <label class="control-label" for="buscar_curp">Buscar por CURP
                                <span class="form-text" id="asterisco_buscar_curp">*</span>:
                            </label>
                            <input class="form-control" id="buscar_curp" name="buscar_curp" placeholder="Ingresa CURP"
                                type="text">
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" id="option1" name="option_curp" value="0"
                                    checked="checked"> Formato de Compatibilidad
                            </label>
                            <label>
                                <input type="radio" id="option2" name="option_curp" value="1"
                                    > Docente
                            </label>    
                        </div>
                        <div class="pull-right">
                            <button type="button" class="btn btn-primary" id="btn_buscar_curp">Buscar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>







@endsection
@section('complementos')
    <script src="https://framework-gb.cdn.gob.mx/assets/scripts/jquery-ui-datepicker.js"></script>
    <script src="{{ asset('js/actualizarDocumentos.js') }}"></script>
@endsection

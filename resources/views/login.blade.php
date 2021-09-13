@extends('layouts.plantilla')
@section('title', 'login')
@section('content')
<div class="row">
    <div class="col-md-12 text-center">
        <h1>SISCOEM</h1>
        <h4>Sistema de Compatibilidad de Empleado</h4>
    </div>
</div>
<div class="alert" id="alerta"></div>
<div class="row top-buffer">
    <div class="col-md-8">
        <form id="frmlogin" method="POST" class="form-horizontal" role="form">
            <div class="form-group">
                <label class="col-sm-3 control-label" for="email">Usuario 
                    <span class="form-text" id="asterisco_usuario">*</span>:
                </label>
                <div class="col-sm-9">
                    <input class="form-control" id="usuario"  name="usuario" placeholder="Ingresa tu usuario" type="text">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="password">Contraseña
                    <span class="form-text" id="asterisco_password">*</span>:</label>
                <div class="col-sm-9">
                    <input class="form-control" id="password" name="password" placeholder="Contraseña" type="password">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-3 col-sm-9">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox">
                            Recordarme
                        </label>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-3 col-sm-9">
                            <a href="">Olvide mi Contraseña</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-3 col-sm-9">
                    <span class="btn btn-primary pull-right" id="enviar">Enviar</span>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection
@section('complementos')
<script src="{{ asset('/js/login.js') }}"></script>


@endsection
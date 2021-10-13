@extends('layouts.plantilla')
@section('title', 'login')
@section('content')
<div class="row">
    <div class="col-md-12 text-center">
        <h1>SISCOEM</h1>
        <h4>Sistema de Compatibilidad de Empleado</h4>
        <h2>Registro</h2>
    </div>
</div>
<div class="alert" id="alerta"></div>
<div class="row top-buffer">
    <div class="col-md-8">
        <form id="frmlogin" method="POST" class="form-horizontal" role="form">
        
            <div class="form-group">
                <label class="col-sm-3 control-label" for="nombre">Nombre (s) 
                    <span class="form-text" id="asterisco_nombre">*</span>:
                </label>
                <div class="col-sm-9">
                    <input class="form-control" id="nombre"  name="nombre" placeholder="Ingresa tu nombre" type="text">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="primerApellido">Primer Apellido
                    <span class="form-text" id="asterisco_primerApellido">*</span>:</label>
                <div class="col-sm-9">
                    <input class="form-control" id="primerApellido" name="primerApellido" placeholder="Ingresa tu primer apellido" type="text">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="segundoApellido">Segundo Apellido
                    <span class="form-text" id="asterisco_segundoApellido">*</span>:</label>
                <div class="col-sm-9">
                    <input class="form-control" id="segundoApellido" name="segundoApellido" placeholder="Ingresa tu segundo apellido" type="text">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="email">Email
                    <span class="form-text" id="asterisco_email">*</span>:</label>
                <div class="col-sm-9">
                    <input class="form-control" id="email" name="email" placeholder="Ingresa tu correo electronico" type="email">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="password">Contraseña
                    <span class="form-text" id="asterisco_password">*</span>:</label>
                <div class="col-sm-9">
                    <input class="form-control" id="password" name="password" placeholder="Ingresa tu contraseña" type="password">
                </div>
            </div>
            
            
            <div class="form-group">
                <div class="col-sm-offset-3 col-sm-9">
                    <span class="btn btn-primary pull-right" id="btn_registrar">Registrar</span>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection
@section('complementos')
<script src="{{ asset('/js/registrarLogin.js') }}"></script>


@endsection
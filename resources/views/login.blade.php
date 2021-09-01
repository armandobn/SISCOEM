@extends('layouts.plantilla')
@section('title', 'login')
@section('content')
<div class="row">
    <div class="col-md-12 text-center">
        <h1>SISCOEM</h1>
        <h4>Sistema de Compatibilidad de Empleado</h4>
    </div>
</div>
<div class="row top-buffer">
    <div class="col-md-6">
        <form id="frmlogin" method="POST" class="form-horizontal" role="form" onsubmit="return logear()">
            <div class="form-group">
                <label class="col-sm-3 control-label" for="email">Usuario</label>
                <div class="col-sm-9">
                    <input class="form-control" id="usuario" placeholder="Ingresa tu usuario" type="text">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="password">Contraseña:</label>
                <div class="col-sm-9">
                    <input class="form-control" id="password" placeholder="Contraseña" type="password">
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
                    <button class="btn btn-primary pull-right" type="submit">Enviar</button>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection
@section('complementos')

@endsection
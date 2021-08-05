@extends('layouts.plantilla')

@section('title', 'Registrar Docente')

@section('content')
    <nav class="navbar navbar-inverse sub-navbar navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#subenlaces">
                    <span class="sr-only">Interruptor de Navegación</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">SISCOEM DGETI</a>
            </div>
            <div class="collapse navbar-collapse" id="subenlaces">
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                            aria-expanded="false">Compatibilidad <span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#">Crear</a></li>
                            <li><a href="#">Seguimiento</a></li>
                            <li><a href="#">Registrar docente</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Tablero</a></li>
                    <li><a href="#">Ayuda</a></li>
                    <li><a href="#">Cerrar sesión</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="row top-buffer">
        <div class="col"></div>
    </div>
    <div class="row">
        <div class="col-md-8">
            <h1>CISCOEM</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-md-8">
            <h2>Sistema de Compatibilidad de Empleo</h2>
        </div>
    </div>

    <div class="row">
        <div class="col-md-8">
            <h2>Registrar docente</h2>
            <hr class="red">
        </div>
    </div>

    <div class="row">
        <div class="col-md-4">
            <div class="form-group">
               <label for="" class="form-label">Nombre(s)
                <span class="form-text" id="asterisco">*</span>:
               </label>
               <input type="text" class="form-control" placeholder="Ingresa nombre(s)">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label for="" class="form-label">Primer apellido
                    <span class="form-text" id="asterisco">*</span>:
                </label>
                <input type="text" class="form-control" placeholder="Ingresa primer apellido">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label for="" class="form-label">Segundo apellido
                    <span class="form-text">*</span>:
                </label>
                <input type="text" class="form-control" placeholder="Ingresa segundo apellido">
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="" class="form-label">Registro Federal de Contribuyentes(RFC)
                    <span class="form-text">*</span>:
                </label>
                <input type="text" class="form-control" placeholder="Ingresa RFC">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="" class="form-label">Clave Única de Registro de Población(CURP)
                    <span class="form-text">*</span>:
                </label>
                <input type="text" class="form-control" placeholder="Ingresa CURP">
            </div>
        </div>
        <div class="col-md-4"></div>
    </div>

    <hr class="red">
    <div class="row">
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label">Unidad
                    <span class="form-class">*</span>:
                </div>
                <select class="form-control">
                    <option>27</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>    
            </div>
            
        </div>
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label">Sub-unidad
                    <span class="form-class">*</span>:
                </div>
                <select class="form-control">
                    <option>02</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>    
            </div>
            
        </div>
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label">Categoria
                    <span class="form-class">*</span>:
                </div>
                <select class="form-control">
                    <option>E4523</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>    
            </div>
            
        </div>
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label">Horas
                    <span class="form-class">*</span>:
                </div>
                <select class="form-control">
                    <option>050 - 5 Horas</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>    
            </div>
            
        </div>
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label">Plaza
                    <span class="form-class">*</span>:
                </div>
                <input type="text" class="form-control" placeholder="Ingresa la plaza">
            </div>
            
        </div>
        <div class="col-md-2">
            <div class="form-group">
                <div class="form-label">Motivo
                    <span class="form-class">*</span>:
                </div>
                <select class="form-control">
                    <option>95</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>    
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <div class="form-label">Denominacion de la categoria o puesto
                    <span class="form-class">*</span>:
                </div>
                <select class="form-control">
                    <option>Profesor de asignatura "C"</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>    
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-4">
            <button type="button" class="btn btn-primary">Agregar</button>
        </div>
    </div>

    <div class="row">
        <div class="col-md-4">
            <div class="form-group">
                <label for="" class="form-label">Puesto que desempeña
                    <span class="form text">*</span>:
                </label>
                <select class="form-control">
                    <option>Docente</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label for="" class="form-label">Perfil
                    <span class="fomr-text">*</span>:
                </label>
                <input type="text" class="form-control" placeholder="Ingresa perfil">
            </div>
        </div>
        <div class="col-md-4"></div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                <label for="" class="form-label">Observaciones
                    <span class="form-text">*</span>:
                </label>
                <textarea class="form-control" placeholder="Ingresa observaciones" rows="5"></textarea>
            </div>
        </div>
    </div>

    <div class="clearfix bottom-buffer">
        <div class="pull-left text-muted text-vertical-align-button">
            * Campos obligatorios
        </div>
        <div class="pull-right">
            <button class="btn btn-primary">Registrar</button>
            <span class="btn btn-default">Salir</span>
        </div>
    </div>
@endsection

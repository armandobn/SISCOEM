<div class="container">

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

    <div class="alert" id="alerta"></div>

    <form action="" method="post" id="form_registrar_docente">
       

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
                        @foreach ($unidads as $unidad)
                        <option value="{{$unidad->unidad}}">{{$unidad->unidad}}</option>    
                        @endforeach
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
                        @foreach ($subUnidads as $subUnidad)
                        <option value="{{$subUnidad->subUnidad}}">{{$subUnidad->subUnidad}}</option>    
                        @endforeach
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
                            <option value="{{ $docen->categoria }}">{{ $docen->categoria }}</option>
                        @endforeach
                        <option disabled><strong>-----Admistrativo-----</strong></option>
                        @foreach ($admins as $admin)
                            <option value="{{ $admin->categoria }}">{{ $admin->categoria }}</option>
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
                        <option value=""> Horas</option>
                        {{$i=0;}}
                        @foreach ($horas as $hora)
                            <option class="text-center" value="{{$hora->horas}}">{{$hora->horas}} - {{$i++}} Horas</option>    
                        @endforeach
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
                            <option value="{{ $motivo->nick }}">{{ $motivo->nick }}</option>
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

</div>

<script src="models/generales.js"></script>
<script src="models/personal.js"></script>
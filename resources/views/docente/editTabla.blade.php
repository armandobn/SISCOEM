@extends('layouts.plantilla')

@section('title', 'Registrar Docente')

@section('content')
    @extends('layouts.plantillaNav')


    <br>
    <form action="{{ route('actualizarDocente.updateTabla') }}" method="post" id="form_actualizar_tabla">
        @csrf
        @method('put')
        <div class="row top-buffer">
            <div class="col-md-2">
                <div class="form-group">
                    <div class="form-label" for="unidad">Unidad
                        <span class="form-text" id="asterisco_unidad">*</span>:
                    </div>
                    <select class="form-control" id="unidad" name="unidad">
                        <option value="">Unidad</option>
                        @foreach ($unidads as $unidad)
                            <option value="{{$unidad->unidad}}" @if ($unidad->unidad == $tabla[0]->unidad) ? selected : null @endif>{{$unidad->unidad}}</option>
                        @endforeach
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
                        @foreach ($subUnidads as $subUnidad)
                            <option value="{{$subUnidad->subUnidad}}" @if ($subUnidad->subUnidad == $tabla[0]->sub_unidad) ? selected : null @endif>{{$subUnidad->subUnidad}}</option>    
                        @endforeach
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
                        <option disabled><strong>-----Docente-----</strong></option>

                        @foreach ($docens as $docen)
                            <option value="{{ $docen->categoria }}" @if ($docen->categoria == $tabla[0]->categoria) ? selected : null @endif>
                                {{ $docen->categoria }}
                            </option>
                        @endforeach
                        <option disabled><strong>-----Admistrativo-----</strong></option>
                        @foreach ($admins as $admin)
                            <option value="{{ $admin->categoria }}" @if ($admin->categoria == $tabla[0]->categoria) ? selected : null @endif>
                                {{ $admin->categoria }}</option>
                        @endforeach
                    </select>
                </div>

            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <div class="form-label" for="horas">Horas
                        <span class="form-text" id="asterisco_horas">*</span>:
                    </div>
                    <select class="form-control text-center" id="horas" name="horas">
                        <option value="">Horas</option>
                        {{$i=0;}}
                        @foreach ($horas as $hora)
                            <option class="text-center" value="{{$hora->horas}}" @if ($hora->horas == $tabla[0]->horas) ? selected : null @endif>{{$hora->horas}} - {{$i++}} Horas</option>    
                        @endforeach
                    </select>
                </div>

            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <div class="form-label" for="plaza">Plaza
                        <span class="form-text" id="asterisco_plaza">*</span>:
                    </div>
                    <input type="text" class="form-control" placeholder="Ingresa la plaza" value="{{ $tabla[0]->plaza }}"
                        id="plaza" name="plaza">
                </div>

            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <div class="form-label" for="motivo">Motivo
                        <span class="form-text" id="asterisco_motivo">*</span>:
                    </div>
                    <select class="form-control" id="motivo" name="motivo">
                        <option value="">Motivo</option>

                        @foreach ($motivos as $motivo)
                            <option value="{{ $motivo->nick }}" @if ($motivo->nick == $tabla[0]->motivo) ? selected : null @endif>{{ $motivo->nick }}</option>
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
                    <input type="text" class="form-control" value="{{ $docen->denominacion }}" id="puesto" name="puesto"
                        disabled>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <button type="button" id="btn_actualizar" class="btn btn-primary">Actualizar</button>
            </div>
        </div>
        <input type="hidden" name="id" id="id" value="{{ $tabla[0]->id }}">
    </form>




@endsection
@section('complementos')
    <script src="{{ asset('js/datosTabla.js') }}"></script>
@endsection

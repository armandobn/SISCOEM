@extends('layouts.plantilla')

@section('title', 'Registrar Docente')

@section('content')
@extends('layouts.plantillaNav')


<br>
<form action="{{route('actualizarDocente.updateTabla')}}" method="post" id="form_actualizar_tabla">
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
                    <option value="13">13</option>
                    <option value="19">19</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="27">27</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="65">65</option>
                    <option value="68">68</option>
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
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="27">27</option>
                    <option value="52">52</option>
                    <option value="98">98</option>
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
                        {{-- <option value="{{ $docen->categoria }}">{{ $docen->categoria }}</option> --}}
                        <option value="{{ $docen->categoria }}" @if ($docen->categoria == $tabla[0]->categoria) ? selected : null @endif>
                            {{ $docen->categoria }}
                        </option>
                    @endforeach
                    <option disabled><strong>-----Admistrativo-----</strong></option>
                    @foreach ($admins as $admin)
                        {{-- <option value="{{ $admin->categoria }}">{{ $admin->categoria }}</option> --}}
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
                    <option value="010">010 - 1 Horas</option>
                    <option value="020">020 - 2 Horas</option>
                    <option value="030">030 - 3 Horas</option>
                    <option value="040">040 - 4 Horas</option>
                    <option value="050">050 - 5 Horas</option>
                    <option value="060">060 - 6 Horas</option>
                    <option value="070">070 - 7 Horas</option>
                    <option value="080">080 - 8 Horas</option>
                    <option value="090">090 - 9 Horas</option>
                    <option value="100">100 - 10 Horas</option>
                    <option value="110">110 - 11 Horas</option>
                    <option value="120">120 - 12 Horas</option>
                    <option value="130">130 - 13 Horas</option>
                    <option value="140">140 - 14 Horas</option>
                    <option value="150">150 - 15 Horas</option>
                    <option value="160">160 - 16 Horas</option>
                    <option value="170">170 - 17 Horas</option>
                    <option value="180">180 - 18 Horas</option>
                    <option value="190">190 - 19 Horas</option>
                    <option value="120">120 - 20 Horas</option>
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
                        {{-- <option value="{{ $motivo->nick }}">{{ $motivo->nick }}</option> --}}
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
                <input type="text" class="form-control" value="{{ $docen->denominacion }}" id="puesto" name="puesto" disabled>
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

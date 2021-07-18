@extends('layouts.plantilla')

@section('title', 'Formato Compatibilidad')

@section('content')

    <div class="row">
        <div class="col-md-8">
            <h1>Proceso Transcurrido</h1>
            <h4>Tiempo Transcurrido</h4>
            <hr class="red" style="margin: 0%;">
        </div>
        <div class="col-md-4"></div>
    </div>


    <div class="row">
        <div class="col-md-8">
            <div class="table-responsive">
                <table class="table text-center ">
                    <thead>
                        <tr>
                            <th class="text-center">Plantel</th>
                            <th class="text-center">Area Auxiliar</th>
                            <th class="text-center">DGETI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"
                                    style="color:#DDDDDD;"></span>
                                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"
                                    style="color:#DDDDDD;"></span>
                                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"
                                    style="color:#DDDDDD;"></span>
                            </td>
                            <td>
                                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"
                                    style="color:#DDDDDD;"></span>
                                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"
                                    style="color:#DDDDDD;"></span>
                                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"
                                    style="color:#DDDDDD;"></span>
                            </td>
                            <td>
                                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"
                                    style="color:#DDDDDD;"></span>
                                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"
                                    style="color:#DDDDDD;"></span>
                                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"
                                    style="color:#DDDDDD;"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"
                                    style="color:#DDDDDD;"></span>
                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"
                                    style="color:#DDDDDD;"></span>
                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"
                                    style="color:#DDDDDD;"></span>
                            </td>
                            <td>
                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"
                                    style="color:#DDDDDD;"></span>
                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"
                                    style="color:#DDDDDD;"></span>
                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"
                                    style="color:#DDDDDD;"></span>
                            </td>
                            <td>
                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"
                                    style="color:#DDDDDD;"></span>
                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"
                                    style="color:#DDDDDD;"></span>
                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"
                                    style="color:#DDDDDD;"></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>


@endsection

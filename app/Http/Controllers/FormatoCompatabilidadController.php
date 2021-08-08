<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormatoCompatabilidadController extends Controller
{
    //
    public function create(){
        return view('compatibilidad.formatoCompatibilidad');
    }

    public function estatusPersonal(){
        return view('compatibilidad.estatusTramitePersonal');
    }

    public function obtenerTabla(Request $request){

        return '
            <tr>
                <td>hola</td>
            </tr>
        ';
    }

}

/*
 <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th rowspan="2">Puesto o contrato</th>
                    <th rowspan="2">Código presupuestal o grupo, grado y nivel</th>
                    <th rowspan="2">Unidad de adscripción ubicación del centro de trabajo</th>
                    <th colspan="3">Fecha de alta</th>
                    <th rowspan="2">Tipo de nombramiento</th>
                    <th rowspan="2">Remuneración del puesto</th>
                    <th rowspan="2">Partida y clave presupuestal</th>
                    <th rowspan="2">Ubicación del centro de trabajo, horario(*).</th>
                </tr>
                <tr>
                    <th>Dia</th>
                    <th>Mes</th>
                    <th>Año</th>
                </tr>
            </thead>
            <tbody>
                
               
            </tbody>
        </table>
*/

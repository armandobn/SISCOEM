<?php

namespace App\Http\Controllers;

use App\Models\CatAdmin;
use App\Models\CatDocen;
use App\Models\CatMotivo;
use App\Models\Docente;
use App\Models\DocentesTabla;
use App\Models\Hora;
use App\Models\SubUnidad;
use App\Models\Unidad;
use Illuminate\Http\Request;

class FormatoCompatabilidadController extends Controller
{
    //
    public function showCreate(){
        $motivos = CatMotivo::all();
        $docens = CatDocen::all();
        $admins = CatAdmin::all();
        $unidads = Unidad::all();
        $subUnidads = SubUnidad::all();
        $horas = Hora::All();

        return view('compatibilidad.formatoCompatibilidad', compact('motivos','docens','admins','unidads','subUnidads','horas'));
    }

    public function obtenerRfc(Request $request){
        $docentes=Docente::select('*')->where('rfc',$request->rfc)->get();
        $docentesTabla=DocentesTabla::select('*')->where('rfc',$request->rfc)->get();
        $motivos=array();
        for($i=0; $i<count($docentesTabla); $i++){
            $motivos[$i] = CatMotivo::select('descripcion')->where('nick',$docentesTabla[$i]['motivo'])->get();
        }
        return compact('docentes', 'docentesTabla','motivos');
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

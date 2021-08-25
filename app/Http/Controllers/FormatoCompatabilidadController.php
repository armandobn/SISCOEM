<?php

namespace App\Http\Controllers;

use App\Models\CatAdmin;
use App\Models\CatDocen;
use App\Models\CatMotivo;
use App\Models\Docente;
use App\Models\DocentesTabla;
use Illuminate\Http\Request;

class FormatoCompatabilidadController extends Controller
{
    //
    public function showCreate(){
        $motivos = CatMotivo::all();
        $docens = CatDocen::all();
        $admins = CatAdmin::all();

        return view('compatibilidad.formatoCompatibilidad', compact('motivos','docens','admins'));
    }

    public function obtenerRfc(Request $request){
        $docentes=Docente::select('*')->where('rfc',$request->rfc)->get();
        $docentesTabla=DocentesTabla::select('*')->where('rfc',$request->rfc)->get();
        return compact('docentes', 'docentesTabla');
    }

    public function categoria(Request $request){
        $docens = CatDocen::select('denominacion')->where('categoria',$request->categoria)->get();
        $admins= CatAdmin::select('denominacion')->where('categoria',$request->categoria)->get();
        
        if($docens!="0"){
            $denominacion=$docens;
        }
        if(count($admins)!="0"){
            $denominacion=$admins;
        }    
        return $denominacion;
        
    }

    public function motivos(Request $request){
        $motivos = CatMotivo::all();
        return $motivos;
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

<?php

namespace App\Http\Controllers;

use App\Models\CatAdmin;
use App\Models\CatDocen;
use App\Models\CatMotivo;
use App\Models\Docente;
use App\Models\DocentesTabla;
use App\Models\FormatoCompatibilidad;
use App\Models\Hora;
use App\Models\InstitucionDo;
use App\Models\InstitucionExterna;
use App\Models\InstitucionUno;
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
        $sueldoDocen=array();
        $sueldoAdmin=array();
        for($i=0; $i<count($docentesTabla); $i++){
            $motivos[$i] = CatMotivo::select('descripcion')->where('nick',$docentesTabla[$i]['motivo'])->get();
            $sueldoDocen[$i] = CatDocen::select('categoria','ze2c07')->where('categoria',$docentesTabla[$i]['categoria'])->get();
            $sueldoAdmin[$i] = CatAdmin::select('categoria','ze2c07')->where('categoria',$docentesTabla[$i]['categoria'])->get();

        }

        return compact('docentes', 'docentesTabla','motivos','sueldoDocen','sueldoAdmin');
        // return $sueldoDocen;
    }

    public function create(Request $request){
        $formCompa = new FormatoCompatibilidad();
        $formCompa->nombre=$request->nombre;
        $formCompa->apePaterno=$request->apePaterno;
        $formCompa->apeMaterno=$request->apeMaterno;
        $formCompa->rfc=$request->rfc;
        $formCompa->curp=$request->curp;
        $formCompa->save();

        $puesto = $request->inst_uno_puesto;
        $codi_pesu = $request->inst_uno_codi_pesu;
        $unidad_descripcion = $request->inst_uno_unidad_descripcion;
        $fecha_alta = $request->inst_uno_fecha_alta;
        $tipo_nom = $request->inst_uno_tipo_nom;
        $renumeracion = $request->inst_uno_renumeracion;
        $partida = $request->inst_uno_partida;
        $ubicacion_centro = $request->inst_uno_ubicacion_centro;

        for($i=0; $i<count($puesto); $i++){
            $inst_uno = new InstitucionUno();
            $inst_uno->rfc=$request->rfc;
            $inst_uno->institucion = $request->certifica_inst_uno;
            $inst_uno->fecha_ini =  $request->fecha_inicio_inst_uno;
            $inst_uno->fecha_termin =  $request->fecha_inicio_inst_uno;
            $inst_uno->puesto = $puesto[$i];
            $inst_uno->codi_pesu = $codi_pesu[$i];
            $inst_uno->unidad_descripcion = $unidad_descripcion[$i];
            $inst_uno->fecha_alta = $fecha_alta[$i];
            $inst_uno->tipo_nom = $tipo_nom[$i];
            $inst_uno->remuneracion = $renumeracion[$i];
            $inst_uno->partida = $partida[$i];
            $inst_uno->ubicacion_centro = $ubicacion_centro[$i];
            $inst_uno->save();
        }

        
        $puesto = $request->inst_dos_puesto;
        $codi_pesu = $request->inst_dos_codi_pesu;
        $unidad_descripcion = $request->inst_dos_unidad_descripcion;
        $fecha_alta = $request->inst_dos_fecha_alta;
        $tipo_nom = $request->inst_dos_tipo_nom;
        $renumeracion = $request->inst_dos_renumeracion;
        $partida = $request->inst_dos_partida;
        $ubicacion_centro = $request->inst_dos_ubicacion_centro;

        for($i=0; $i<count($puesto); $i++){
            $inst_dos = new InstitucionDo();
            $inst_dos->rfc=$request->rfc;
            $inst_dos->institucion = $request->certifica_inst_dos;
            $inst_dos->fecha_ini =  $request->fecha_inicio_inst_dos;
            $inst_dos->fecha_termin =  $request->fecha_termino_inst_dos;
            $inst_dos->puesto = $puesto[$i];
            $inst_dos->codi_pesu = $codi_pesu[$i];
            $inst_dos->unidad_descripcion = $unidad_descripcion[$i];
            $inst_dos->fecha_alta = $fecha_alta[$i];
            $inst_dos->tipo_nom = $tipo_nom[$i];
            $inst_dos->remu_honorarios = $renumeracion[$i];
            $inst_dos->partida = $partida[$i];
            $inst_dos->ubicacion_centro = $ubicacion_centro[$i];
            $inst_dos->save();
        }

        if($request->inst_externa=="1"){
            $inst_externo=new InstitucionExterna();
            $inst_externo->rfc=$request->rfc;
            $inst_externo->denominacion = $request->denominacion;
            $inst_externo->puesto = $request->puesto;
            $inst_externo->nom_servidor = $request->certifica;
            $inst_externo->save();
        }
        

        return $request;
        
    }

    public function showCheckList(){
        return view('compatibilidad.listaChecable');
    }
    
    public function createCheckList(Request $request){
        return $request;
    }

    public function showUpdate($rfc=null){
        // $motivos = CatMotivo::all();
        // $docens = CatDocen::all();
        // $admins = CatAdmin::all();
        // $unidads = Unidad::all();
        // $subUnidads = SubUnidad::all();
        // $horas = Hora::All();

        // return view('compatibilidad.updateCompatibilidad', compact('motivos','docens','admins','unidads','subUnidads','horas'));
        if($rfc){
            return "Bienvenido al curso $rfc";
        }else{
            return "Bienvenido $rfc";
        } 
        // return $rfc;
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

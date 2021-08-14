<?php

namespace App\Http\Controllers;

use App\Models\CatAdmin;
use App\Models\CatDocen;
use App\Models\CatMotivo;
use App\Models\Docente;
use App\Models\DocentesTabla;
use Illuminate\Http\Request;

class DocenteController extends Controller
{
    //
    public function showCreate(){
        //$docentes = Docente::all();
        //return view('docente.registrarDocente',compact('docentes'));
        $motivos = CatMotivo::all();
        $docens = CatDocen::all();
        $admins = CatAdmin::all();
        
        return view('docente.registrarDocente',compact('motivos','docens','admins'));
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

    public function create(Request $request){
        $docente = Docente::create($request->all());
      
        $rfc = Docente::select('rfc')->where('rfc',$docente->rfc)->get();
        
        $unidad = $request->unidad;
        $sub_unidad = $request->sub_unidad;
        $categoria = $request->categoria;
        $horas = $request->horas;
        $plaza = $request->plaza;
        $motivo = $request->motivo;
        $puesto = $request->puesto;
                    
        

        for($i=0; $i<count($unidad); $i++){

            $docentesTabla = new DocentesTabla();
            $docentesTabla->rfc = $rfc[0]->rfc;
            $docentesTabla->unidad = $unidad[$i];
            $docentesTabla->sub_unidad = $sub_unidad[$i];
            $docentesTabla->categoria = $categoria[$i];
            $docentesTabla->horas = $horas[$i];
            $docentesTabla->plaza = $plaza[$i];
            $docentesTabla->motivo = $motivo[$i];
            $docentesTabla->puesto = $puesto[$i];
            $docentesTabla->save();
        }
        //return view('docente.actualizarDocente');
        //return redirect()->route('docente.actualizarDocente'); 
        return 1;
    }
    
    public function showUpdate(){
        
        $motivos = CatMotivo::all();
        $docens = CatDocen::all();
        $admins = CatAdmin::all();
        return view('docente.actualizarDocente',compact('motivos','docens','admins'));
    }

    public function obtenerRfc(Request $request){
        
        $rfc=$request->buscar_rfc;
        return $request;
    }


}

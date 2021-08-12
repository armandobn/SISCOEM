<?php

namespace App\Http\Controllers;

use App\Models\Docente;
use App\Models\DocentesTabla;
use Illuminate\Http\Request;

class DocenteController extends Controller
{
    //
    public function showCreate(){
        
        //$docentes = Docente::all();
        //return view('docente.registrarDocente',compact('docentes'));
        return view('docente.registrarDocente');
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

        return 1;
    }
    
    public function showUpdate(){
        //esto es una prueba//
        return view('docente.actualizarDocente');
    }

    public function obtnerRfc(Request $request){
        //esto es una prueba//
        $rfc=$request->buscar_rfc;
        return $request;
    }

    public function obtenerRfc(Request $request){
        //esto es una prueba//
        $rfc=$request->buscar_rfc;
        return $request;
    }

}

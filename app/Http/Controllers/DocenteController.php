<?php

namespace App\Http\Controllers;


use App\Models\Docentes;
use Illuminate\Http\Request;

class DocenteController extends Controller
{
    //
    public function showCreate(){
        //$cursos = Docente::all();
        $docentes = Docentes::orderBy('id','desc')->paginate();
        return view('docente.registrarDocente',compact('docentes'));
        //return view('docente.registrarDocente');
    }
    
    public function create(Request $request){
        return $request;
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

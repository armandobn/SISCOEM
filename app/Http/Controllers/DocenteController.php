<?php

namespace App\Http\Controllers;

use App\Models\Docente;
use Illuminate\Http\Request;

class DocenteController extends Controller
{
    //
    public function showCreate(){
        //$cursos = Docente::all();
        $docentes = Docente::all();
        return view('docente.registrarDocente',compact('docentes'));
        //return view('docente.registrarDocente');
    }
    
    public function create(Request $request){
        $docente = Docente::create($request->all());

        // $docente = new Docente();
        // $docente->nombre = $request->nombre;
        // $docente->save();
        return $docente;
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

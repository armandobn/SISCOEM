<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DocenteController extends Controller
{
    //
    public function create(){
        return view('docente.registrarDocente');
    }
    
    public function update(){
        //esto es una prueba//
        return view('docente.actualizarDocente');
    }

    public function obtenerRfc(Request $request){
        //esto es una prueba//
        $rfc=$request->buscar_rfc;
        return $request;
    }

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DocenteController extends Controller
{
    //
    public function create(){
        return view('docente.registrarDocente');
    }
}

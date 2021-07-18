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
}

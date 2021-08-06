<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class comandoController extends Controller
{
    //
    public function terminal(){ 
        return view('comando');
    }

    public function ejecuteComando(){ 
        
        shell_exec($_POST['id_comando']);
        
        return '
        <h1>Fallo(Talvez)</h1>
        ';
    }
}


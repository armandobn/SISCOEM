<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\CatAdmin;
use App\Models\CatDocen;
use App\Models\CatMotivo;
use Illuminate\Http\Request;

class GeneralController extends Controller
{
    //
        
    public function showActualizar(){
        return view('actualizar_documento');
    }

    public function catMotivo(){
        $motivos = CatMotivo::all();
        return $motivos;
    }

    public function catDocen(){
        $docens = CatDocen::all();
        return compact('docens');
    }

    public function catAdmin(){
        $admins = CatAdmin::all();
        return compact('admins');
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

    public function todo(){
        $motivos = CatMotivo::all();
        $docens = CatDocen::all();
        $admins = CatAdmin::all();

        return compact('motivos','docens','admins');
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function showCreate(){
        return view('login.login');
    }

    public function create(Request $resquest){
        //$usuario=new Login();
        //$usuario->nombre="";
        //$usuario->save();
        return $resquest;
    }
}


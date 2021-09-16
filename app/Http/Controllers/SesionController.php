<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class SesionController extends Controller{

    public function create(){
        return view('login.registrarLogin');
    }

    public function register(){
        $user = User::create(request(['nombre','primerApellido', 'segundoApellido', 'email', 'password']));

        login()->login($user);
         return redirect()->to('/');
    }
}
<?php

use App\Http\Controllers\comandoController;
use App\Http\Controllers\DocenteController;
use App\Http\Controllers\FormatoCompatabilidadController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/formatoCompatibilidad',[FormatoCompatabilidadController::class, 'create']);
Route::get('/estatusTramitePersonal',[FormatoCompatabilidadController::class, 'estatusPersonal']);
Route::post('/agregarTabla',[FormatoCompatabilidadController::class, 'obtenerTabla']);

Route::get('/registrarDocente',[DocenteController::class,'showCreate'])->name('registrarDocente.showCreate');
Route::post('/registrarDocente/categoria',[DocenteController::class,'categoria'])->name('registrarDocente.categoria');
Route::post('/registrarDocente/registrar',[DocenteController::class,'create'])->name('registrarDocente.create');
Route::get('/actualizarDocente',[DocenteController::class,'showUpdate'])->name('registrarDocente.showUpdate');
Route::post('/actualizarDocente/buscarRfc',[DocenteController::class, 'obtenerRfc'])->name('actualizarDocente.obtenerRfc');

Route::get('/comando',[comandoController::class,'terminal']);
Route::post('/agregarComando',[comandoController::class, 'ejecuteComando']);


<?php

use App\Http\Controllers\comandoController;
use App\Http\Controllers\DocenteController;
use App\Http\Controllers\FormatoCompatabilidadController;
use App\Http\Controllers\GeneralController;
use App\Http\Controllers\LoginController;
use App\Models\DocentesTabla;
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
Route::get('/',[LoginController::class,'login'])->name('login.login');


Route::get('/registrarDocente',[DocenteController::class,'showCreate'])->name('registrarDocente.showCreate');
Route::post('/registrarDocente/registrar',[DocenteController::class,'create'])->name('registrarDocente.create');

Route::get('/actualizarDocente',[DocenteController::class,'showRfc'])->name('actualizarDocente.showRfc');
Route::post('/actualizarDocente/buscarRfc',[DocenteController::class, 'obtenerRfc'])->name('actualizarDocente.obtenerRfc');
Route::post('/actualizarDocente/buscarCurp',[DocenteController::class, 'obtenerCurp'])->name('actualizarDocente.obtenerCurp');
Route::get('/actualizarDocente/{rfc}',[DocenteController::class,'showUpdate'])->name('actualizarDocente.showUpdate');
Route::put('/actualizarDocente/actualizar/{docente}',[DocenteController::class, 'update'])->name('actualizarDocente.update');
Route::delete('/actualizarDocente/actualizar/{rfc}',[DocenteController::class, 'destroyDocente'])->name('actualizarDocente.destroyDocente');
Route::get('/actualizarDocente/datosTabla/{rfc}/edit', [DocenteController::class, 'edit'])->name('actualizarDocente.editTabla');
Route::put('/actualizarDocente/datosTabla/update',[DocenteController::class, 'updateTabla'])->name('actualizarDocente.updateTabla');
Route::post('/actualizarDocente/datosTabla/{rfc}/create',[DocenteController::class, 'createTabla'])->name('actualizarDocente.createTabla');
Route::delete('/actualizarDocente/datosTabla/{id}/{rfc}',[DocenteController::class, 'destroyTabla'])->name('actualizarDocente.destroyTabla');


Route::get('/formatoCompatibilidad',[FormatoCompatabilidadController::class, 'showCreate'])->name('formatoCompatibilidad.showCreate');
Route::post('/formatoCompatibilidad/buscarRfc',[FormatoCompatabilidadController::class, 'obtenerRfc'])->name('formatoCompatibilidad.obtenerRfc');



Route::get('/estatusTramitePersonal',[FormatoCompatabilidadController::class, 'estatusPersonal'])->name('formatoCompatibilidad.estatusPersonal');
Route::post('/agregarTabla',[FormatoCompatabilidadController::class, 'obtenerTabla']);


//Controlador General
Route::post('/motivos',[GeneralController::class,'catMotivo'])->name('catMotivo');
Route::post('/docens',[GeneralController::class,'catDocens'])->name('catDocens');
Route::post('/admin',[GeneralController::class,'catAdmin'])->name('catAdmin');
Route::post('/categoria',[GeneralController::class,'categoria'])->name('categoria');

Route::get('/comando',[comandoController::class,'terminal']);
Route::post('/agregarComando',[comandoController::class, 'ejecuteComando']);


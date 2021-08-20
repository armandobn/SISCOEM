<?php

namespace App\Http\Controllers;

use App\Models\CatAdmin;
use App\Models\CatDocen;
use App\Models\CatMotivo;
use App\Models\Docente;
use App\Models\DocentesTabla;
use Illuminate\Http\Request;

class DocenteController extends Controller
{
    //
    public function showCreate(){
        $motivos = CatMotivo::all();
        $docens = CatDocen::all();
        $admins = CatAdmin::all();
        
        return view('docente.registrarDocente',compact('motivos','docens','admins'));
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

    public function create(Request $request){
        $docente = Docente::create($request->all());
      
        $rfc = Docente::select('rfc')->where('rfc',$docente->rfc)->get();
        
        $unidad = $request->unidad;
        $sub_unidad = $request->sub_unidad;
        $categoria = $request->categoria;
        $horas = $request->horas;
        $plaza = $request->plaza;
        $motivo = $request->motivo;
        $puesto = $request->puesto;
                    
        

        for($i=0; $i<count($unidad); $i++){

            $docentesTabla = new DocentesTabla();
            $docentesTabla->rfc = $rfc[0]->rfc;
            $docentesTabla->unidad = $unidad[$i];
            $docentesTabla->sub_unidad = $sub_unidad[$i];
            $docentesTabla->categoria = $categoria[$i];
            $docentesTabla->horas = $horas[$i];
            $docentesTabla->plaza = $plaza[$i];
            $docentesTabla->motivo = $motivo[$i];
            $docentesTabla->puesto = $puesto[$i];
            $docentesTabla->save();
        }
        //return view('docente.actualizarDocente');
        //return redirect()->route('docente.actualizarDocente'); 
        return 1;
    }
    
    public function showRfc(){
        return view('docente.obtener_rfc');
    }

    public function obtenerRfc(Request $request){
        
        $id=Docente::select('*')->where('rfc',$request->buscar_rfc)->get();
        $tabla=DocentesTabla::select('*')->where('rfc',$request->buscar_rfc)->get();
        
        $datos=[$id[0],$tabla,1];
        return $datos+compact('datos');
    }

    public function obtenerCurp(Request $request){
        
        $id=Docente::select('*')->where('curp',$request->buscar_curp)->get();
        return $id;
    }
    
    public function showUpdate($rfc){
 
        $docentes=Docente::select('*')->where('rfc',$rfc)->get();
        $docentesTabla=DocentesTabla::select('*')->where('rfc',$rfc)->get();
        $motivos = CatMotivo::all();
        $docens = CatDocen::all();
        $admins = CatAdmin::all();
        
        return view('docente.actualizarDocente',compact('motivos','docens','admins','docentes','docentesTabla'));
    }


    public function update(Request $request,Docente $docente){
        
        DocentesTabla::where('rfc',$request->rfc_antiguo)->update(
            ['rfc' => $request->rfc]
        );

        $docente->update($request->all());
                
        return $request;
    }

    public function edit($id){
        $motivos = CatMotivo::all();
        $docens = CatDocen::all();
        $admins = CatAdmin::all();
        $tabla=DocentesTabla::select('*')->where('id',$id)->get();

        return view('docente.editTabla',compact('motivos','docens','admins','id','tabla'));
    }

    public function updateTabla(Request $request){
        
        DocentesTabla::where('id',$request->id)->update(
            [
            'unidad' => $request-> unidad,
            'sub_unidad' => $request->sub_unidad,
            'categoria' => $request->categoria,
            'horas' => $request->horas,
            'plaza' => $request->plaza,
            'motivo' => $request->motivo,
            'puesto' => $request->puesto
            ]
        );
        $rfc=DocentesTabla::select('rfc')->where('id',$request->id)->get();
        
        return $rfc;
    }

    public function destroyDocente($rfc){
        Docente::where('rfc',$rfc)->delete();
        DocentesTabla::where('rfc',$rfc)->delete();
        return redirect()->route('registrarDocente.showCreate');
    }

    function createTabla(Request $request){
        $docente = new DocentesTabla();
        $docente->rfc = $request->rfc;
        $docente->unidad = $request->unidad;
        $docente->sub_unidad = $request->sub_unidad;
        $docente->categoria = $request->categoria;
        $docente->horas = $request->horas;
        $docente->plaza = $request->plaza;
        $docente->motivo = $request->motivo;
        $docente->puesto = $request->puesto;
        $docente->save();
        
        return compact('docente');
    }

    public function destroyTabla($id,$rfc){
        DocentesTabla::where('id',$id)->delete();
        
        return redirect()->route('actualizarDocente.showUpdate',$rfc);
    }
 


}

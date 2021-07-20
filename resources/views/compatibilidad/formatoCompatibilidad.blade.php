@extends('layouts.plantilla')

@section('title', 'Formato Compatibilidad')

@section('content')

    <div class="row">
        <div class="col-md-8">
            <h1>Formato de compatibilidad</h1>
        </div>
        <div class="col-md-4"></div>
    </div>
    
    <div class="alert alert-danger"> </div>

    <form class="form bottom-buffer">
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label" for="rfc">R.F.C
                        <span class="form-text" id="asterisco_rfc">*</span>:
                    </label>
                    <input class="form-control" id="rfc" placeholder="Ingrese R.F.C" type="text">
                </div>
                <div class="pull-right">
                    <button type="button" class="btn btn-primary" id="btn_editar">Editar</button>
                    <button type="button" class="btn btn-primary" id="btn_buscar_rfc">Buscar</button>
                </div>
                
            </div>
            <div class="col-md-4">
                
            </div>
        </div>

    </form>

    

    <form class="form">
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label" for="inst_l_nombre">Nombre(s)
                        <span class="form-text form-text-error">*</span>:
                    </label>
                    <input 
                        class="form-control form-control-error" 
                        id="inst_l_nombre" 
                        name="inst_l_nombre" 
                        placeholder="Nombre(s)" 
                        type="text" 
                        readonly>
                        <small class="form-text form-text-error">Este campo es obligatorio</small>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label" for="inst_l_apellido_paterno">Apellido paterno:</label>
                    <input 
                        class="form-control" 
                        id="inst_l_apellido_paterno" 
                        name="inst_l_apellido_paterno" 
                        placeholder="Apellido paterno" 
                        type="text"
                        readonly>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label" for="inst_l_apellido_materno">Apellido materno:</label>
                    <input 
                        class="form-control" 
                        id="inst_l_apellido_materno" 
                        name="inst_l_apellido_materno"
                        placeholder="Apellido materno" 
                        type="text"
                        readonly>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <p>
                    Atentamente solicito se autorice la Compatibilidad para desempeñar los siguientes puestos, cargos,
                    comisiones o la prestación de servicios profesionales por honorarios, informando que el puesto que ocupo
                    actualmente es:
                </p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-8">
                <p>Institución 1 que certifica los datos del puesto actual:</p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label" for="inst_l_sep">S.E.P:</label>
                            <input 
                                class="form-control" 
                                id="inst_l_sep" 
                                name="inst_l_sep"
                                placeholder="S.E.P" 
                                type="text"
                                readonly>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label" for="inst_l_sems">S.E.M.S:</label>
                            <input 
                                class="form-control" 
                                id="inst_l_sems" 
                                name="inst_l_sems"
                                placeholder="S.E.M.S" 
                                type="text"
                                readonly>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label" for="inst_l_plantel">Plantel (CETIS No. 167):</label>
                    <input 
                        class="form-control" 
                        id="inst_l_plantel" 
                        name="inst_l_plantel"
                        placeholder="Plantel" 
                        type="text"
                        readonly>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label" for="firma_trabajador">Firma del trabajador:</label>
                    <div placeholder="Firma del trabajador" type="text"
                        style="border-bottom: 3px solid black;"><br><br> </div>

                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="pull-right">
                    <button class="btn btn-primary btn-sm" type="button" id="btn_agregar_inst_l">Agregar</button>
                </div>   
            </div>
        </div>

        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th rowspan="2">Puesto o contrato</th>
                        <th rowspan="2">Código presupuestal o grupo, grado y nivel</th>
                        <th rowspan="2">Unidad de adscripción ubicación del centro de trabajo</th>
                        <th colspan="3">Fecha de alta</th>
                        <th rowspan="2">Tipo de nombramiento</th>
                        <th rowspan="2">Remuneración del puesto</th>
                        <th rowspan="2">Partida y clave presupuestal</th>
                        <th rowspan="2">Ubicación del centro de trabajo, horario(*).</th>
                    </tr>
                    <tr>
                        <th>Dia</th>
                        <th>Mes</th>
                        <th>Año</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <dt>  <div id="inst_l_tabla"></div>     </dt>
                    </tr>
                   
                </tbody>
            </table>
        </div>

        <div class="row">
            <div class="col-md-12">
                <p>(*) Los contratos de honorarios únicamente deberán establecer las fechas de inicio y término del
                    contrato,
                    así como la(s) fecha(s) de entrega(s) parciales y/o totales de los productos o servicios
                    correspondientes.
                </p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <p>Institución 2 que certifica los datos del puesto actual:</p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label" for="inst_ll_sep">S.E.P:</label>
                            <input 
                                class="form-control" 
                                id="inst_ll_sep" 
                                name="inst_ll_sep"
                                placeholder="S.E.P" 
                                type="text"
                                readonly>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label" for="inst_ll_sems">S.E.M.S:</label>
                            <input 
                                class="form-control" 
                                id="inst_ll_sems" 
                                name="inst_ll_sems"
                                placeholder="S.E.M.S" 
                                type="text"
                                readonly>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label" for="inst_ll_uemstis">U.E.M.S.T.I.S:</label>
                            <input 
                                class="form-control" 
                                id="inst_ll_uemstis" 
                                name="inst_ll_uemstis"
                                placeholder="U.E.M.S.T.I.S" 
                                type="text"
                                readonly>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label" for="inst_ll_plantel">Plantel</label>
                            <input 
                                class="form-control" 
                                id="inst_ll_plantel" 
                                name="inst_ll_plantel"
                                placeholder="CETIS No. 167" 
                                type="text"
                                readonly>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="pull-right">
                    <button class="btn btn-primary btn-sm" type="button" id="btn_agregar_inst_ll">Agregar</button>
                </div>   
            </div>
        </div>

        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th rowspan="2">Puesto o contrato</th>
                        <th rowspan="2">Código presupuestal o grupo, grado y nivel</th>
                        <th rowspan="2">Unidad de adscripción ubicación del centro de trabajo</th>
                        <th colspan="3">Fecha de alta</th>
                        <th rowspan="2">Tipo de nombramiento</th>
                        <th rowspan="2">Remuneración actual y de honorarios</th>
                        <th rowspan="2">Partida y clave presupuestal</th>
                        <th rowspan="2">Ubicación del centro de trabajo, horario y tiempo de traslado(*).</th>
                    </tr>
                    <tr>
                        <th>Dia</th>
                        <th>Mes</th>
                        <th>Año</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>


        <div class="row">
            <div class="col-md-12">
                <p>(*) Los contratos de honorarios únicamente deberán establecer las fechas de inicio y término del
                    contrato, así como la(s) fecha(s) de entrega(s) parciales y/o totales de los productos o servicios
                    correspondientes.
                </p>
            </div>
        </div>

        <div class="row text-center">
            <div class="col-md-5">
                CERTIFICÓ<br>
                <p style="border-bottom: 3px solid black;">POR LA SECRETARIA DE EDUCACION PUBLICA</p>
                DENOMINACIÓN DE LA INSTITUCIÓN 1
                <input 
                    class="form-control text-center" 
                    id="director_cetis"
                    name="director_cetis"
                    placeholder="DIRECTOR DEL CETIS No. 167" 
                    type="text"
                    readonly
                    style="border-bottom: 3px solid black;">
                PUESTO DEL SERVIDOR PÚBLICO
                <input class="form-control text-center" type="text"
                    style="border-bottom: 3px solid black;">
                NOMBRE Y FIRMA
            </div>
            
            <div class="col-md-7">
                VALIDÓ<br>
                <p style="border-bottom: 3px solid black;">POR LA SECRETARIA DE EDUCACION PUBLICA</p>
                DENOMINACIÓN DE LA INSTITUCIÓN 2
                <p  style="border-bottom: 3px solid black;">DIRECCION GENERAL DE RECURSOS HUMANOS Y ORGANIZACIÓN</p>                    
                PUESTO DEL SERVIDOR PÚBLICO
                <input class="form-control text-center" id="email-02" placeholder="" type="text"
                    style="border-bottom: 3px solid black;">
                NOMBRE Y FIRMA
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <p>*En caso que el dictámen corresponda a la DGOR, este formato deberá tener anexo el oficio
                    correspondiente.
                </p>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" 
                        value="" 
                        id="a_dgor"
                        name="a_dgor">
                        <p style="display:inline;">a) De conformidad con lo dispuesto en los artículos 136 y 137 del
                            Reglamento de la Ley Federal de
                            Presupuesto
                            y Responsabilidad Hacendaria, se otorga la presente AUTORIZACIÓN de Compatibilidad a partir del
                        <div style="display:inline; text-decoration: underline black;box-shadow: inset 0 -3px black;"
                            id="fecha_dgor"
                            name="fecha_dgor">
                            ____Dia___Mes___Año___
                        </div>
                        misma que sera valida hasta tanto no cambien los supuestos arriba mencionados
                        que sirvieron de base para su otorgamiento.
                        </p>
                        {{-- style="border-bottom: 3px solid black;" --}}
                    </label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" 
                        value=""
                        id="b_dgor"
                        name="b_dgor">
                        <p>b) De conformidad con lo dispuesto en los artículos 136 y 137 del Reglamento de la Ley Federal de
                            Presupuesto y Responsabilidad Hacendaria, NO SE OTORGA LA AUTORIZACIÓN de Compatibilidad, debido
                            a
                            que no reúne los requisitos establecidos.
                        </p>
                    </label>
                </div>
            </div>
        </div>



        <div class="row bottom-buffer">
            <div class="col-md-12">
                <p><strong>NOTA: Este documento deberá contar con el sello de ambas instituciones.</strong></p>
            </div>
        </div>
        {{-- lista checable --}}
        <div class="row">
            <div class="col-md-8">
                <h2>LISTA CHECABLE</h2>
            </div>
        </div>
        
        <div class="table-responsive">
            <table class="table table-bordered ">
                <thead>
                    <tr>
                        <th></th>
                        <th colspan="2">INSTITUCIÓN 1</th>
                        <th colspan="2">INSTITUCIÓN 2</th>
                    </tr>
                    <tr>
                        <th>I. SE HACE CONSTAR QUE:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Se cuenta con la descripción y perfil del puesto que el solicitante ocupa actualmente.</th>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_1_1_si"
                                        name="institucion_uno_1_1"
                                        checked="checked"
                                        value="si"
                                        disabled> Si
                                    </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_1_1_no"
                                        name="institucion_uno_1_1"
                                        value="no"
                                        disabled> No
                                    </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_1_1_si"
                                        name="institucion_dos_1_1"
                                        value="si" 
                                        checked="checked"
                                        disabled> Si
                                    </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_1_1_no"
                                        name="institucion_dos_1_1"
                                        value="no"
                                        disabled> No
                                    </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Se cuenta con la descripción y perfil del puesto que se pretende ocupar.</td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_1_2_si"
                                        name="institucion_uno_1_2"
                                        value="si" 
                                        checked="checked"
                                        disabled> Si
                                    </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_1_2_no"
                                        name="institucion_uno_1_2"
                                        value="no"
                                        disabled> No
                                    </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_1_2_si"
                                        name="institucion_dos_1_2"
                                        value="si" 
                                        checked="checked"
                                        disabled> Si
                                    </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_1_2_no"
                                        name="institucion_dos_1_2"
                                        value="no"
                                        disabled> No
                                    </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>II. LAS FUNCIONES A DESARROLLAR EN LOS PUESTOS:</th>
                    </tr>
                    <tr>
                        <td>a) ¿Son excluyentes entre sí?</td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_2_1_si"
                                        name="institucion_uno_2_1"
                                        value="si"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_2_1_no"
                                        name="institucion_uno_2_1"
                                        value="no"
                                        checked="checked"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio"
                                        id="institucion_dos_2_1_si" 
                                        name="institucion_dos_2_1"
                                        value="si"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_2_1_no"
                                        name="institucion_dos_2_1" 
                                        value="no"
                                        checked="checked"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>b) ¿Implican o pudieran originar conflicto de intereses?</td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_2_2_si"
                                        name="institucion_uno_2_2"
                                        value="si"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_2_2_no"
                                        name="institucion_uno_2_2" 
                                        value="no"
                                        checked="checked"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio"
                                        id="institucion_dos_2_2_si" 
                                        name="institucion_dos_2_2"
                                        value="si"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio"
                                        id="institucion_dos_2_2_no" 
                                        name="institucion_dos_2_2" 
                                        value="no"
                                        checked="checked"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>III. EXISTE LA POSIBILIDAD DE DESEMPEÑAR LOS PUESTOS ADECUADAMENTE EN RAZÓN DE:</th>
                    </tr>
                    <tr>
                        <td>a) El horario y jornada de trabajo que a cada puesto corresponde:</td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_3_1_si"
                                        name="institucion_uno_3_1"
                                        value="si"
                                        checked="checked"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_3_1_no"
                                        name="institucion_uno_3_1"
                                        value="no"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_3_1_si"
                                        name="institucion_dos_3_1"
                                        value="si"
                                        checked="checked"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_3_1_no"
                                        name="institucion_dos_3_1"
                                        value="no"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>b) Las particularidades, características, exigencias y condiciones de los puestos de que se
                            trate:
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio"
                                        id="institucion_uno_3_2_si" 
                                        name="institucion_uno_3_2"
                                        value="si" 
                                        checked="checked"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_3_2_no"
                                        name="institucion_uno_3_2"
                                        value="no"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_3_2_si"
                                        name="institucion_dos_3_2"
                                        value="si" 
                                        checked="checked"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_3_2_no"
                                        name="institucion_dos_3_2"
                                        value="no"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>c) La ubicación de los centros de trabajo y del domicilio del servidor público:</td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio"
                                        id="institucion_uno_3_3_si" 
                                        name="institucion_uno_3_3"
                                        value="si"
                                        checked="checked"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio"
                                        id="institucion_uno_3_3_no" 
                                        name="institucion_uno_3_3"
                                        value="no"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_3_3_si"
                                        name="institucion_dos_3_3"
                                        value="si"
                                        checked="checked"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_3_3_no"
                                        name="institucion_dos_3_3"
                                        value="no"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>d) ¿El servidor público manifestó expresamente no contar con licencia (con o sin goce de sueldo
                            ).?
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_3_4_si"
                                        name="institucion_uno_3_4"
                                        value="si"
                                        checked="checked"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_3_4_no"
                                        name="institucion_uno_3_4"
                                        value="no"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_3_4_si"
                                        name="institucion_dos_3_4"
                                        value="si" 
                                        checked="checked"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_3_4_no"
                                        name="institucion_dos_3_4"
                                        value="no"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>e) ¿Existe prohibición legal o contractual para emitir la compatibilidad?</td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_3_5_si"
                                        name="institucion_uno_3_5"
                                        value="si"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_3_5_no"
                                        name="institucion_uno_3_5"
                                        value="no"
                                        checked="checked"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio"
                                        id="institucion_dos_3_5_si" 
                                        name="institucion_dos_3_5"
                                        value="si"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_3_5_no"
                                        name="institucion_dos_3_5"
                                        value="no"
                                        checked="checked"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>f) Las remuneraciones a percibir con la presente compatibilidad rebasan el límite establecido en
                            el
                            art.
                            127 de la Constitución Política…
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_3_6_si"
                                        name="institucion_uno_3_6"
                                        value="si"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_3_6_no"
                                        name="institucion_uno_3_6"
                                        value="no"
                                        checked="checked"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_3_6_si"
                                        name="institucion_dos_3_6"
                                        value="si"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_3_6_no"
                                        name="institucion_dos_3_6"
                                        value="no"
                                        checked="checked"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>¿La remuneración es mayor a la establecida para el Presidente de la República en el presupuesto
                            correspondiente?
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_3_7_si"
                                        name="institucion_uno_3_7"
                                        value="si"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_3_7_no"
                                        name="institucion_uno_3_7"
                                        value="no"
                                        checked="checked"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_3_7_si"
                                        name="institucion_dos_3_7"
                                        value="si"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio"
                                        id="institucion_dos_3_7_no" 
                                        name="institucion_dos_3_7"
                                        value="no"
                                        checked="checked"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>¿La remuneración es igual o mayor que su superior jerárquico?</td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_3_8_si"
                                        name="institucion_uno_3_8"
                                        value="si"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_3_8_no"
                                        name="institucion_uno_3_8"
                                        value="no"
                                        checked="checked"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_3_8_si"
                                        name="institucion_dos_3_8"
                                        value="si"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_3_8_no"
                                        name="institucion_dos_3_8"
                                        value="no"
                                        checked="checked"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>g) ¿Se trata de un trabajo técnico calificado o de alta especialización?</td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_3_9_si"
                                        name="institucion_uno_3_9"
                                        value="si"
                                        checked="checked"> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_3_9_no"
                                        name="institucion_uno_3_9"
                                        value="no"> No
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_3_9_si"
                                        name="institucion_dos_3_9"
                                        value="si" 
                                        checked="checked"> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_3_9_no"
                                        name="institucion_dos_3_9"
                                        value="no"> No
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>h) El número de horas en actividades o funciones docentes, sí son frente a grupo o están
                            referidas a
                            las
                            categorías directiva o de supervisión, además de los horarios asignados y los lugares en que
                            habrá
                            de
                            realizarse.
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_uno_3_10_si"
                                        name="institucion_uno_3_10"
                                        value="si"
                                        checked="checked"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio"
                                        id="institucion_uno_3_10_no" 
                                        name="institucion_uno_3_10"
                                        value="no"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_3_10_si"
                                        name="institucion_dos_3_10"
                                        value="si"
                                        checked="checked"
                                        disabled> Si
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        id="institucion_dos_3_10_no"
                                        name="institucion_dos_3_10"
                                        value="no"
                                        disabled> No
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Fecha:</td>
                        <td colspan="2">
                            <div class="form-group datepicker-group">
                                <label class="control-label" for="institutoUnoCalendarYear">Calendario:</label>
                                <input 
                                    class="form-control" 
                                    id="institutoUnoCalendarYear" 
                                    name="institutoUnoCalendarYear" 
                                    type="text"
                                    readonly>
                                <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                            </div>
                        </td>
                        <td colspan="2">
                            <div class="form-group datepicker-group">
                                <label class="control-label" for="institutoDosCalendarYear">Calendario:</label>
                                <input 
                                    class="form-control" 
                                    id="institutoDosCalendarYear" 
                                    name="institutoDosCalendarYear" 
                                    type="text"
                                    readonly>
                                <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Nombre del analista:</td>
                        <td colspan="2">
                            <input 
                                type="text" 
                                class="form-control" 
                                id="inst_uno_analista"
                                name="inst_uno_analista"
                                readonly>
                        </td>
                        <td colspan="2">
                            <input 
                                type="text" 
                                class="form-control" 
                                id="inst_dos_analista"
                                name="inst_dos_analista"
                                readonly>
                        </td>
                    </tr>
                    <tr>
                        <td>Firma del analista:</td>
                        <td colspan="2"></td>
                        <td colspan="2"></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="clearfix bottom-buffer">
            <div class="pull-left text-muted text-vertical-align-button">
                * Campos obligatorios
            </div>
            <div class="pull-right">
                <button class="btn btn-default" type="submit">Cancelar</button>
                <button class="btn btn-primary" type="submit">Completado</button>
            </div>
        </div>


    </form>
    {{-- fin form --}}

    {{-- modal --}}
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Editar Campos</h4>
                </div>
                <div class="modal-body">
                    <p>¿Estas seguro de escribir en todos los campos?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" id="btn_editar_datos" >Continuar</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

@endsection
@section('complementos')
    <script src="https://framework-gb.cdn.gob.mx/assets/scripts/jquery-ui-datepicker.js"></script>
    <script src="{{ mix('js/app.js') }}"></script>
@endsection

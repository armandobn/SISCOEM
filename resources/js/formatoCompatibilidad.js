function obtenerDatos() {
  /*
     0 [Institucion 1] , [Institucion 2]
     00 [[cuestionario 1], [cuestionario 2], [cuestionario 2]] , [cuestionario 1], [cuestionario 2], [cuestionario 2]] ]    
   */
  let institucion = [[[], [], []], [[], [], []]];
  for (let z = 0; z < 2; z++) {
    if (z == 0) {
      for (let k = 1; k < 4; k++) {
        for (let i = 1; i < 3; i++) {
          let elemento = document.getElementsByName(`institucion_uno_${k}_${i}`);
          for (let j = 0; j < elemento.length; j++) {
            if (elemento[j].checked) {
              institucion[z][k - 1][i - 1] = elemento[j].value;
            }
          }
        }
        if (k == 3) {
          for (let a = 1; a < 11; a++) {
            let elemento = document.getElementsByName(`institucion_uno_${k}_${a}`);
            for (let j = 0; j < elemento.length; j++) {
              if (elemento[j].checked) {
                institucion[z][k - 1][a - 1] = elemento[j].value;
              }
            }
          }
        }
      }
    } else if (z == 1) {
      for (let k = 1; k < 4; k++) {
        for (let i = 1; i < 3; i++) {
          let elemento = document.getElementsByName(`institucion_dos_${k}_${i}`);
          for (let j = 0; j < elemento.length; j++) {
            if (elemento[j].checked) {
              institucion[z][k - 1][i - 1] = elemento[j].value;
            }
          }
        }
        if (k == 3) {
          for (let a = 1; a < 11; a++) {
            let elemento = document.getElementsByName(`institucion_dos_${k}_${a}`);
            for (let j = 0; j < elemento.length; j++) {
              if (elemento[j].checked) {
                institucion[z][k - 1][a - 1] = elemento[j].value;
              }
            }
          }
        }
      }
    }
  }



  console.log(institucion);
}


$gmx(document).ready(function () {


  $('#btn_buscar_rfc').click(function () {

    if ($('#rfc').val() == "") {

      const id_asterisco_rfc = document.querySelector("#asterisco_rfc");

      if (id_asterisco_rfc.classList.contains("form-text-error") == false) {

        console.log(id_asterisco_rfc.classList.contains("form-text-error"));
        id_asterisco_rfc.classList.add("form-text-error");

        const etiqueta_padre_rfc = document.querySelector("#rfc");
        etiqueta_padre_rfc.classList.add("form-control-error");

        // console.log(etiqueta_padre_rfc.parentElement);
        const contenedor_rfc = etiqueta_padre_rfc.parentElement;
        const item_rfc = document.createElement("SMALL");//todo en mayuscula
        const textDelItem_rfc = document.createTextNode("Este campo es obligatorio");
        item_rfc.appendChild(textDelItem_rfc);
        item_rfc.classList.add("form-text");
        item_rfc.classList.add("form-text-error");
        contenedor_rfc.appendChild(item_rfc);
        //console.log(item);
      }


    }


  });

  $('#btn_editar_datos').click(function () {
    document.getElementById("btn_buscar_rfc").disabled = true;

    document.getElementById("inst_l_nombre").readOnly = false;
    document.getElementById("inst_l_apellido_paterno").readOnly = false;
    document.getElementById("inst_l_apellido_materno").readOnly = false;

    document.getElementById("inst_l_sep").readOnly = false;
    document.getElementById("inst_l_sems").readOnly = false;
    document.getElementById("inst_l_plantel").readOnly = false;

    document.getElementById("inst_ll_sep").readOnly = false;
    document.getElementById("inst_ll_sems").readOnly = false;
    document.getElementById("inst_ll_uemstis").readOnly = false;
    document.getElementById("inst_ll_plantel").readOnly = false;

    document.getElementById("director_cetis").readOnly = false;

    // $('#a_dgor');
    // $('#fecha_dgor');
    // $('#b_dgor');

    //Lista checable
    for (let i = 1; i < 3; i++) {
      document.getElementById("institucion_uno_1_" + i + "_si").disabled = false;
      document.getElementById("institucion_uno_1_" + i + "_no").disabled = false;
      document.getElementById("institucion_dos_1_" + i + "_si").disabled = false;
      document.getElementById("institucion_dos_1_" + i + "_no").disabled = false;

      document.getElementById("institucion_uno_2_" + i + "_si").disabled = false;
      document.getElementById("institucion_uno_2_" + i + "_no").disabled = false;
      document.getElementById("institucion_dos_2_" + i + "_si").disabled = false;
      document.getElementById("institucion_dos_2_" + i + "_no").disabled = false;
    }

    for (let i = 1; i < 11; i++) {
      document.getElementById("institucion_uno_3_" + i + "_si").disabled = false;
      document.getElementById("institucion_uno_3_" + i + "_no").disabled = false;
      document.getElementById("institucion_dos_3_" + i + "_si").disabled = false;
      document.getElementById("institucion_dos_3_" + i + "_no").disabled = false;
    }



    // $('#institucion_uno_1_1');
    // $('#institucion_dos_1_1');
    // $('#institucion_uno_1_2');
    // $('#institucion_dos_1_2');

    // $('#institucion_uno_2_1');
    // $('#institucion_dos_2_1');
    // $('#institucion_uno_2_2');
    // $('#institucion_dos_2_2');

    // $('#institucion_uno_3_1');
    // $('#institucion_dos_3_1');
    // $('#institucion_uno_3_2');
    // $('#institucion_dos_3_2');
    // $('#institucion_uno_3_3');
    // $('#institucion_dos_3_3');
    // $('#institucion_uno_3_4');
    // $('#institucion_dos_3_4');
    // $('#institucion_uno_3_5');
    // $('#institucion_dos_3_5');
    // $('#institucion_uno_3_6');
    // $('#institucion_dos_3_6');
    // $('#institucion_uno_3_7');
    // $('#institucion_dos_3_7');
    // $('#institucion_uno_3_8');
    // $('#institucion_dos_3_8');
    // $('#institucion_uno_3_9');
    // $('#institucion_dos_3_9');
    // $('#institucion_uno_3_10');
    // $('#institucion_dos_3_10');

    // document.getElementById("institutoUnoCalendarYear").readOnly = false;
    // document.getElementById("institutoDosCalendarYear").readOnly = false;
    // $('#institutoUnoCalendarYear').datepicker({ changeYear: true });
    // $('#institutoDosCalendarYear').datepicker({ changeYear: true });

    let actual = new Date();
    fecha = `${actual.getDate()}/${actual.getMonth() + 1}/${actual.getFullYear()}`;
    $('#institutoUnoCalendarYear').val(fecha);
    $('#institutoDosCalendarYear').val(fecha);
    let html_new;
    html_new = `_${actual.getDate()}/${actual.getMonth() + 1}/${actual.getFullYear()}_`;
    document.getElementById('fecha_dgor').innerHTML = html_new;

    document.getElementById("inst_uno_analista").readOnly = false;
    document.getElementById("inst_dos_analista").readOnly = false;
    $('#myModal').modal('hide');

  });

  $('#btn_editar').click(function () {
    //llama modal
    $('#myModal').modal();

  });


  $('#btn_agregar_inst_l').click(function () {
    
    const etiqueta_padre = document.querySelector("#inst_l_tabla");
    
    // console.log(etiqueta_padre_rfc.parentElement);
    const contenedor_tabla = etiqueta_padre.parentElement;
    const item_tabla = document.createElement("SMALL");//todo en mayuscula
    const textDelItem_tabla = document.createTextNode("Este campo es obligatorio");
    item_tabla.appendChild(textDelItem_tabla);
    item_tabla.classList.add("form-text");
    item_tabla.classList.add("form-text-error");
    contenedor_tabla.appendChild(item_tabla);
    //console.log(item);
    


  });






});
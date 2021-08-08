
//Genera los mensajes de Error
function alertaError(id_asterisco, id_element) {
  const asterisco = document.querySelector(id_asterisco);

  if (asterisco.classList.contains("form-text-error") == false) {

    // console.log(asterisco.classList.contains("form-text-error"));
    asterisco.classList.add("form-text-error");

    const element_padre = document.querySelector(id_element);
    element_padre.classList.add("form-control-error");

    // console.log(etiqueta_padre_rfc.parentElement);
    const contenedor_element = element_padre.parentElement;
    const item_small = document.createElement("SMALL");//todo en mayuscula
    const textDelItem = document.createTextNode("Este campo es obligatorio");
    item_small.appendChild(textDelItem);
    item_small.classList.add("form-text");
    item_small.classList.add("form-text-error");
    contenedor_element.appendChild(item_small);
    //console.log(item);
  }


}

//Elimina el mensaje de Error
function limpiarError(id_asterisco, id_elemento) {

  const asterisco = document.querySelector(id_asterisco);

  if (asterisco.classList.contains("form-text-error") == true) {
    asterisco.classList.remove("form-text-error");
    const element_hijo = document.querySelector(id_elemento);
    element_hijo.classList.remove("form-control-error");

    const contenedor = element_hijo.parentElement;
    const small = contenedor.querySelector("small");
    contenedor.removeChild(small);

  }


}


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

  // console.log(institucion);
}

$gmx(document).ready(function () {

  $('#btn_buscar_rfc').click(function () {

    if ($('#rfc').val() == "") {

      alertaError('#asterisco_rfc', '#rfc');

      // const id_asterisco_rfc = document.querySelector("#asterisco_rfc");

      // if (id_asterisco_rfc.classList.contains("form-text-error") == false) {

      //   console.log(id_asterisco_rfc.classList.contains("form-text-error"));
      //   id_asterisco_rfc.classList.add("form-text-error");

      //   const etiqueta_padre_rfc = document.querySelector("#rfc");
      //   etiqueta_padre_rfc.classList.add("form-control-error");

      //   // console.log(etiqueta_padre_rfc.parentElement);
      //   const contenedor_rfc = etiqueta_padre_rfc.parentElement;
      //   const item_rfc = document.createElement("SMALL");//todo en mayuscula
      //   const textDelItem_rfc = document.createTextNode("Este campo es obligatorio");
      //   item_rfc.appendChild(textDelItem_rfc);
      //   item_rfc.classList.add("form-text");
      //   item_rfc.classList.add("form-text-error");
      //   contenedor_rfc.appendChild(item_rfc);
      //   //console.log(item);
      // }


    } else {
      limpiarError('#asterisco_rfc', '#rfc');
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

  $('#btn_modal_inst_l').click(function () {

    const contenedor_tabla = document.querySelector("#tabla_uno");
    //HTMLCollection
    const hijos = contenedor_tabla.children;
    // console.log(hijos.length);
    if (hijos.length < 20) {
      //alert("vamos bien");
      $('#modal_tabla_uno').modal();
    } else {
      alert("vamos mal");

    }


    $('#add_4_calendarYear').datepicker({ changeYear: true });



  });

  const contenedor_tabla_uno = [
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []]
  ];
  $('#btn_agregar_inst_l').click(function () {
    let cont = 0;
    if ($('#add_1').val() == "") {
      alertaError('#asterisco_add_1', '#add_1');
      cont++;
    } else {
      limpiarError('#asterisco_add_1', '#add_1');
    }
    if ($('#add_2').val() == "") {
      alertaError('#asterisco_add_2', '#add_2');
      cont++;
    } else {
      limpiarError('#asterisco_add_2', '#add_2');
    }
    if ($('#add_3').val() == "") {
      alertaError('#asterisco_add_3', '#add_3');
      cont++;
    } else {
      limpiarError('#asterisco_add_3', '#add_3');
    }
    if ($('#add_4_calendarYear').val() == "") {
      alertaError('#asterisco_add_4', '#add_4_calendarYear');
      cont++;
    } else {
      limpiarError('#asterisco_add_4', '#add_4_calendarYear');
    }
    if ($('#add_5').val() == "") {
      alertaError('#asterisco_add_5', '#add_5');
      cont++;
    } else {
      limpiarError('#asterisco_add_5', '#add_5');
    }
    if ($('#add_6').val() == "") {
      alertaError('#asterisco_add_6', '#add_6');
      cont++;
    } else {
      limpiarError('#asterisco_add_6', '#add_6');
    }
    if ($('#add_7').val() == "") {
      alertaError('#asterisco_add_7', '#add_7');
      cont++;
    } else {
      limpiarError('#asterisco_add_7', '#add_7');
    }
    if ($('#add_8').val() == "") {
      alertaError('#asterisco_add_8', '#add_8');
      cont++;
    } else {
      limpiarError('#asterisco_add_8', '#add_8');
    }

    if (cont == 0) {
      // console.log(contenedor_tabla_uno);

      const contenedor_tabla = document.querySelector("#tabla_uno");

      const hijos = contenedor_tabla.children;
      let cont = hijos.length;

      contenedor_tabla_uno[cont][0][0] = document.createElement("TR");//todo en mayuscula
      contenedor_tabla.appendChild(contenedor_tabla_uno[cont][0][0]);

      contenedor_tabla_uno[cont][0][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][0][2] = document.createTextNode($('#add_1').val());
      contenedor_tabla_uno[cont][0][1].setAttribute("id", "tabla_uno_" + cont + "_c_1");//atributo,valor;
      contenedor_tabla_uno[cont][0][1].appendChild(contenedor_tabla_uno[cont][0][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][0][1]);

      contenedor_tabla_uno[cont][1][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][1][2] = document.createTextNode($('#add_2').val());
      contenedor_tabla_uno[cont][1][1].setAttribute("id", "tabla_uno_" + cont + "_c_2");
      contenedor_tabla_uno[cont][1][1].appendChild(contenedor_tabla_uno[cont][1][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][1][1]);

      contenedor_tabla_uno[cont][2][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][2][2] = document.createTextNode($('#add_3').val());
      contenedor_tabla_uno[cont][2][1].setAttribute("id", "tabla_uno_" + cont + "_c_3");
      contenedor_tabla_uno[cont][2][1].appendChild(contenedor_tabla_uno[cont][2][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][2][1]);

      let fecha = $('#add_4_calendarYear').val();
      fecha = fecha.split('/');
      // console.log(fecha);

      contenedor_tabla_uno[cont][3][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][3][2] = document.createTextNode(fecha[0]);//dia
      contenedor_tabla_uno[cont][3][1].setAttribute("id", "tabla_uno_" + cont + "_c_4");
      contenedor_tabla_uno[cont][3][1].appendChild(contenedor_tabla_uno[cont][3][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][3][1]);

      contenedor_tabla_uno[cont][4][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][4][2] = document.createTextNode(fecha[1]);//mes
      contenedor_tabla_uno[cont][4][1].setAttribute("id", "tabla_uno_" + cont + "_c_5");
      contenedor_tabla_uno[cont][4][1].appendChild(contenedor_tabla_uno[cont][4][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][4][1]);

      contenedor_tabla_uno[cont][5][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][5][2] = document.createTextNode(fecha[2]);//año
      contenedor_tabla_uno[cont][5][1].setAttribute("id", "tabla_uno_" + cont + "_c_6");
      contenedor_tabla_uno[cont][5][1].appendChild(contenedor_tabla_uno[cont][5][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][5][1]);

      contenedor_tabla_uno[cont][6][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][6][2] = document.createTextNode($('#add_5').val());
      contenedor_tabla_uno[cont][6][1].setAttribute("id", "tabla_uno_" + cont + "_c_7");
      contenedor_tabla_uno[cont][6][1].appendChild(contenedor_tabla_uno[cont][6][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][6][1]);

      contenedor_tabla_uno[cont][7][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][7][2] = document.createTextNode($('#add_6').val());
      contenedor_tabla_uno[cont][7][1].setAttribute("id", "tabla_uno_" + cont + "_c_8");
      contenedor_tabla_uno[cont][7][1].appendChild(contenedor_tabla_uno[cont][7][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][7][1]);

      contenedor_tabla_uno[cont][8][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][8][2] = document.createTextNode($('#add_7').val());
      contenedor_tabla_uno[cont][8][1].setAttribute("id", "tabla_uno_" + cont + "_c_9");
      contenedor_tabla_uno[cont][8][1].appendChild(contenedor_tabla_uno[cont][8][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][8][1]);

      contenedor_tabla_uno[cont][9][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][9][2] = document.createTextNode($('#add_8').val());
      contenedor_tabla_uno[cont][9][1].setAttribute("id", "tabla_uno_" + cont + "_c_10");
      contenedor_tabla_uno[cont][9][1].appendChild(contenedor_tabla_uno[cont][9][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][9][1]);
      $('#form_modal_tabla_uno')[0].reset();


      limpiarError("#asterisco_add_1", "#add_1");
      limpiarError("#asterisco_add_2", "#add_2");
      limpiarError("#asterisco_add_3", "#add_3");
      limpiarError("#asterisco_add_4", "#add_4_calendarYear");
      limpiarError("#asterisco_add_5", "#add_5");
      limpiarError("#asterisco_add_6", "#add_6");
      limpiarError("#asterisco_add_7", "#add_7");
      limpiarError("#asterisco_add_8", "#add_8");





      // console.log(contenedor_tabla);



      // $.ajax({
      //   type:'POST',
      //   url:'/agregarTabla',
      //   data:$('#form_tabla_uno').serialize(),
      //   success:function(r){
      //     console.log(r);
      //     $('#tabla_uno').html(r);
      //   }

      // });

    } else {
      return false;
    }


  });

  $('#btn_modal_inst_ll').click(function () {

    const contenedor_tabla = document.querySelector("#tabla_dos");
    //HTMLCollection
    const hijos = contenedor_tabla.children;
    // console.log(hijos.length);
    if (hijos.length < 20) {
      //alert("vamos bien");
      $('#modal_tabla_dos').modal();
    } else {
      alert("vamos mal");

    }


    $('#add2_4_calendarYear').datepicker({ changeYear: true });

  });

  const contenedor_tabla_dos = [
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []]
  ];
  $('#btn_agregar_inst_ll').click(function () {
    let cont = 0;
    if ($('#add2_1').val() == "") {
      alertaError('#asterisco_add2_1', '#add2_1');
      cont++;
    } else {
      limpiarError('#asterisco_add2_1', '#add2_1');
    }
    if ($('#add2_2').val() == "") {
      alertaError('#asterisco_add2_2', '#add2_2');
      cont++;
    } else {
      limpiarError('#asterisco_add2_2', '#add2_2');
    }
    if ($('#add2_3').val() == "") {
      alertaError('#asterisco_add2_3', '#add2_3');
      cont++;
    } else {
      limpiarError('#asterisco_add2_3', '#add2_3');
    }
    if ($('#add2_4_calendarYear').val() == "") {
      alertaError('#asterisco_add2_4', '#add2_4_calendarYear');
      cont++;
    } else {
      limpiarError('#asterisco_add2_4', '#add2_4_calendarYear');
    }
    if ($('#add2_5').val() == "") {
      alertaError('#asterisco_add2_5', '#add2_5');
      cont++;
    } else {
      limpiarError('#asterisco_add2_5', '#add2_5');
    }
    if ($('#add2_6').val() == "") {
      alertaError('#asterisco_add2_6', '#add2_6');
      cont++;
    } else {
      limpiarError('#asterisco_add2_6', '#add2_6');
    }
    if ($('#add2_7').val() == "") {
      alertaError('#asterisco_add2_7', '#add2_7');
      cont++;
    } else {
      limpiarError('#asterisco_add2_7', '#add2_7');
    }
    if ($('#add2_8').val() == "") {
      alertaError('#asterisco_add2_8', '#add2_8');
      cont++;
    } else {
      limpiarError('#asterisco_add2_8', '#add2_8');
    }

    if (cont == 0) {
      // console.log(contenedor_tabla_uno);

      const contenedor_tabla = document.querySelector("#tabla_dos");

      const hijos = contenedor_tabla.children;
      let cont = hijos.length;

      contenedor_tabla_uno[cont][0][0] = document.createElement("TR");//todo en mayuscula
      contenedor_tabla.appendChild(contenedor_tabla_uno[cont][0][0]);

      contenedor_tabla_uno[cont][0][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][0][2] = document.createTextNode($('#add2_1').val());
      contenedor_tabla_uno[cont][0][1].setAttribute("id", "tabla_dos_" + cont + "_c_1");//atributo,valor;
      contenedor_tabla_uno[cont][0][1].appendChild(contenedor_tabla_uno[cont][0][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][0][1]);

      contenedor_tabla_uno[cont][1][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][1][2] = document.createTextNode($('#add2_2').val());
      contenedor_tabla_uno[cont][1][1].setAttribute("id", "tabla_dos_" + cont + "_c_2");
      contenedor_tabla_uno[cont][1][1].appendChild(contenedor_tabla_uno[cont][1][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][1][1]);

      contenedor_tabla_uno[cont][2][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][2][2] = document.createTextNode($('#add2_3').val());
      contenedor_tabla_uno[cont][2][1].setAttribute("id", "tabla_dos_" + cont + "_c_3");
      contenedor_tabla_uno[cont][2][1].appendChild(contenedor_tabla_uno[cont][2][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][2][1]);

      let fecha = $('#add2_4_calendarYear').val();
      fecha = fecha.split('/');
      // console.log(fecha);

      contenedor_tabla_uno[cont][3][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][3][2] = document.createTextNode(fecha[0]);//dia
      contenedor_tabla_uno[cont][3][1].setAttribute("id", "tabla_dos_" + cont + "_c_4");
      contenedor_tabla_uno[cont][3][1].appendChild(contenedor_tabla_uno[cont][3][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][3][1]);

      contenedor_tabla_uno[cont][4][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][4][2] = document.createTextNode(fecha[1]);//mes
      contenedor_tabla_uno[cont][4][1].setAttribute("id", "tabla_dos_" + cont + "_c_5");
      contenedor_tabla_uno[cont][4][1].appendChild(contenedor_tabla_uno[cont][4][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][4][1]);

      contenedor_tabla_uno[cont][5][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][5][2] = document.createTextNode(fecha[2]);//año
      contenedor_tabla_uno[cont][5][1].setAttribute("id", "tabla_dos_" + cont + "_c_6");
      contenedor_tabla_uno[cont][5][1].appendChild(contenedor_tabla_uno[cont][5][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][5][1]);

      contenedor_tabla_uno[cont][6][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][6][2] = document.createTextNode($('#add2_5').val());
      contenedor_tabla_uno[cont][6][1].setAttribute("id", "tabla_dos_" + cont + "_c_7");
      contenedor_tabla_uno[cont][6][1].appendChild(contenedor_tabla_uno[cont][6][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][6][1]);

      contenedor_tabla_uno[cont][7][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][7][2] = document.createTextNode($('#add2_6').val());
      contenedor_tabla_uno[cont][7][1].setAttribute("id", "tabla_dos_" + cont + "_c_8");
      contenedor_tabla_uno[cont][7][1].appendChild(contenedor_tabla_uno[cont][7][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][7][1]);

      contenedor_tabla_uno[cont][8][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][8][2] = document.createTextNode($('#add2_7').val());
      contenedor_tabla_uno[cont][8][1].setAttribute("id", "tabla_dos_" + cont + "_c_9");
      contenedor_tabla_uno[cont][8][1].appendChild(contenedor_tabla_uno[cont][8][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][8][1]);

      contenedor_tabla_uno[cont][9][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][9][2] = document.createTextNode($('#add2_8').val());
      contenedor_tabla_uno[cont][9][1].setAttribute("id", "tabla_dos_" + cont + "_c_10");
      contenedor_tabla_uno[cont][9][1].appendChild(contenedor_tabla_uno[cont][9][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][9][1]);
      $('#form_modal_tabla_dos')[0].reset();


      limpiarError("#asterisco_add2_1", "#add2_1");
      limpiarError("#asterisco_add2_2", "#add2_2");
      limpiarError("#asterisco_add2_3", "#add2_3");
      limpiarError("#asterisco_add2_4", "#add2_4_calendarYear");
      limpiarError("#asterisco_add2_5", "#add2_5");
      limpiarError("#asterisco_add2_6", "#add2_6");
      limpiarError("#asterisco_add2_7", "#add2_7");
      limpiarError("#asterisco_add2_8", "#add2_8");

      // console.log(contenedor_tabla);

      // $.ajax({
      //   type:'POST',
      //   url:'/agregarTabla',
      //   data:$('#form_tabla_uno').serialize(),
      //   success:function(r){
      //     console.log(r);
      //     $('#tabla_uno').html(r);
      //   }

      // });

    } else {
      return false;
    }

  });

  $('#btn_completado').click(function () {
    //obtenerDatos();

    if ($('#rfc').val() == "") {
      alertaError('#asterisco_rfc', '#rfc');
    } else {
      limpiarError('#asterisco_rfc', '#rfc');
    }

    if ($('#inst_l_nombre').val() == "") {
      alertaError('#asterisco_inst_l_nombre', '#inst_l_nombre');
    } else {
      limpiarError('#asterisco_inst_l_nombre', '#inst_l_nombre');
    }
    if ($('#inst_l_apellido_paterno').val() == "") {
      alertaError('#asterisco_inst_l_apellido_paterno', '#inst_l_apellido_paterno');
    } else {
      limpiarError('#asterisco_inst_l_apellido_paterno', '#inst_l_apellido_paterno');
    }
    if ($('#inst_l_apellido_materno').val() == "") {
      alertaError('#asterisco_inst_l_apellido_materno', '#inst_l_apellido_materno');
    } else {
      limpiarError('#asterisco_inst_l_apellido_materno', '#inst_l_apellido_materno');
    }
    if ($('#inst_l_sep').val() == "") {
      alertaError('#asterisco_inst_l_sep', '#inst_l_sep');
    } else {
      limpiarError('#asterisco_inst_l_sep', '#inst_l_sep');
    }
    if ($('#inst_l_sems').val() == "") {
      alertaError('#asterisco_inst_l_sems', '#inst_l_sems');
    } else {
      limpiarError('#asterisco_inst_l_sems', '#inst_l_sems');
    }
    if ($('#inst_l_plantel').val() == "") {
      alertaError('#asterisco_inst_l_plantel', '#inst_l_plantel');
    } else {
      limpiarError('#asterisco_inst_l_plantel', '#inst_l_plantel');
    }
    if ($('#inst_ll_sep').val() == "") {
      alertaError('#asterisco_inst_ll_sep', '#inst_ll_sep');
    } else {
      limpiarError('#asterisco_inst_ll_sep', '#inst_ll_sep');
    }
    if ($('#inst_ll_sems').val() == "") {
      alertaError('#asterisco_inst_ll_sems', '#inst_ll_sems');
    } else {
      limpiarError('#asterisco_inst_ll_sems', '#inst_ll_sems');
    }
    if ($('#inst_ll_uemstis').val() == "") {
      alertaError('#asterisco_inst_ll_uemstis', '#inst_ll_uemstis');
    } else {
      limpiarError('#asterisco_inst_ll_uemstis', '#inst_ll_uemstis');
    }
    if ($('#inst_ll_plantel').val() == "") {
      alertaError('#asterisco_inst_ll_plantel', '#inst_ll_plantel');
    } else {
      limpiarError('#asterisco_inst_ll_plantel', '#inst_ll_plantel');
    }
    if ($('#director_cetis').val() == "") {
      alertaError('#asterisco_director_cetis', '#director_cetis');
    } else {
      limpiarError('#asterisco_director_cetis', '#director_cetis');
    }

    if ($('#inst_uno_analista').val() == "" || $('#inst_dos_analista').val() == "") {
      const asterisco = document.querySelector('#asterisco_analista');

      if (asterisco.classList.contains("form-text-error") == false) {

        // console.log(asterisco.classList.contains("form-text-error"));
        asterisco.classList.add("form-text-error");

        if ($('#inst_uno_analista').val() == "") {
          const element_padre = document.querySelector('#inst_uno_analista');
          element_padre.classList.add("form-control-error");

          // console.log(etiqueta_padre_rfc.parentElement);
          const contenedor_element = element_padre.parentElement;
          const item_small = document.createElement("SMALL");//todo en mayuscula
          const textDelItem = document.createTextNode("Este campo es obligatorio");
          item_small.appendChild(textDelItem);
          item_small.classList.add("form-text");
          item_small.classList.add("form-text-error");
          contenedor_element.appendChild(item_small);
          //console.log(item);
        } else {

        }
        if ($('#inst_dos_analista').val() == "") {
          const element_padre = document.querySelector('#inst_dos_analista');
          element_padre.classList.add("form-control-error");

          // console.log(etiqueta_padre_rfc.parentElement);
          const contenedor_element = element_padre.parentElement;
          const item_small = document.createElement("SMALL");//todo en mayuscula
          const textDelItem = document.createTextNode("Este campo es obligatorio");
          item_small.appendChild(textDelItem);
          item_small.classList.add("form-text");
          item_small.classList.add("form-text-error");
          contenedor_element.appendChild(item_small);
          //console.log(item);
        } else {

        }

      }

    } else {
      const asterisco = document.querySelector('#asterisco_analista');
      asterisco.classList.remove("form-text-error");
      
      const element_hijo_uno = document.querySelector('#inst_uno_analista');
      element_hijo_uno.classList.remove("form-control-error");
      const contenedor_uno = element_hijo_uno.parentElement;
      const small_uno = contenedor_uno.querySelector("small");
      contenedor_uno.removeChild(small_uno);

      const element_hijo_dos = document.querySelector('#inst_dos_analista');
      element_hijo_dos.classList.remove("form-control-error");
      const contenedor_dos = element_hijo_dos.parentElement;
      const small_dos = contenedor_dos.querySelector("small");
      contenedor_dos.removeChild(small_dos);

    }



  });

});
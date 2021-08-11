/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./resources/js/docente_u.js ***!
  \***********************************/
//Genera los mensajes de Error 555
function alertaError(id_asterisco, id_element) {
  var asterisco = document.querySelector(id_asterisco);

  if (asterisco.classList.contains("form-text-error") == false) {
    // console.log(asterisco.classList.contains("form-text-error"));
    asterisco.classList.add("form-text-error");
    var element_padre = document.querySelector(id_element);
    element_padre.classList.add("form-control-error"); // console.log(etiqueta_padre_rfc.parentElement);

    var contenedor_element = element_padre.parentElement;
    var item_small = document.createElement("SMALL"); //todo en mayuscula

    var textDelItem = document.createTextNode("Este campo es obligatorio");
    item_small.appendChild(textDelItem);
    item_small.classList.add("form-text");
    item_small.classList.add("form-text-error");
    contenedor_element.appendChild(item_small); //console.log(item);
  }
} //Elimina el mensaje de Error


function limpiarError(id_asterisco, id_elemento) {
  var asterisco = document.querySelector(id_asterisco);

  if (asterisco.classList.contains("form-text-error") == true) {
    asterisco.classList.remove("form-text-error");
    var element_hijo = document.querySelector(id_elemento);
    element_hijo.classList.remove("form-control-error");
    var contenedor = element_hijo.parentElement;
    var small = contenedor.querySelector("small");
    contenedor.removeChild(small);
  }
} //Elimina el ultimo elemento


function removerUltimoElemento(base) {
  var contenedor = document.querySelector(base);
  var tr_antiguo = contenedor.lastChild;
  contenedor.removeChild(tr_antiguo);
}

$gmx(document).ready(function () {
  $('#calendarYear_gobierno').datepicker({
    changeYear: true
  });
  $('#calendarYear_sep').datepicker({
    changeYear: true
  });
  $('#calendarYear_dgeti').datepicker({
    changeYear: true
  });
  $('#btn_buscar_rfc').click(function () {
    if ($('#buscar_rfc').val() == "") {
      alertaError('#asterisco_buscar_rfc', '#buscar_rfc');
    } else {
      limpiarError('#asterisco_buscar_rfc', '#buscar_rfc');
    } //console.log($('#form_buscar_rfc').serialize());


    var form_url = $('#form_buscar_rfc').attr("action"); //'actualizarDocente/buscarRfc'

    $.ajax({
      type: 'POST',
      url: form_url,
      data: $('#form_buscar_rfc').serialize(),
      success: function success(r) {
        console.log(r); // $('#tabla_uno').html(r);
      }
    });
  });
  var contenedor_tabla_uno = [[[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []], [[], [], [], [], [], [], []]];
  $('#btn_agregar').click(function () {
    var unidad = document.getElementById("unidad").value;
    var sub_unidad = document.getElementById("sub_unidad").value;
    var categoria = document.getElementById("categoria").value;
    var horas = document.getElementById("horas").value;
    var plaza = document.getElementById("plaza").value;
    var motivo = document.getElementById("motivo").value;
    var puesto = document.getElementById("puesto").value;
    var contenedor_tabla = document.querySelector("#tabla_uno");
    var hijos = contenedor_tabla.children;
    var cont = hijos.length;
    contenedor_tabla_uno[cont][0][0] = document.createElement("TR"); //todo en mayuscula

    contenedor_tabla_uno[cont][0][0].setAttribute("id", "tr_" + cont); //atributo,valor;

    contenedor_tabla.appendChild(contenedor_tabla_uno[cont][0][0]);
    contenedor_tabla_uno[cont][0][1] = document.createElement("TD");
    contenedor_tabla_uno[cont][0][2] = document.createTextNode(unidad);
    contenedor_tabla_uno[cont][0][1].setAttribute("id", "unidad_" + cont); //atributo,valor;

    contenedor_tabla_uno[cont][0][1].appendChild(contenedor_tabla_uno[cont][0][2]);
    contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][0][1]);
    contenedor_tabla_uno[cont][1][1] = document.createElement("TD");
    contenedor_tabla_uno[cont][1][2] = document.createTextNode(sub_unidad);
    contenedor_tabla_uno[cont][1][1].setAttribute("id", "sub_unidad_" + cont); //atributo,valor;

    contenedor_tabla_uno[cont][1][1].appendChild(contenedor_tabla_uno[cont][1][2]);
    contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][1][1]);
    contenedor_tabla_uno[cont][2][1] = document.createElement("TD");
    contenedor_tabla_uno[cont][2][2] = document.createTextNode(categoria);
    contenedor_tabla_uno[cont][2][1].setAttribute("id", "categoria_" + cont); //atributo,valor;

    contenedor_tabla_uno[cont][2][1].appendChild(contenedor_tabla_uno[cont][2][2]);
    contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][2][1]);
    contenedor_tabla_uno[cont][3][1] = document.createElement("TD");
    contenedor_tabla_uno[cont][3][2] = document.createTextNode(horas);
    contenedor_tabla_uno[cont][3][1].setAttribute("id", "horas_" + cont); //atributo,valor;

    contenedor_tabla_uno[cont][3][1].appendChild(contenedor_tabla_uno[cont][3][2]);
    contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][3][1]);
    contenedor_tabla_uno[cont][4][1] = document.createElement("TD");
    contenedor_tabla_uno[cont][4][2] = document.createTextNode(plaza);
    contenedor_tabla_uno[cont][4][1].setAttribute("id", "plaza_" + cont); //atributo,valor;

    contenedor_tabla_uno[cont][4][1].appendChild(contenedor_tabla_uno[cont][4][2]);
    contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][4][1]);
    contenedor_tabla_uno[cont][5][1] = document.createElement("TD");
    contenedor_tabla_uno[cont][5][2] = document.createTextNode(motivo);
    contenedor_tabla_uno[cont][5][1].setAttribute("id", "motivo_" + cont); //atributo,valor;

    contenedor_tabla_uno[cont][5][1].appendChild(contenedor_tabla_uno[cont][5][2]);
    contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][5][1]);
    contenedor_tabla_uno[cont][6][1] = document.createElement("TD");
    contenedor_tabla_uno[cont][6][2] = document.createTextNode(puesto);
    contenedor_tabla_uno[cont][6][1].setAttribute("id", "puesto_" + cont); //atributo,valor;

    contenedor_tabla_uno[cont][6][1].appendChild(contenedor_tabla_uno[cont][6][2]);
    contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][6][1]);
    console.log(contenedor_tabla_uno);
  });
  $('#btn_eliminar').click(function () {
    // z=document.getElementById("unidad_0").innerHTML;
    // console.log(z);
    // alert(z);
    removerUltimoElemento("#tabla_uno");
  });
  $('#btn_actualizar').click(function () {
    alert('actualizar');

    if ($('#nombre').val() == '') {
      alertaError('#asterisco_nombre', '#nombre');
    } else {
      limpiarError('#asterisco_nombre', '#nombre');
    }

    if ($('#primer_apellido').val() == '') {
      alertaError('#asterisco_primer_apellido', '#primer_apellido');
    } else {
      limpiarError('#asterisco_primer_apellido', '#primer_apellido');
    }

    if ($('#segundo_apellido').val() == '') {
      alertaError('#asterisco_segundo_apellido', '#segundo_apellido');
    } else {
      limpiarError('#asterisco_segundo_apellido', '#segundo_apellido');
    }

    if ($('#rfc').val() == '') {
      alertaError('#asterisco_rfc', '#rfc');
    } else {
      limpiarError('#asterisco_rfc', '#rfc');
    }

    if ($('#curp').val() == '') {
      alertaError('#asterisco_curp', '#curp');
    } else {
      limpiarError('#asterisco_curp', '#curp');
    }

    if (document.getElementById("unidad").value == '') {
      alertaError('#asterisco_unidad', '#unidad');
    } else {
      limpiarError('#asterisco_unidad', '#unidad');
    }

    if (document.getElementById("sub_unidad").value == '') {
      alertaError('#asterisco_sub_unidad', '#sub_unidad');
    } else {
      limpiarError('#asterisco_sub_unidad', '#sub_unidad');
    }

    if (document.getElementById("categoria").value == '') {
      alertaError('#asterisco_categoria', '#categoria');
    } else {
      limpiarError('#asterisco_categoria', '#categoria');
    }

    if (document.getElementById("horas").value == '') {
      alertaError('#asterisco_horas', '#horas');
    } else {
      limpiarError('#asterisco_horas', '#horas');
    }

    if (document.getElementById("plaza").value == '') {
      alertaError('#asterisco_plaza', '#plaza');
    } else {
      limpiarError('#asterisco_plaza', '#plaza');
    }

    if (document.getElementById("motivo").value == '') {
      alertaError('#asterisco_motivo', '#motivo');
    } else {
      limpiarError('#asterisco_motivo', '#motivo');
    }

    if ($('#puesto').val() == '') {
      alertaError('#asterisco_puesto', '#puesto');
    } else {
      limpiarError('#asterisco_puesto', '#puesto');
    }

    if ($('#calendarYear_gobierno').val() == '') {
      alertaError('#asterisco_calendarYear_gobierno', '#calendarYear_gobierno');
    } else {
      limpiarError('#asterisco_calendarYear_gobierno', '#calendarYear_gobierno');
    }

    if ($('#calendarYear_sep').val() == '') {
      alertaError('#asterisco_calendarYear_sep', '#calendarYear_sep');
    } else {
      limpiarError('#asterisco_calendarYear_sep', '#calendarYear_sep');
    }

    if ($('#calendarYear_dgeti').val() == '') {
      alertaError('#asterisco_calendarYear_dgeti', '#calendarYear_dgeti');
    } else {
      limpiarError('#asterisco_calendarYear_dgeti', '#calendarYear_dgeti');
    }

    if ($('#observaciones').val() == '') {
      alertaError('#asterisco_observaciones', '#observaciones');
    } else {
      limpiarError('#asterisco_observaciones', '#observaciones');
    }
  });
  $('#btn_eliminar').click(function () {
    console.log('ddd');
    alert('eliminar');
  });
});
/******/ })()
;
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./resources/js/docente_c.js ***!
  \***********************************/
//Genera los mensajes de Error
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

var selectCategoria = document.querySelector('#categoria');
selectCategoria.addEventListener('change', function (event) {
  var select = event.target.value; //alert( `Te gusta el sabor ${select}`);

  var token = "_token=".concat($('input[name="_token"]').val());
  var info = "".concat(token, "&categoria=").concat(select);
  $.ajax({
    type: 'POST',
    url: "registrarDocente/categoria",
    data: info,
    success: function success(r) {
      //console.log(r[0]["denominacion"]);
      $('#puesto').val(r[0]["denominacion"]);
    }
  });
});
$gmx(document).ready(function () {
  $('#ingresoGob').datepicker({
    changeYear: true
  });
  $('#ingresoSep').datepicker({
    changeYear: true
  });
  $('#ingresoDgti').datepicker({
    changeYear: true
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

    if (document.getElementById("unidad").value == '') {
      alertaError('#asterisco_unidad', '#unidad');
      cont++;
    } else {
      limpiarError('#asterisco_unidad', '#unidad');
    }

    if (document.getElementById("sub_unidad").value == '') {
      alertaError('#asterisco_sub_unidad', '#sub_unidad');
      cont++;
    } else {
      limpiarError('#asterisco_sub_unidad', '#sub_unidad');
    }

    if (document.getElementById("categoria").value == '') {
      alertaError('#asterisco_categoria', '#categoria');
      cont++;
    } else {
      limpiarError('#asterisco_categoria', '#categoria');
    }

    if (document.getElementById("horas").value == '') {
      alertaError('#asterisco_horas', '#horas');
      cont++;
    } else {
      limpiarError('#asterisco_horas', '#horas');
    }

    if (document.getElementById("plaza").value == '') {
      alertaError('#asterisco_plaza', '#plaza');
      cont++;
    } else {
      limpiarError('#asterisco_plaza', '#plaza');
    }

    if (document.getElementById("motivo").value == '') {
      alertaError('#asterisco_motivo', '#motivo');
      cont++;
    } else {
      limpiarError('#asterisco_motivo', '#motivo');
    }

    if ($('#puesto').val() == '') {
      alertaError('#asterisco_puesto', '#puesto');
      cont++;
    } else {
      limpiarError('#asterisco_puesto', '#puesto');
    }

    var contenedor_tabla = document.querySelector("#tabla_uno");
    var hijos = contenedor_tabla.children;
    var cont = hijos.length;
    contenedor_tabla_uno[cont][0][0] = document.createElement("TR"); //todo en mayuscula

    contenedor_tabla_uno[cont][0][0].setAttribute("id", "tr_" + cont); //atributo,valor;

    contenedor_tabla.appendChild(contenedor_tabla_uno[cont][0][0]);
    contenedor_tabla_uno[cont][0][1] = document.createElement("TD");
    contenedor_tabla_uno[cont][0][2] = document.createTextNode(unidad);
    contenedor_tabla_uno[cont][0][1].setAttribute("id", "unidad_" + cont); //atributo,valor;

    contenedor_tabla_uno[cont][0][1].setAttribute("name", "unidad[]"); //atributo,valor;

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
  $('#btn_registrar').click(function () {
    var cont = 0;

    if ($('#nombre').val() == '') {
      alertaError('#asterisco_nombre', '#nombre');
      cont++;
    } else {
      limpiarError('#asterisco_nombre', '#nombre');
    }

    if ($('#apePaterno').val() == '') {
      alertaError('#asterisco_apePaterno', '#apePaterno');
      cont++;
    } else {
      limpiarError('#asterisco_apePaterno', '#apePaterno');
    }

    if ($('#apeMaterno').val() == '') {
      alertaError('#asterisco_apeMaterno', '#apeMaterno');
      cont++;
    } else {
      limpiarError('#asterisco_apeMaterno', '#apeMaterno');
    }

    if ($('#rfc').val() == '') {
      alertaError('#asterisco_rfc', '#rfc');
      cont++;
    } else {
      limpiarError('#asterisco_rfc', '#rfc');
    }

    if ($('#curp').val() == '') {
      alertaError('#asterisco_curp', '#curp');
      cont++;
    } else {
      limpiarError('#asterisco_curp', '#curp');
    }

    if ($('#ingresoGob').val() == '') {
      alertaError('#asterisco_ingresoGob', '#ingresoGob');
      cont++;
    } else {
      limpiarError('#asterisco_ingresoGob', '#ingresoGob');
    }

    if ($('#ingresoSep').val() == '') {
      alertaError('#asterisco_ingresoSep', '#ingresoSep');
      cont++;
    } else {
      limpiarError('#asterisco_ingresoSep', '#ingresoSep');
    }

    if ($('#ingresoDgti').val() == '') {
      alertaError('#asterisco_ingresoDgti', '#ingresoDgti');
      cont++;
    } else {
      limpiarError('#asterisco_ingresoDgti', '#ingresoDgti');
    }

    if ($('#observaciones').val() == '') {
      alertaError('#asterisco_observaciones', '#observaciones');
      cont++;
    } else {
      limpiarError('#asterisco_observaciones', '#observaciones');
    }

    if (cont == 0) {
      var contenedor_tabla = document.querySelector("#tabla_uno");
      var hijos = contenedor_tabla.children;
      var _cont = hijos.length;
      var informacion = "";

      for (var i = 0; i < _cont; i++) {
        informacion = informacion + "\n          &unidad[".concat(i, "]=").concat(document.getElementById("unidad_" + i).innerHTML, "\n          &sub_unidad[").concat(i, "]=").concat(document.getElementById("sub_unidad_" + i).innerHTML, "\n          &categoria[").concat(i, "]=").concat(document.getElementById("categoria_" + i).innerHTML, "\n          &horas[").concat(i, "]=").concat(document.getElementById("horas_" + i).innerHTML, "\n          &plaza[").concat(i, "]=").concat(document.getElementById("plaza_" + i).innerHTML, "\n          &motivo[").concat(i, "]=").concat(document.getElementById("motivo_" + i).innerHTML, "\n          &puesto[").concat(i, "]=").concat(document.getElementById("puesto_" + i).innerHTML, "\n          ");
      } //document.getElementById("unidad_"+0).innerHTML
      //console.log(informacion);
      //console.log($('#form_registrar_docente').serialize());


      var form_url = $('#form_registrar_docente').attr("action");
      $('#form_registrar_docente').serialize();
      $.ajax({
        type: 'POST',
        url: form_url,
        data: $('#form_registrar_docente').serialize() + informacion,
        success: function success(r) {
          console.log(r); // $('#tabla_uno').html(r);
        }
      });
    }
  });
});
/******/ })()
;
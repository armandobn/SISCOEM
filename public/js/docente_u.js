/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./resources/js/docente_u.js ***!
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
} //Genera mensaje principal Error


function mensajeError(id_alerta, mensaje) {
  var alerta = document.querySelector(id_alerta);

  if (alerta.classList.contains("alert-danger") == false) {
    alerta.classList.add("alert-danger");
    $(id_alerta).html(mensaje);
  } else {
    $(id_alerta).html(mensaje);
  }
} //Elimina el mensaje de Error principal


function limpiaMensajeError(id_alerta) {
  var alerta = document.querySelector(id_alerta);

  if (alerta.classList.contains("alert-danger") == true) {
    alerta.classList.remove("alert-danger");
    alerta.innerHTML = "";
  }
} //Elimina el ultimo elemento


function removerUltimoElemento(base) {
  var contenedor = document.querySelector(base);
  var tr_antiguo = contenedor.lastChild;
  contenedor.removeChild(tr_antiguo);
}

$gmx(document).ready(function () {
  //Scroll ir Arriba
  var obtener_pixeles_inicio = function obtener_pixeles_inicio() {
    return document.documentElement.scrollTop || document.body.scrollTop;
  };

  var irArriba = function irArriba() {
    if (obtener_pixeles_inicio() > 0) {
      requestAnimationFrame(irArriba);
      scrollTo(0, obtener_pixeles_inicio() - obtener_pixeles_inicio() / 30);
    }
  };

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
  var rfc_antiguo = "";
  $('#btn_buscar_rfc').click(function () {
    if ($('#buscar_rfc').val() == "") {
      alertaError('#asterisco_buscar_rfc', '#buscar_rfc');
      return null;
    } else if ($('#buscar_rfc').val().length == 13) {
      limpiarError('#asterisco_buscar_rfc', '#buscar_rfc');
    } else {
      alertaError('#asterisco_buscar_rfc', '#buscar_rfc');
      return null;
    } //console.log($('#form_buscar_rfc').serialize());


    var form_url = $('#form_buscar_rfc').attr("action"); //'actualizarDocente/buscarRfc'

    $.ajax({
      type: 'POST',
      url: form_url,
      data: $('#form_buscar_rfc').serialize(),
      success: function success(r) {
        //console.log(r);
        //console.log(r[1]);
        //console.log(r[1].length);
        limpiaMensajeError('#alerta');

        for (var i = 0; i < r[1].length; i++) {
          //console.log(r[1][i]);
          var contenedor_tabla = document.querySelector("#tabla_uno");
          contenedor_tabla_uno[i][0][0] = document.createElement("TR"); //todo en mayuscula

          contenedor_tabla_uno[i][0][0].setAttribute("id", "tr_" + i); //atributo,valor;

          contenedor_tabla.appendChild(contenedor_tabla_uno[i][0][0]);
          contenedor_tabla_uno[i][0][1] = document.createElement("TD");
          contenedor_tabla_uno[i][0][2] = document.createTextNode(r[1][i]["unidad"]);
          contenedor_tabla_uno[i][0][1].setAttribute("id", "unidad_" + i); //atributo,valor;

          contenedor_tabla_uno[i][0][1].setAttribute("name", "unidad[]"); //atributo,valor;

          contenedor_tabla_uno[i][0][1].appendChild(contenedor_tabla_uno[i][0][2]);
          contenedor_tabla_uno[i][0][0].appendChild(contenedor_tabla_uno[i][0][1]);
          contenedor_tabla_uno[i][1][1] = document.createElement("TD");
          contenedor_tabla_uno[i][1][2] = document.createTextNode(r[1][i]["sub_unidad"]);
          contenedor_tabla_uno[i][1][1].setAttribute("id", "sub_unidad_" + i); //atributo,valor;

          contenedor_tabla_uno[i][1][1].appendChild(contenedor_tabla_uno[i][1][2]);
          contenedor_tabla_uno[i][0][0].appendChild(contenedor_tabla_uno[i][1][1]);
          contenedor_tabla_uno[i][2][1] = document.createElement("TD");
          contenedor_tabla_uno[i][2][2] = document.createTextNode(r[1][i]["categoria"]);
          contenedor_tabla_uno[i][2][1].setAttribute("id", "categoria_" + i); //atributo,valor;

          contenedor_tabla_uno[i][2][1].appendChild(contenedor_tabla_uno[i][2][2]);
          contenedor_tabla_uno[i][0][0].appendChild(contenedor_tabla_uno[i][2][1]);
          contenedor_tabla_uno[i][3][1] = document.createElement("TD");
          contenedor_tabla_uno[i][3][2] = document.createTextNode(r[1][i]["horas"]);
          contenedor_tabla_uno[i][3][1].setAttribute("id", "horas_" + i); //atributo,valor;

          contenedor_tabla_uno[i][3][1].appendChild(contenedor_tabla_uno[i][3][2]);
          contenedor_tabla_uno[i][0][0].appendChild(contenedor_tabla_uno[i][3][1]);
          contenedor_tabla_uno[i][4][1] = document.createElement("TD");
          contenedor_tabla_uno[i][4][2] = document.createTextNode(r[1][i]["plaza"]);
          contenedor_tabla_uno[i][4][1].setAttribute("id", "plaza_" + i); //atributo,valor;

          contenedor_tabla_uno[i][4][1].appendChild(contenedor_tabla_uno[i][4][2]);
          contenedor_tabla_uno[i][0][0].appendChild(contenedor_tabla_uno[i][4][1]);
          contenedor_tabla_uno[i][5][1] = document.createElement("TD");
          contenedor_tabla_uno[i][5][2] = document.createTextNode(r[1][i]["motivo"]);
          contenedor_tabla_uno[i][5][1].setAttribute("id", "motivo_" + i); //atributo,valor;

          contenedor_tabla_uno[i][5][1].appendChild(contenedor_tabla_uno[i][5][2]);
          contenedor_tabla_uno[i][0][0].appendChild(contenedor_tabla_uno[i][5][1]);
          contenedor_tabla_uno[i][6][1] = document.createElement("TD");
          contenedor_tabla_uno[i][6][2] = document.createTextNode(r[1][i]["puesto"]);
          contenedor_tabla_uno[i][6][1].setAttribute("id", "puesto_" + i); //atributo,valor;

          contenedor_tabla_uno[i][6][1].appendChild(contenedor_tabla_uno[i][6][2]);
          contenedor_tabla_uno[i][0][0].appendChild(contenedor_tabla_uno[i][6][1]);
        } //console.log(contenedor_tabla_uno);


        var rangoEtario = document.querySelector("#form_actualizar_docente");
        rangoEtario.setAttribute("action", "actualizarDocente/actualizar/".concat(r[0]['id'], ")")); //atributo,valor     

        $('#nombre').val(r[0]['nombre']);
        $('#apePaterno').val(r[0]['apePaterno']);
        $('#apeMaterno').val(r[0]['apeMaterno']);
        $('#rfc').val(r[0]['rfc']);
        rfc_antiguo = "&rfc_antiguo=" + r[0]['rfc'];
        $('#curp').val(r[0]['curp']);
        $('#ingresoGob').val(r[0]['ingresoGob']);
        $('#ingresoSep').val(r[0]['ingresoSep']);
        $('#ingresoDgti').val(r[0]['ingresoDgti']);
        $('#observaciones').val(r[0]['observaciones']);
        $('#nombre').val(r[0]['nombre']);
        var linkRfc = document.querySelector("#form_eliminar_todo_docente");
        linkRfc.setAttribute("action", "actualizarDocente/actualizar/".concat(r[0]['rfc'])); //atributo,valor    

        var linkTabla = document.querySelector("#datosTabla");
        linkTabla.setAttribute("href", "actualizarDocente/datosTabla/".concat(r[0]['rfc']));
        document.getElementById("datosTabla").removeAttribute("disabled");
        ;
        document.getElementById("nombre").disabled = false;
        document.getElementById("apePaterno").disabled = false;
        document.getElementById("apeMaterno").disabled = false;
        document.getElementById("rfc").disabled = false;
        document.getElementById("curp").disabled = false;
        document.getElementById("ingresoGob").disabled = false;
        document.getElementById("ingresoSep").disabled = false;
        document.getElementById("ingresoDgti").disabled = false;
        document.getElementById("observaciones").disabled = false;
        document.getElementById("btn_actualizar").removeAttribute("disabled");
        document.getElementById("btn_eliminar_registro").removeAttribute("disabled");
      },
      error: function error(_error) {
        texto_error = "No hay registros";
        mensajeError('#alerta', texto_error);

        if (texto_error != "" && cont != 0) {
          irArriba();
        }
      }
    });
  });
  $('#btn_actualizar').click(function () {
    var cont = 0;
    var texto_error = "";

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
    } else if ($('#rfc').val().length == 13) {
      limpiarError('#asterisco_rfc', '#rfc');
    } else {
      alertaError('#asterisco_rfc', '#rfc');
      texto_error = "".concat(texto_error, " Campo RFC debe contener solamente 13 caracteres <br>");
      cont++;
    }

    if ($('#curp').val() == '') {
      alertaError('#asterisco_curp', '#curp');
      cont++;
    } else if ($('#curp').val().length == 18) {
      limpiarError('#asterisco_curp', '#curp');
    } else {
      alertaError('#asterisco_curp', '#curp');
      texto_error = "".concat(texto_error, " Campo CURP debe contener solamente 18 caracteres <br>");
      cont++;
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

    if (cont != 0) {
      texto_error = "Debes llenar todos los campos <br>".concat(texto_error);
    }

    mensajeError('#alerta', texto_error);

    if (texto_error != "" && cont != 0) {
      irArriba();
    }

    if (cont == 0) {
      limpiaMensajeError('#alerta'); //document.getElementById("unidad_"+0).innerHTML
      //console.log(informacion);
      //console.log($('#form_actualizar_docente').serialize());

      var form_url = $('#form_actualizar_docente').attr("action");
      $.ajax({
        type: 'PUT',
        url: form_url,
        data: $('#form_actualizar_docente').serialize() + rfc_antiguo,
        success: function success(r) {
          //console.log(r);
          $('#nombre').val(r['nombre']);
          $('#apePaterno').val(r['apePaterno']);
          $('#apeMaterno').val(r['apeMaterno']);
          $('#rfc').val(r['rfc']);
          $('#curp').val(r['curp']);
          $('#ingresoGob').val(r['ingresoGob']);
          $('#ingresoSep').val(r['ingresoSep']);
          $('#ingresoDgti').val(r['ingresoDgti']);
          $('#observaciones').val(r['observaciones']); //  window.location="actualizarDocente";
        }
      });
    }
  });
});
/******/ })()
;
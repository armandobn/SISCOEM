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
} //Evento teclado, solamente mayusculas


function eventoTeclado(id_elemento) {
  var entradaInput = document.getElementById(id_elemento);
  entradaInput.addEventListener('keyup', cambiarMayusculas);
}

function cambiarMayusculas(elemento) {
  var texto = elemento.target.value;
  elemento.target.value = texto.toUpperCase(); // console.log(texto);
  // console.log(`TIPO DE EVENTO: ${elemento.type}` );
}

var selectCategoria = document.querySelector('#categoria');
selectCategoria.addEventListener('change', function (event) {
  var select = event.target.value;
  var token = "_token=".concat($('input[name="_token"]').val());
  var info = "".concat(token, "&categoria=").concat(select);
  $.ajax({
    type: 'POST',
    url: "../registrarDocente/categoria",
    data: info,
    success: function success(r) {
      $('#puesto').val(r[0]["denominacion"]);
    }
  });
});
$gmx(document).ready(function () {
  eventoTeclado('nombre');
  eventoTeclado('apeMaterno');
  eventoTeclado('apePaterno');
  eventoTeclado('rfc');
  eventoTeclado('curp');
  eventoTeclado('plaza');
  eventoTeclado('observaciones'); //Scroll ir Arriba

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
  var rfc_antiguo = "";
  rfc_antiguo = "&rfc_antiguo=" + $('#rfc').val();
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

    if (texto_error != "" && cont != 0) {
      mensajeError('#alerta', texto_error);
      irArriba();
    }

    if (cont == 0) {
      limpiaMensajeError('#alerta');
      var form_url = $('#form_actualizar_docente').attr("action");
      $.ajax({
        type: 'POST',
        url: form_url,
        data: $('#form_actualizar_docente').serialize() + rfc_antiguo,
        success: function success(r) {
          $('#nombre').val(r['nombre']);
          $('#apePaterno').val(r['apePaterno']);
          $('#apeMaterno').val(r['apeMaterno']);
          $('#rfc').val(r['rfc']);
          $('#curp').val(r['curp']);
          $('#ingresoGob').val(r['ingresoGob']);
          $('#ingresoSep').val(r['ingresoSep']);
          $('#ingresoDgti').val(r['ingresoDgti']);
          $('#observaciones').val(r['observaciones']);
        }
      });
    }
  });
  $('#btn_agregar').click(function () {
    var pathname = window.location.pathname;
    var form_url = $('#form_agrega_datosTabla').attr("action");
    var puesto = "&puesto=".concat($('#puesto').val());
    $.ajax({
      type: 'POST',
      url: form_url,
      data: $('#form_agrega_datosTabla').serialize() + puesto,
      success: function success(r) {
        //console.log(r);
        window.location = "".concat(pathname);
      }
    });
  });
});
/******/ })()
;
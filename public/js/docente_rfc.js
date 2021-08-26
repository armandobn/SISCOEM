/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./resources/js/docente_rfc.js ***!
  \*************************************/
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

$gmx(document).ready(function () {
  eventoTeclado('buscar_rfc');
  eventoTeclado('buscar_curp'); //Scroll ir Arriba

  var obtener_pixeles_inicio = function obtener_pixeles_inicio() {
    return document.documentElement.scrollTop || document.body.scrollTop;
  };

  var irArriba = function irArriba() {
    if (obtener_pixeles_inicio() > 0) {
      requestAnimationFrame(irArriba);
      scrollTo(0, obtener_pixeles_inicio() - obtener_pixeles_inicio() / 30);
    }
  };

  $('#btn_buscar_rfc').click(function () {
    var texto_error = "";

    if ($('#buscar_rfc').val() == "") {
      alertaError('#asterisco_buscar_rfc', '#buscar_rfc');
      return null;
    } else if ($('#buscar_rfc').val().length == 13) {
      limpiarError('#asterisco_buscar_rfc', '#buscar_rfc');
      texto_error = "";
    } else {
      alertaError('#asterisco_buscar_rfc', '#buscar_rfc');
      texto_error = "".concat(texto_error, " Campo RFC debe contener solamente 13 caracteres <br>");
    }

    if (texto_error != "") {
      mensajeError('#alerta', texto_error);
      irArriba();
      return false;
    } else {
      limpiaMensajeError('#alerta');
    }

    var form_url = $('#form_buscar_rfc').attr("action");
    $.ajax({
      type: 'POST',
      url: form_url,
      data: $('#form_buscar_rfc').serialize(),
      success: function success(r) {
        console.log(r[0]['rfc']);
        window.location = "actualizarDocente/".concat(r[0]['rfc']);
      },
      error: function error(_error) {
        texto_error = "No hay registros";
        mensajeError('#alerta', texto_error);

        if (texto_error != "") {
          irArriba();
        }
      }
    });
  });
  $('#btn_buscar_curp').click(function () {
    var texto_error = "";

    if ($('#buscar_curp').val() == "") {
      alertaError('#asterisco_buscar_curp', '#buscar_curp');
      return null;
    } else if ($('#buscar_curp').val().length == 18) {
      limpiarError('#asterisco_buscar_curp', '#buscar_curp');
      texto_error = "";
    } else {
      alertaError('#asterisco_buscar_curp', '#buscar_curp');
      texto_error = "".concat(texto_error, " Campo CURP debe contener solamente 18 caracteres <br>");
    }

    if (texto_error != "") {
      mensajeError('#alerta', texto_error);
      irArriba();
      return false;
    } else {
      limpiaMensajeError('#alerta');
    }

    var form_url = $('#form_buscar_curp').attr("action");
    $.ajax({
      type: 'POST',
      url: form_url,
      data: $('#form_buscar_curp').serialize(),
      success: function success(r) {
        window.location = "actualizarDocente/".concat(r[0]['rfc']);
      },
      error: function error(_error2) {
        texto_error = "No hay registros";
        mensajeError('#alerta', texto_error);

        if (texto_error != "") {
          irArriba();
        }
      }
    });
  });
});
/******/ })()
;
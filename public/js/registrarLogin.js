/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./resources/js/registrarLogin.js ***!
  \****************************************/
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
  $('#btn_registrar').click(function () {
    alert("hola");
    var texto_error = "";

    if ($('#nombre').val() == "") {
      alertaError('#asterisco_nombre', '#nombre');
      texto_error = texto_error + 'El campo del nombre esta vacio <br>';
    } else {
      limpiarError('#asterisco_nombre', '#nombre');
      texto_error = "";
    }

    if ($('#primerApellido').val() == "") {
      alertaError('#asterisco_primerApellido', '#primerApellido');
      texto_error = texto_error + 'El campo primerApellido esta vacio <br>';
    } else {
      limpiarError('#asterisco_primerApellido', '#primerApellido');
      texto_error = "";
    }

    if ($('#segundoApellido').val() == "") {
      alertaError('#asterisco_segundoApellido', '#segundoApellido');
      texto_error = texto_error + 'El campo segundoApellido esta vacio <br>';
    } else {
      limpiarError('#asterisco_segundoApellido', '#segundoApellido');
      texto_error = "";
    }

    if ($('#email').val() == "") {
      alertaError('#asterisco_email', '#email');
      texto_error = texto_error + 'El campo email esta vacio <br>';
    } else {
      limpiarError('#asterisco_email', '#email');
      texto_error = "";
    }

    if ($('#password').val() == "") {
      alertaError('#asterisco_password', '#password');
      texto_error = texto_error + 'El campo Password esta vacio <br>';
    } else {
      limpiarError('#asterisco_password', '#password');
      texto_error = "";
    }

    if (texto_error != "") {
      mensajeError('#alerta', texto_error);
      return false;
    } else {
      limpiaMensajeError('#alerta');
    }

    var form_url = $('#formlogin').attr("action");
    $.ajax({
      type: 'post',
      url: form_url,
      data: $('#formlogin').serialize(),
      success: function success(r) {
        console.log(r);
      }
    });
  });
});
/******/ })()
;
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************!*\
  !*** ./resources/js/formatoCompatibilidad.js ***!
  \***********************************************/
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

  var selectCategoria = document.querySelector('#select_institucion');
  selectCategoria.addEventListener('change', function (event) {
    var select = event.target.value;
    console.log(select);

    if (select == "0") {
      // document.getElementById("select_institucion").disabled = true;
      document.getElementById("buscar_rfc").disabled = false;
      document.getElementById("btn_buscar_rfc").disabled = false;
      document.getElementById("btn_agregar_inst_uno").disabled = false;
      document.getElementById("btn_agregar_inst_dos").disabled = false;
      document.getElementById("fecha_inicio_inst_uno").disabled = false;
      $('#fecha_inicio_inst_uno').datepicker({
        changeYear: true
      });
      document.getElementById("fecha_termino_inst_uno").disabled = false;
      $('#fecha_termino_inst_uno').datepicker({
        changeYear: true
      });
      document.getElementById("fecha_inicio_inst_dos").disabled = false;
      $('#fecha_inicio_inst_dos').datepicker({
        changeYear: true
      });
      document.getElementById("fecha_termino_inst_dos").disabled = false;
      $('#fecha_termino_inst_dos').datepicker({
        changeYear: true
      });
    } else {
      // document.getElementById("select_institucion").disabled = true;
      document.getElementById("buscar_rfc").disabled = false;
      document.getElementById("btn_buscar_rfc").disabled = false;
      document.getElementById("btn_agregar_inst_uno").disabled = false;
      document.getElementById("btn_agregar_inst_dos").disabled = false;
      document.getElementById("fecha_inicio_inst_uno").disabled = false;
      $('#fecha_inicio_inst_uno').datepicker({
        changeYear: true
      });
      document.getElementById("fecha_termino_inst_uno").disabled = false;
      $('#fecha_termino_inst_uno').datepicker({
        changeYear: true
      });
      document.getElementById("fecha_inicio_inst_dos").disabled = false;
      $('#fecha_inicio_inst_dos').datepicker({
        changeYear: true
      });
      document.getElementById("fecha_termino_inst_dos").disabled = false;
      $('#fecha_termino_inst_dos').datepicker({
        changeYear: true
      });
    }
  });
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

    var form_url = $('#form_buscar_rfc').attr("action"); // $.ajax({
    //   type: 'POST',
    //   url: form_url,
    //   data: $('#form_buscar_rfc').serialize(),
    //   success: function (r) {
    //     console.log(r);
    //   },error: function (error) {
    //     texto_error="No hay registros"
    //     mensajeError('#alerta',texto_error);
    //     if(texto_error!=""){
    //       irArriba();
    //     }
    //   }
    // });
  });
  $('#btn_registrar').click(function () {
    alert("registrar");
  });
  $('#btn_salir').click(function () {
    alert("alerta");
  });
});
/******/ })()
;
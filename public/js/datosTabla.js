/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./resources/js/datosTabla.js ***!
  \************************************/
//Evento teclado, solamente mayusculas
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
    url: "../../../registrarDocente/categoria",
    data: info,
    success: function success(r) {
      $('#puesto').val(r[0]["denominacion"]);
    }
  });
});
$gmx(document).ready(function () {
  eventoTeclado('plaza');
  $('#btn_actualizar').click(function () {
    var form_url = $('#form_actualizar_tabla').attr("action");
    var puesto = "&puesto=".concat($('#puesto').val());
    $.ajax({
      type: 'POST',
      url: form_url,
      data: $('#form_actualizar_tabla').serialize() + puesto,
      success: function success(r) {
        window.location = "../../".concat(r[0]['rfc']);
      }
    });
  });
});
/******/ })()
;
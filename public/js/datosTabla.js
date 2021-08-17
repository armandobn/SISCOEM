/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./resources/js/datosTabla.js ***!
  \************************************/
var selectCategoria = document.querySelector('#categoria');
selectCategoria.addEventListener('change', function (event) {
  var select = event.target.value; //alert( `Te gusta el sabor ${select}`);

  if ($('#cat').val() == "0") {
    var token = "_token=".concat($('input[name="_token"]').val());
    var info = "".concat(token, "&categoria=").concat(select);
    $.ajax({
      type: 'POST',
      url: "../../registrarDocente/categoria",
      data: info,
      success: function success(r) {
        //console.log(r[0]["denominacion"]);
        $('#puesto').val(r[0]["denominacion"]);
      }
    });
  } else {
    var _token = "_token=".concat($('input[name="_token"]').val());

    var _info = "".concat(_token, "&categoria=").concat(select);

    $.ajax({
      type: 'POST',
      url: "../../../registrarDocente/categoria",
      data: _info,
      success: function success(r) {
        //console.log(r[0]["denominacion"]);
        $('#puesto').val(r[0]["denominacion"]);
      }
    });
  }
});
$gmx(document).ready(function () {
  $('#btn_actualizar').click(function () {
    console.log($('#form_actualizar_tabla').serialize());
    var form_url = $('#form_actualizar_tabla').attr("action");
    var puesto = "&puesto=".concat($('#puesto').val()); //console.log(puesto);

    $.ajax({
      type: 'PUT',
      url: form_url,
      data: $('#form_actualizar_tabla').serialize() + puesto,
      success: function success(r) {
        // console.log(r);
        // console.log(r['datos'][1]);
        // console.log(r['datos'][0][0]['rfc']);
        if (r['datos'][1] == 1) {
          window.location = "../".concat(r['datos'][0][0]['rfc']);
        }
      }
    });
  });
  $('#btn_agregar').click(function () {
    //console.log($('#form_agrega_datosTabla').serialize());
    var form_url = $('#form_agrega_datosTabla').attr("action");
    var puesto = "&puesto=".concat($('#puesto').val());
    $.ajax({
      type: 'POST',
      url: form_url,
      data: $('#form_agrega_datosTabla').serialize() + puesto,
      success: function success(r) {
        // console.log(r);
        // console.log(r['datos'][1]);
        // console.log(r['datos'][0]);
        if (r['datos'][1] == 1) {
          window.location = "".concat(r['datos'][0]);
        }
      }
    });
  });
});
/******/ })()
;
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./resources/js/listaChecable.js ***!
  \***************************************/
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

function obtenerDatos() {
  /*
     0 [Institucion 1] , [Institucion 2]
     00 [[cuestionario 1], [cuestionario 2], [cuestionario 2]] , [cuestionario 1], [cuestionario 2], [cuestionario 2]] ]    
   */
  var tabla = "";
  var institucion = [[[], [], []], [[], [], []]];

  for (var z = 0; z < 2; z++) {
    if (z == 0) {
      for (var k = 1; k < 4; k++) {
        for (var i = 1; i < 3; i++) {
          var elemento = document.getElementsByName("institucion_uno_".concat(k, "_").concat(i));

          for (var j = 0; j < elemento.length; j++) {
            if (elemento[j].checked) {
              institucion[z][k - 1][i - 1] = elemento[j].value;
              tabla = tabla + "&institucion_uno[".concat(z, "][").concat(k - 1, "][").concat(i - 1, "]=").concat(elemento[j].value);
            }
          }
        }

        if (k == 3) {
          for (var a = 1; a < 11; a++) {
            var _elemento = document.getElementsByName("institucion_uno_".concat(k, "_").concat(a));

            for (var _j = 0; _j < _elemento.length; _j++) {
              if (_elemento[_j].checked) {
                institucion[z][k - 1][a - 1] = _elemento[_j].value;
                tabla = tabla + "&institucion_uno[".concat(z, "][").concat(k - 1, "][").concat(a - 1, "]=").concat(_elemento[_j].value);
              }
            }
          }
        }
      }
    } else if (z == 1) {
      for (var _k = 1; _k < 4; _k++) {
        for (var _i = 1; _i < 3; _i++) {
          var _elemento2 = document.getElementsByName("institucion_dos_".concat(_k, "_").concat(_i));

          for (var _j2 = 0; _j2 < _elemento2.length; _j2++) {
            if (_elemento2[_j2].checked) {
              institucion[z][_k - 1][_i - 1] = _elemento2[_j2].value;
              tabla = tabla + "&institucion_dos[".concat(z, "][").concat(_k - 1, "][").concat(_i - 1, "]=").concat(_elemento2[_j2].value);
            }
          }
        }

        if (_k == 3) {
          for (var _a = 1; _a < 11; _a++) {
            var _elemento3 = document.getElementsByName("institucion_dos_".concat(_k, "_").concat(_a));

            for (var _j3 = 0; _j3 < _elemento3.length; _j3++) {
              if (_elemento3[_j3].checked) {
                institucion[z][_k - 1][_a - 1] = _elemento3[_j3].value;
                tabla = tabla + "&institucion_dos[".concat(z, "][").concat(_k - 1, "][").concat(_a - 1, "]=").concat(_elemento3[_j3].value);
              }
            }
          }
        }
      }
    }
  } // console.log(institucion);
  // console.log(tabla);


  return tabla;
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
  }; //Fecha de institucion uno y dos que se creo el documentos


  var actual = new Date();
  fecha = "".concat(actual.getDate(), "/").concat(actual.getMonth() + 1, "/").concat(actual.getFullYear());
  $('#institutoUnoCalendarYear').val(fecha);
  $('#institutoDosCalendarYear').val(fecha);
  $('#btn_completado').click(function () {
    obtenerDatos();
    var texto_error = "";

    if ($('#inst_uno_analista').val() == "" || $('#inst_dos_analista').val() == "") {
      var asterisco = document.querySelector('#asterisco_analista');

      if (asterisco.classList.contains("form-text-error") == false) {
        // console.log(asterisco.classList.contains("form-text-error"));
        asterisco.classList.add("form-text-error");

        if ($('#inst_uno_analista').val() == "") {
          var element_padre = document.querySelector('#inst_uno_analista');
          element_padre.classList.add("form-control-error"); // console.log(etiqueta_padre_rfc.parentElement);

          var contenedor_element = element_padre.parentElement;
          var item_small = document.createElement("SMALL"); //todo en mayuscula

          var textDelItem = document.createTextNode("Este campo es obligatorio");
          item_small.appendChild(textDelItem);
          item_small.classList.add("form-text");
          item_small.classList.add("form-text-error");
          contenedor_element.appendChild(item_small); //console.log(item);

          texto_error = "".concat(texto_error, " Falta Campo Nombre del analista de Insititucion 1 <br>");
        } else {}

        if ($('#inst_dos_analista').val() == "") {
          var _element_padre = document.querySelector('#inst_dos_analista');

          _element_padre.classList.add("form-control-error"); // console.log(etiqueta_padre_rfc.parentElement);


          var _contenedor_element = _element_padre.parentElement;

          var _item_small = document.createElement("SMALL"); //todo en mayuscula


          var _textDelItem = document.createTextNode("Este campo es obligatorio");

          _item_small.appendChild(_textDelItem);

          _item_small.classList.add("form-text");

          _item_small.classList.add("form-text-error");

          _contenedor_element.appendChild(_item_small); //console.log(item);


          texto_error = "".concat(texto_error, " Falta Campo Nombre del analista de Insititucion 1 <br>");
        } else {}
      }
    } else {
      var _asterisco = document.querySelector('#asterisco_analista');

      if (_asterisco.classList.contains("form-text-error") == true) {
        var _asterisco2 = document.querySelector('#asterisco_analista');

        _asterisco2.classList.remove("form-text-error");

        var element_hijo_uno = document.querySelector('#inst_uno_analista');
        element_hijo_uno.classList.remove("form-control-error");
        var contenedor_uno = element_hijo_uno.parentElement;
        var small_uno = contenedor_uno.querySelector("SMALL");
        contenedor_uno.removeChild(small_uno);
        var element_hijo_dos = document.querySelector('#inst_dos_analista');
        element_hijo_dos.classList.remove("form-control-error");
        var contenedor_dos = element_hijo_dos.parentElement;
        var small_dos = contenedor_dos.querySelector("small");
        contenedor_dos.removeChild(small_dos);
      }

      texto_error = "";

      if (texto_error != "") {
        mensajeError('#alerta', texto_error);
        irArriba();
        return false;
      } else {
        limpiaMensajeError('#alerta');
      }

      var tabla = obtenerDatos();
      var datos = "\n      &fecha_inst_uno=".concat($('#institutoUnoCalendarYear').val(), "\n      &fecha_inst_dos=").concat($('#institutoDosCalendarYear').val(), "\n      $analista_inst_uno=").concat($('#inst_uno_analista').val(), "\n      $analista_inst_dos=").concat($('#inst_dos_analista').val(), "\n      ");
      var form_url = $('#form_checkList').attr("action");
      var token = "_token=".concat($('input[name="_token"]').val());
      $.ajax({
        type: 'POST',
        data: token + tabla + datos,
        url: form_url,
        success: function success(r) {
          console.log(r);
        }
      });
    }
  });
});
/******/ })()
;
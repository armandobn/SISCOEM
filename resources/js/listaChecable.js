//Genera los mensajes de Error
function alertaError(id_asterisco, id_element) {
  const asterisco = document.querySelector(id_asterisco);

  if (asterisco.classList.contains("form-text-error") == false) {

    // console.log(asterisco.classList.contains("form-text-error"));
    asterisco.classList.add("form-text-error");

    const element_padre = document.querySelector(id_element);
    element_padre.classList.add("form-control-error");

    // console.log(etiqueta_padre_rfc.parentElement);
    const contenedor_element = element_padre.parentElement;
    const item_small = document.createElement("SMALL");//todo en mayuscula
    const textDelItem = document.createTextNode("Este campo es obligatorio");
    item_small.appendChild(textDelItem);
    item_small.classList.add("form-text");
    item_small.classList.add("form-text-error");
    contenedor_element.appendChild(item_small);
    //console.log(item);
  }


}

//Elimina el mensaje de Error
function limpiarError(id_asterisco, id_elemento) {

  const asterisco = document.querySelector(id_asterisco);

  if (asterisco.classList.contains("form-text-error") == true) {
    asterisco.classList.remove("form-text-error");
    const element_hijo = document.querySelector(id_elemento);
    element_hijo.classList.remove("form-control-error");

    const contenedor = element_hijo.parentElement;
    const small = contenedor.querySelector("small");
    contenedor.removeChild(small);

  }


}

//Genera mensaje principal Error
function mensajeError(id_alerta, mensaje) {
  const alerta = document.querySelector(id_alerta);
  if (alerta.classList.contains("alert-danger") == false) {
    alerta.classList.add("alert-danger");
    $(id_alerta).html(mensaje);

  } else {
    $(id_alerta).html(mensaje);
  }

}

//Elimina el mensaje de Error principal
function limpiaMensajeError(id_alerta) {
  const alerta = document.querySelector(id_alerta);
  if (alerta.classList.contains("alert-danger") == true) {
    alerta.classList.remove("alert-danger");
    alerta.innerHTML = "";
  }

}

//Elimina el ultimo elemento
function removerUltimoElemento(base) {
  const contenedor = document.querySelector(base);
  const tr_antiguo = contenedor.lastChild;
  contenedor.removeChild(tr_antiguo);
}

//Evento teclado, solamente mayusculas
function eventoTeclado(id_elemento) {
  const entradaInput = document.getElementById(id_elemento);
  entradaInput.addEventListener('keyup', cambiarMayusculas);
}
function cambiarMayusculas(elemento) {
  let texto = elemento.target.value;
  elemento.target.value = texto.toUpperCase();
  // console.log(texto);
  // console.log(`TIPO DE EVENTO: ${elemento.type}` );
}


function obtenerDatos() {
  /*
     0 [Institucion 1] , [Institucion 2]
     00 [[cuestionario 1], [cuestionario 2], [cuestionario 2]] , [cuestionario 1], [cuestionario 2], [cuestionario 2]] ]    
   */
  let tabla="";
  let institucion = [[[], [], []], [[], [], []]];
  for (let z = 0; z < 2; z++) {
    if (z == 0) {
      for (let k = 1; k < 4; k++) {
        for (let i = 1; i < 3; i++) {
          let elemento = document.getElementsByName(`institucion_uno_${k}_${i}`);
          for (let j = 0; j < elemento.length; j++) {
            if (elemento[j].checked) {
              institucion[z][k - 1][i - 1] = elemento[j].value;
              tabla=tabla+`&institucion_uno[${z}][${k-1}][${i-1}]=${elemento[j].value}`;
            }
          }
        }
        if (k == 3) {
          for (let a = 1; a < 11; a++) {
            let elemento = document.getElementsByName(`institucion_uno_${k}_${a}`);
            for (let j = 0; j < elemento.length; j++) {
              if (elemento[j].checked) {
                institucion[z][k - 1][a - 1] = elemento[j].value;
                tabla=tabla+`&institucion_uno[${z}][${k-1}][${a-1}]=${elemento[j].value}`;
              }
            }
          }
        }
      }
    } else if (z == 1) {
      for (let k = 1; k < 4; k++) {
        for (let i = 1; i < 3; i++) {
          let elemento = document.getElementsByName(`institucion_dos_${k}_${i}`);
          for (let j = 0; j < elemento.length; j++) {
            if (elemento[j].checked) {
              institucion[z][k - 1][i - 1] = elemento[j].value;
              tabla=tabla+`&institucion_dos[${z}][${k-1}][${i-1}]=${elemento[j].value}`;
            }
          }
        }
        if (k == 3) {
          for (let a = 1; a < 11; a++) {
            let elemento = document.getElementsByName(`institucion_dos_${k}_${a}`);
            for (let j = 0; j < elemento.length; j++) {
              if (elemento[j].checked) {
                institucion[z][k - 1][a - 1] = elemento[j].value;
                tabla=tabla+`&institucion_dos[${z}][${k-1}][${a-1}]=${elemento[j].value}`;
              }
            }
          }
        }
      }
    }
  }

  // console.log(institucion);
  // console.log(tabla);
  return tabla;
}

$gmx(document).ready(function () {

   //Scroll ir Arriba
   const obtener_pixeles_inicio = () => document.documentElement.scrollTop || document.body.scrollTop
   const irArriba = () => {
     if (obtener_pixeles_inicio() > 0) {
       requestAnimationFrame(irArriba)
       scrollTo(0, obtener_pixeles_inicio() - (obtener_pixeles_inicio() / 30))
 
     }
   }
   
  //Fecha de institucion uno y dos que se creo el documentos
  let actual = new Date();
  fecha = `${actual.getDate()}/${actual.getMonth() + 1}/${actual.getFullYear()}`;
  $('#institutoUnoCalendarYear').val(fecha);
  $('#institutoDosCalendarYear').val(fecha);

  $('#btn_completado').click(function () {
    obtenerDatos();

    if ($('#inst_uno_analista').val() == "" || $('#inst_dos_analista').val() == "") {
      const asterisco = document.querySelector('#asterisco_analista');

      if (asterisco.classList.contains("form-text-error") == false) {

        // console.log(asterisco.classList.contains("form-text-error"));
        asterisco.classList.add("form-text-error");

        if ($('#inst_uno_analista').val() == "") {
          const element_padre = document.querySelector('#inst_uno_analista');
          element_padre.classList.add("form-control-error");

          // console.log(etiqueta_padre_rfc.parentElement);
          const contenedor_element = element_padre.parentElement;
          const item_small = document.createElement("SMALL");//todo en mayuscula
          const textDelItem = document.createTextNode("Este campo es obligatorio");
          item_small.appendChild(textDelItem);
          item_small.classList.add("form-text");
          item_small.classList.add("form-text-error");
          contenedor_element.appendChild(item_small);
          //console.log(item);
        } else {

        }
        if ($('#inst_dos_analista').val() == "") {
          const element_padre = document.querySelector('#inst_dos_analista');
          element_padre.classList.add("form-control-error");

          // console.log(etiqueta_padre_rfc.parentElement);
          const contenedor_element = element_padre.parentElement;
          const item_small = document.createElement("SMALL");//todo en mayuscula
          const textDelItem = document.createTextNode("Este campo es obligatorio");
          item_small.appendChild(textDelItem);
          item_small.classList.add("form-text");
          item_small.classList.add("form-text-error");
          contenedor_element.appendChild(item_small);
          //console.log(item);
        } else {

        }

      }

    } else {
      const asterisco = document.querySelector('#asterisco_analista');
      asterisco.classList.remove("form-text-error");

      const element_hijo_uno = document.querySelector('#inst_uno_analista');
      element_hijo_uno.classList.remove("form-control-error");
      const contenedor_uno = element_hijo_uno.parentElement;
      const small_uno = contenedor_uno.querySelector("SMALL");
      contenedor_uno.removeChild(small_uno);

      const element_hijo_dos = document.querySelector('#inst_dos_analista');
      element_hijo_dos.classList.remove("form-control-error");
      const contenedor_dos = element_hijo_dos.parentElement;
      const small_dos = contenedor_dos.querySelector("small");
      contenedor_dos.removeChild(small_dos);

      
      let tabla=obtenerDatos();

      let datos=`
      &fecha_inst_uno=${$('#institutoUnoCalendarYear').val()}
      &fecha_inst_dos=${$('#institutoDosCalendarYear').val()}
      $analista_inst_uno=${$('#inst_uno_analista').val()}
      $analista_inst_dos=${$('#inst_dos_analista').val()}
      `;
      
      let form_url = $('#form_checkList').attr("action");
      let token = `_token=${$('input[name="_token"]').val()}`;

      $.ajax({
        type: 'POST',
        data: token+tabla+datos,
        url: form_url,
        success:function(r){
          console.log(r)
        }
      });

    }


  });
});
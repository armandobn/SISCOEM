
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

const selectCategoria = document.querySelector('#categoria');
selectCategoria.addEventListener('change', (event) => {
    let select=event.target.value;
    let token=`_token=${$('input[name="_token"]').val()}`;
    let info=`${token}&categoria=${select}`;
    $.ajax({
      type:'POST',
      url: "../registrarDocente/categoria",
      data: info,
      success:function(r){
       $('#puesto').val(r[0]["denominacion"]);
      }

    });

});

$gmx(document).ready(function () {


  //Scroll ir Arriba
  const obtener_pixeles_inicio = () => document.documentElement.scrollTop || document.body.scrollTop
  const irArriba = () => {
    if (obtener_pixeles_inicio() > 0) {
      requestAnimationFrame(irArriba)
      scrollTo(0, obtener_pixeles_inicio() - (obtener_pixeles_inicio() / 30))

    }
  }

  $('#ingresoGob').datepicker({ changeYear: true });
  $('#ingresoSep').datepicker({ changeYear: true });
  $('#ingresoDgti').datepicker({ changeYear: true });
  let rfc_antiguo="";
  rfc_antiguo="&rfc_antiguo="+$('#rfc').val();
  $('#btn_actualizar').click(function () {
    let cont = 0;
    let texto_error = "";
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
      texto_error = `${texto_error} Campo RFC debe contener solamente 13 caracteres <br>`;
      cont++;
    }
    if ($('#curp').val() == '') {
      alertaError('#asterisco_curp', '#curp');
      cont++;
    } else if ($('#curp').val().length == 18) {
      limpiarError('#asterisco_curp', '#curp');
    } else {
      alertaError('#asterisco_curp', '#curp');
      texto_error = `${texto_error} Campo CURP debe contener solamente 18 caracteres <br>`;
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
      texto_error = `Debes llenar todos los campos <br>${texto_error}`;
    }

    
    if (texto_error != "" && cont != 0) {
      mensajeError('#alerta', texto_error);
      irArriba();
    }

    if (cont == 0) {

      limpiaMensajeError('#alerta');
      let form_url = $('#form_actualizar_docente').attr("action");

      $.ajax({
        type: 'POST',
        url: form_url,
        data: $('#form_actualizar_docente').serialize() + rfc_antiguo,
        success: function (r) {
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

  $('#btn_agregar').click(function(){
    let pathname = window.location.pathname;
    let form_url=$('#form_agrega_datosTabla').attr("action");
    let puesto=`&puesto=${$('#puesto').val()}`;
    $.ajax({
      type:'POST',
      url: form_url,
      data: $('#form_agrega_datosTabla').serialize()+puesto,
      success:function(r){
        //console.log(r);
        window.location=`${pathname}`;
        

      }

    });

  });


});
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

$gmx(document).ready(function () {

  //Scroll ir Arriba
  const obtener_pixeles_inicio = () => document.documentElement.scrollTop || document.body.scrollTop
  const irArriba = () => {
    if (obtener_pixeles_inicio() > 0) {
      requestAnimationFrame(irArriba)
      scrollTo(0, obtener_pixeles_inicio() - (obtener_pixeles_inicio() / 30))

    }
  }

  const selectCategoria = document.querySelector('#select_institucion');
  selectCategoria.addEventListener('change', (event) => {
    let select = event.target.value;
    console.log(select);
    if (select == "0") {
      // document.getElementById("select_institucion").disabled = true;
      document.getElementById("buscar_rfc").disabled = false;
      document.getElementById("btn_buscar_rfc").disabled = false;
      document.getElementById("btn_agregar_inst_uno").disabled = false;
      document.getElementById("btn_agregar_inst_dos").disabled = false;
      document.getElementById("fecha_inicio_inst_uno").disabled = false;
      $('#fecha_inicio_inst_uno').datepicker({ changeYear: true });
      document.getElementById("fecha_termino_inst_uno").disabled = false;
      $('#fecha_termino_inst_uno').datepicker({ changeYear: true });
      document.getElementById("fecha_inicio_inst_dos").disabled = false;
      $('#fecha_inicio_inst_dos').datepicker({ changeYear: true });
      document.getElementById("fecha_termino_inst_dos").disabled = false;
      $('#fecha_termino_inst_dos').datepicker({ changeYear: true });
    } else {
      // document.getElementById("select_institucion").disabled = true;
      document.getElementById("buscar_rfc").disabled = false;
      document.getElementById("btn_buscar_rfc").disabled = false;
      document.getElementById("btn_agregar_inst_uno").disabled = false;
      document.getElementById("btn_agregar_inst_dos").disabled = false;
      document.getElementById("fecha_inicio_inst_uno").disabled = false;
      $('#fecha_inicio_inst_uno').datepicker({ changeYear: true });
      document.getElementById("fecha_termino_inst_uno").disabled = false;
      $('#fecha_termino_inst_uno').datepicker({ changeYear: true });
      document.getElementById("fecha_inicio_inst_dos").disabled = false;
      $('#fecha_inicio_inst_dos').datepicker({ changeYear: true });
      document.getElementById("fecha_termino_inst_dos").disabled = false;
      $('#fecha_termino_inst_dos').datepicker({ changeYear: true });
      
    }

  });

  $('#btn_buscar_rfc').click(function () {
    let texto_error="";
    if ($('#buscar_rfc').val() == "") {
      alertaError('#asterisco_buscar_rfc', '#buscar_rfc');
      return null;
    } else if ($('#buscar_rfc').val().length == 13) {
      limpiarError('#asterisco_buscar_rfc', '#buscar_rfc');
      texto_error="";
    } else {
      alertaError('#asterisco_buscar_rfc', '#buscar_rfc');
      texto_error=`${texto_error} Campo RFC debe contener solamente 13 caracteres <br>`;
      
    }

    if(texto_error!=""){
      mensajeError('#alerta',texto_error);
      irArriba();
      return false;
    }else{
      limpiaMensajeError('#alerta');
    }
    
    let form_url = $('#form_buscar_rfc').attr("action");
    // $.ajax({
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
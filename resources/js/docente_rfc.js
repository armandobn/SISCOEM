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
function mensajeError(id_alerta,mensaje){
  const alerta = document.querySelector(id_alerta);
  if (alerta.classList.contains("alert-danger") == false) {
    alerta.classList.add("alert-danger");
    $(id_alerta).html(mensaje);
    
  }else{
    $(id_alerta).html(mensaje);
  }
  
}

//Elimina el mensaje de Error principal
function limpiaMensajeError(id_alerta){
  const alerta = document.querySelector(id_alerta);
  if (alerta.classList.contains("alert-danger") == true) {
    alerta.classList.remove("alert-danger");
    alerta.innerHTML="";
  }
  
}

$gmx(document).ready(function () {

  //Scroll ir Arriba
  const obtener_pixeles_inicio = ()=> document.documentElement.scrollTop || document.body.scrollTop
  const irArriba = () => {
   if(obtener_pixeles_inicio() > 0){
     requestAnimationFrame(irArriba)
     scrollTo(0, obtener_pixeles_inicio() - (obtener_pixeles_inicio() / 30))

   }
 }

 
  $('#btn_buscar_rfc').click(function () {

    if ($('#buscar_rfc').val() == "") {
      alertaError('#asterisco_buscar_rfc', '#buscar_rfc');
      return null;
    } else if ($('#buscar_rfc').val().length == 13) {
      limpiarError('#asterisco_buscar_rfc', '#buscar_rfc');
    } else {
      alertaError('#asterisco_buscar_rfc', '#buscar_rfc');
      return null;
    }

    //console.log($('#form_buscar_rfc').serialize());
    let form_url = $('#form_buscar_rfc').attr("action");
    //'actualizarDocente/buscarRfc'
    $.ajax({
      type: 'POST',
      url: form_url,
      data: $('#form_buscar_rfc').serialize(),
      success: function (r) {
        console.log(r[0]['rfc']);
        window.location=`actualizarDocente/${r[0]['rfc']}`;
        
      },error: function (error) {
        texto_error="No hay registros"
        mensajeError('#alerta',texto_error);
        if(texto_error!=""){
          irArriba();
        }
      }
    });




  });

});
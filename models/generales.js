//Genera alerta de Error en input
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

//Elimina alerta de Error en input
function limpiarAlertaError(id_asterisco, id_elemento) {

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
function eventoTecladoMayusculas(id_elemento) {
  const entradaInput = document.getElementById(id_elemento);
  entradaInput.addEventListener('keyup', cambiarMayusculas);
}
//cambia la letra a Mayusculas
function cambiarMayusculas(elemento) {
  let texto = elemento.target.value;
  elemento.target.value = texto.toUpperCase();
  // console.log(texto);
  // console.log(`TIPO DE EVENTO: ${elemento.type}` );
}
//Scroll ir Arriba
const obtener_pixeles_inicio = () => document.documentElement.scrollTop || document.body.scrollTop
const irArriba = () => {
  if (obtener_pixeles_inicio() > 0) {
    requestAnimationFrame(irArriba)
    scrollTo(0, obtener_pixeles_inicio() - (obtener_pixeles_inicio() / 30))

  }
}

// const selectCategoria = document.querySelector('#categoria');
// selectCategoria.addEventListener('change', (event) => {
//   let select = event.target.value;
//   let token = `_token=${$('input[name="_token"]').val()}`;
//   let info = `${token}&categoria=${select}`;
//   $.ajax({
//     type: 'POST',
//     url: "categoria",
//     data: info,
//     success: function (r) {
//       $('#puesto').val(r[0]["denominacion"]);
//     }

//   });

// });


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

const selectCategoria = document.querySelector('#categoria');
selectCategoria.addEventListener('change', (event) => {
  let select = event.target.value;
  let token = `_token=${$('input[name="_token"]').val()}`;
  let info = `${token}&categoria=${select}`;
  $.ajax({
    type: 'POST',
    url: "categoria",
    data: info,
    success: function (r) {
      $('#puesto').val(r[0]["denominacion"]);
    }

  });

});

$gmx(document).ready(function () {

  eventoTeclado('nombre');
  eventoTeclado('apeMaterno');
  eventoTeclado('apePaterno');
  eventoTeclado('rfc');
  eventoTeclado('curp');
  eventoTeclado('plaza');
  eventoTeclado('observaciones');

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


  const contenedor_tabla_uno = [
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []]
  ];

  $('#btn_agregar').click(function () {

    let unidad = document.getElementById("unidad").value;
    let sub_unidad = document.getElementById("sub_unidad").value;
    let categoria = document.getElementById("categoria").value;
    let horas = document.getElementById("horas").value;
    let plaza = $("#plaza").val();
    let motivo = document.getElementById("motivo").value;
    let puesto = document.getElementById("puesto").value;
    let cont = 0;
    if (document.getElementById("unidad").value == '') {
      alertaError('#asterisco_unidad', '#unidad');
      cont++;
    } else {
      limpiarError('#asterisco_unidad', '#unidad');
    }
    if (document.getElementById("sub_unidad").value == '') {
      alertaError('#asterisco_sub_unidad', '#sub_unidad');
      cont++;
    } else {
      limpiarError('#asterisco_sub_unidad', '#sub_unidad');
    }
    if (document.getElementById("categoria").value == '') {
      alertaError('#asterisco_categoria', '#categoria');
      cont++;
    } else {
      limpiarError('#asterisco_categoria', '#categoria');
    }
    if (document.getElementById("horas").value == '') {
      alertaError('#asterisco_horas', '#horas');
      cont++;
    } else {
      limpiarError('#asterisco_horas', '#horas');
    }
    if ($("#plaza").val() == '') {
      alertaError('#asterisco_plaza', '#plaza');
      cont++;
    } else {
      limpiarError('#asterisco_plaza', '#plaza');
    }
    if (document.getElementById("motivo").value == '') {
      alertaError('#asterisco_motivo', '#motivo');
      cont++;
    } else {
      limpiarError('#asterisco_motivo', '#motivo');
    }
    if ($('#puesto').val() == '') {
      alertaError('#asterisco_puesto', '#puesto');
      cont++;
    } else {
      limpiarError('#asterisco_puesto', '#puesto');
    }

    if (cont == 0) {
      const contenedor_tabla = document.querySelector("#tabla_uno");
      const hijos = contenedor_tabla.children;
      let cont = hijos.length;

      contenedor_tabla_uno[cont][0][0] = document.createElement("TR");
      contenedor_tabla_uno[cont][0][0].setAttribute("id", "tr_" + cont);
      contenedor_tabla.appendChild(contenedor_tabla_uno[cont][0][0]);

      contenedor_tabla_uno[cont][0][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][0][2] = document.createTextNode(unidad);
      contenedor_tabla_uno[cont][0][1].setAttribute("id", "unidad_" + cont);
      contenedor_tabla_uno[cont][0][1].setAttribute("name", "unidad[]");
      contenedor_tabla_uno[cont][0][1].appendChild(contenedor_tabla_uno[cont][0][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][0][1]);


      contenedor_tabla_uno[cont][1][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][1][2] = document.createTextNode(sub_unidad);
      contenedor_tabla_uno[cont][1][1].setAttribute("id", "sub_unidad_" + cont);
      contenedor_tabla_uno[cont][1][1].appendChild(contenedor_tabla_uno[cont][1][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][1][1]);

      contenedor_tabla_uno[cont][2][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][2][2] = document.createTextNode(categoria);
      contenedor_tabla_uno[cont][2][1].setAttribute("id", "categoria_" + cont);
      contenedor_tabla_uno[cont][2][1].appendChild(contenedor_tabla_uno[cont][2][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][2][1]);

      contenedor_tabla_uno[cont][3][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][3][2] = document.createTextNode(horas);
      contenedor_tabla_uno[cont][3][1].setAttribute("id", "horas_" + cont);
      contenedor_tabla_uno[cont][3][1].appendChild(contenedor_tabla_uno[cont][3][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][3][1]);

      contenedor_tabla_uno[cont][4][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][4][2] = document.createTextNode(plaza);
      contenedor_tabla_uno[cont][4][1].setAttribute("id", "plaza_" + cont);
      contenedor_tabla_uno[cont][4][1].appendChild(contenedor_tabla_uno[cont][4][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][4][1]);

      contenedor_tabla_uno[cont][5][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][5][2] = document.createTextNode(motivo);
      contenedor_tabla_uno[cont][5][1].setAttribute("id", "motivo_" + cont);
      contenedor_tabla_uno[cont][5][1].appendChild(contenedor_tabla_uno[cont][5][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][5][1]);

      contenedor_tabla_uno[cont][6][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][6][2] = document.createTextNode(puesto);
      contenedor_tabla_uno[cont][6][1].setAttribute("id", "puesto_" + cont);
      contenedor_tabla_uno[cont][6][1].appendChild(contenedor_tabla_uno[cont][6][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][6][1]);

      $('#unidad').prop('selectedIndex', 0);
      $('#sub_unidad').prop('selectedIndex', 0);
      $('#categoria').prop('selectedIndex', 0);
      $('#horas').prop('selectedIndex', 0);
      $("#plaza").val("");
      $('#motivo').prop('selectedIndex', 0);
      $('#puesto').val("");

    }



  });

  $('#btn_eliminar').click(function () {
    removerUltimoElemento("#tabla_uno");
  });

  $('#btn_registrar').click(function () {

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

    const contenedor_tabla = document.querySelector("#tabla_uno");
    const hijos = contenedor_tabla.children;
    let conta = hijos.length;
    let informacion = "";
    for (let i = 0; i < conta; i++) {
      informacion = informacion + `
        &unidad[${i}]=${document.getElementById("unidad_" + i).innerHTML}
        &sub_unidad[${i}]=${document.getElementById("sub_unidad_" + i).innerHTML}
        &categoria[${i}]=${document.getElementById("categoria_" + i).innerHTML}
        &horas[${i}]=${document.getElementById("horas_" + i).innerHTML}
        &plaza[${i}]=${document.getElementById("plaza_" + i).innerHTML}
        &motivo[${i}]=${document.getElementById("motivo_" + i).innerHTML}
        &puesto[${i}]=${document.getElementById("puesto_" + i).innerHTML}
        `;

    }

    if (informacion == "") {
      alertaError("#asterisco_tabla", "#tabla");
      const titulo = document.querySelector("#tabla_base");
      titulo.style.borderColor = "#D0021B";
      titulo.style.borderTopWidth = "2px";
      titulo.style.borderRightWidth = "2px";
      titulo.style.borderBottomWidth = "3px";
      titulo.style.borderLeftWidth = "2px";
      texto_error = `${texto_error} Campo Tabla debe contener almenos 1 dato <br>`;
      cont++;
    } else {
      limpiarError("#asterisco_tabla", "#tabla");
      const titulo = document.querySelector("#tabla_base");
      titulo.style.borderColor = "#DDD";
      titulo.style.borderTopWidth = "1px";
      titulo.style.borderRightWidth = "1px";
      titulo.style.borderBottomWidth = "1px";
      titulo.style.borderLeftWidth = "1px";
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
      let form_url = $('#form_registrar_docente').attr("action");

      $.ajax({
        type: 'POST',
        url: form_url,
        data: $('#form_registrar_docente').serialize() + informacion,
        success: function (r) {
          $('#unidad').prop('selectedIndex', 0);
          $('#sub_unidad').prop('selectedIndex', 0);
          $('#categoria').prop('selectedIndex', 0);
          $('#horas').prop('selectedIndex', 0);
          $("#plaza").val("");
          $('#motivo').prop('selectedIndex', 0);
          $('#puesto').prop('selectedIndex', 0);
          $('#form_registrar_docente')[0].reset();
          window.location = "actualizarDocente";
        }

      });
    }

  });

});

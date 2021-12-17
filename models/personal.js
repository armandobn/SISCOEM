$gmx(document).ready(function () {

  eventoTecladoMayusculas('nombre');
  eventoTecladoMayusculas('apeMaterno');
  eventoTecladoMayusculas('apePaterno');
  eventoTecladoMayusculas('rfc');
  eventoTecladoMayusculas('curp');
  eventoTecladoMayusculas('plaza');
  eventoTecladoMayusculas('observaciones');



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
      limpiarAlertaError('#asterisco_unidad', '#unidad');
    }
    if (document.getElementById("sub_unidad").value == '') {
      alertaError('#asterisco_sub_unidad', '#sub_unidad');
      cont++;
    } else {
      limpiarAlertaError('#asterisco_sub_unidad', '#sub_unidad');
    }
    if (document.getElementById("categoria").value == '') {
      alertaError('#asterisco_categoria', '#categoria');
      cont++;
    } else {
      limpiarAlertaError('#asterisco_categoria', '#categoria');
    }
    if (document.getElementById("horas").value == '') {
      alertaError('#asterisco_horas', '#horas');
      cont++;
    } else {
      limpiarAlertaError('#asterisco_horas', '#horas');
    }
    if ($("#plaza").val() == '') {
      alertaError('#asterisco_plaza', '#plaza');
      cont++;
    } else {
      limpiarAlertaError('#asterisco_plaza', '#plaza');
    }
    if (document.getElementById("motivo").value == '') {
      alertaError('#asterisco_motivo', '#motivo');
      cont++;
    } else {
      limpiarAlertaError('#asterisco_motivo', '#motivo');
    }
    if ($('#puesto').val() == '') {
      alertaError('#asterisco_puesto', '#puesto');
      cont++;
    } else {
      limpiarAlertaError('#asterisco_puesto', '#puesto');
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
      limpiarAlertaError('#asterisco_nombre', '#nombre');
    }
    if ($('#apePaterno').val() == '') {
      alertaError('#asterisco_apePaterno', '#apePaterno');
      cont++;
    } else {
      limpiarAlertaError('#asterisco_apePaterno', '#apePaterno');
    }
    if ($('#apeMaterno').val() == '') {
      alertaError('#asterisco_apeMaterno', '#apeMaterno');
      cont++;
    } else {
      limpiarAlertaError('#asterisco_apeMaterno', '#apeMaterno');
    }
    if ($('#rfc').val() == '') {
      alertaError('#asterisco_rfc', '#rfc');
      cont++;
    } else if ($('#rfc').val().length == 13) {
      limpiarAlertaError('#asterisco_rfc', '#rfc');
    } else {
      alertaError('#asterisco_rfc', '#rfc');
      texto_error = `${texto_error} Campo RFC debe contener solamente 13 caracteres <br>`;
      cont++;
    }
    if ($('#curp').val() == '') {
      alertaError('#asterisco_curp', '#curp');
      cont++;
    } else if ($('#curp').val().length == 18) {
      limpiarAlertaError('#asterisco_curp', '#curp');
    } else {
      alertaError('#asterisco_curp', '#curp');
      texto_error = `${texto_error} Campo CURP debe contener solamente 18 caracteres <br>`;
      cont++;
    }
    if ($('#ingresoGob').val() == '') {
      alertaError('#asterisco_ingresoGob', '#ingresoGob');
      cont++;
    } else {
      limpiarAlertaError('#asterisco_ingresoGob', '#ingresoGob');
    }
    if ($('#ingresoSep').val() == '') {
      alertaError('#asterisco_ingresoSep', '#ingresoSep');
      cont++;
    } else {
      limpiarAlertaError('#asterisco_ingresoSep', '#ingresoSep');
    }
    if ($('#ingresoDgti').val() == '') {
      alertaError('#asterisco_ingresoDgti', '#ingresoDgti');
      cont++;
    } else {
      limpiarAlertaError('#asterisco_ingresoDgti', '#ingresoDgti');
    }
    if ($('#observaciones').val() == '') {
      alertaError('#asterisco_observaciones', '#observaciones');
      cont++;
    } else {
      limpiarAlertaError('#asterisco_observaciones', '#observaciones');
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
      limpiarAlertaError("#asterisco_tabla", "#tabla");
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

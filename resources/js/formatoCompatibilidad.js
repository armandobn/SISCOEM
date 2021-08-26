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

//Evento teclado, solamente mayusculas
function eventoTeclado(id_elemento){
  const entradaInput = document.getElementById(id_elemento);
  entradaInput.value='';
  entradaInput.addEventListener('keyup',cambiarMayusculas);
}

function cambiarMayusculas(elemento){
 let texto = elemento.target.value;
 elemento.target.value=texto.toUpperCase();
  // console.log(texto);
  // console.log(`TIPO DE EVENTO: ${elemento.type}` );
}

$gmx(document).ready(function () {
  eventoTeclado('buscar_rfc');
  //Scroll ir Arriba
  const obtener_pixeles_inicio = () => document.documentElement.scrollTop || document.body.scrollTop
  const irArriba = () => {
    if (obtener_pixeles_inicio() > 0) {
      requestAnimationFrame(irArriba)
      scrollTo(0, obtener_pixeles_inicio() - (obtener_pixeles_inicio() / 30))

    }
  }

  const selectInstitucion = document.querySelector('#select_institucion');
  selectInstitucion.addEventListener('change', (event) => {
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

  const selectCategoria_inst_uno = document.querySelector('#categoria_inst_uno');
  selectCategoria_inst_uno.addEventListener('change', (event) => {
    let select = event.target.value;
    let token = `_token=${$('input[name="_token"]').val()}`;
    let info = `${token}&categoria=${select}`;
    $.ajax({
      type: 'POST',
      url: "categoria",
      data: info,
      success: function (r) {
        $('#puesto_inst_uno').val(r[0]["denominacion"]);
      }

    });

  });

  

  
  $('#btn_buscar_rfc').click(function () {
    let texto_error = "";
    if ($('#buscar_rfc').val() == "") {
      alertaError('#asterisco_buscar_rfc', '#buscar_rfc');
      return null;
    } else if ($('#buscar_rfc').val().length == 13) {
      limpiarError('#asterisco_buscar_rfc', '#buscar_rfc');
      texto_error = "";
    } else {
      alertaError('#asterisco_buscar_rfc', '#buscar_rfc');
      texto_error = `${texto_error} Campo RFC debe contener solamente 13 caracteres <br>`;

    }

    if (texto_error != "") {
      mensajeError('#alerta', texto_error);
      irArriba();
      return false;
    } else {
      limpiaMensajeError('#alerta');
    }

    let form_url = $('#form_buscar_rfc').attr("action");
    // console.log($('#form_buscar_rfc').serialize());
    $.ajax({
      type: 'POST',
      url: form_url,
      data: $('#form_buscar_rfc').serialize(),
      success: function (r) {
        // console.log(r);
        $('#curp').val(r['docentes'][0]['curp']);
        $('#nombre').val(r['docentes'][0]['nombre']);
        $('#apePaterno').val(r['docentes'][0]['apePaterno']);
        $('#apeMaterno').val(r['docentes'][0]['apeMaterno']);

      }, error: function (error) {
        texto_error = "No hay registros"
        mensajeError('#alerta', texto_error);
        if (texto_error != "") {
          irArriba();
        }
      }
    });

  });

  const contenedor_tabla_uno = [
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []]
  ];
  $('#btn_agregar_inst_uno').click(function () {
    let unidad = document.getElementById("unidad_inst_uno").value;
    let sub_unidad = document.getElementById("sub_unidad_inst_uno").value;
    let categoria = document.getElementById("categoria_inst_uno").value;
    let horas = document.getElementById("horas_inst_uno").value;
    let plaza = $("#plaza_inst_uno").val();
    let motivo = document.getElementById("motivo_inst_uno").value;
    let puesto = document.getElementById("puesto_inst_uno").value;
    let cont = 0;
    if (document.getElementById("unidad_inst_uno").value == '') {
      alertaError('#asterisco_unidad_inst_uno', '#unidad_inst_uno');
      cont++;
    } else {
      limpiarError('#asterisco_unidad_inst_uno', '#unidad_inst_uno');
    }
    if (document.getElementById("sub_unidad_inst_uno").value == '') {
      alertaError('#asterisco_sub_unidad_inst_uno', '#sub_unidad_inst_uno');
      cont++;
    } else {
      limpiarError('#asterisco_sub_unidad_inst_uno', '#sub_unidad_inst_uno');
    }
    if (document.getElementById("categoria_inst_uno").value == '') {
      alertaError('#asterisco_categoria_inst_uno', '#categoria_inst_uno');
      cont++;
    } else {
      limpiarError('#asterisco_categoria_inst_uno', '#categoria_inst_uno');
    }
    if (document.getElementById("horas_inst_uno").value == '') {
      alertaError('#asterisco_horas_inst_uno', '#horas_inst_uno');
      cont++;
    } else {
      limpiarError('#asterisco_horas_inst_uno', '#horas_inst_uno');
    }
    if ($("#plaza_inst_uno").val() == '') {
      alertaError('#asterisco_plaza_inst_uno', '#plaza_inst_uno');
      cont++;
    } else {
      limpiarError('#asterisco_plaza_inst_uno', '#plaza_inst_uno');
    }
    if (document.getElementById("motivo_inst_uno").value == '') {
      alertaError('#asterisco_motivo_inst_uno', '#motivo_inst_uno');
      cont++;
    } else {
      limpiarError('#asterisco_motivo_inst_uno', '#motivo_inst_uno');
    }
    if ($('#puesto_inst_uno').val() == '') {
      alertaError('#asterisco_puesto_inst_uno', '#puesto_inst_uno');
      cont++;
    } else {
      limpiarError('#asterisco_puesto_inst_uno', '#puesto_inst_uno');
    }

    if (cont == 0) {
      const contenedor_tabla = document.querySelector("#tabla_inst_uno");

      const hijos = contenedor_tabla.children;
      cont = hijos.length;

      contenedor_tabla_uno[cont][0][0] = document.createElement("TR");//todo en mayuscula
      contenedor_tabla.appendChild(contenedor_tabla_uno[cont][0][0]);

      contenedor_tabla_uno[cont][0][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][0][2] = document.createTextNode(puesto);
      contenedor_tabla_uno[cont][0][1].setAttribute("id", "tabla_uno_" + cont + "_c_1");//atributo,valor;
      contenedor_tabla_uno[cont][0][1].appendChild(contenedor_tabla_uno[cont][0][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][0][1]);

      contenedor_tabla_uno[cont][1][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][1][2] = document.createTextNode(categoria);
      contenedor_tabla_uno[cont][1][1].setAttribute("id", "tabla_uno_" + cont + "_c_2");
      contenedor_tabla_uno[cont][1][1].appendChild(contenedor_tabla_uno[cont][1][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][1][1]);

      contenedor_tabla_uno[cont][2][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][2][2] = document.createTextNode('ubicacion');
      contenedor_tabla_uno[cont][2][1].setAttribute("id", "tabla_uno_" + cont + "_c_3");
      contenedor_tabla_uno[cont][2][1].appendChild(contenedor_tabla_uno[cont][2][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][2][1]);

      let hoy = new Date()
      contenedor_tabla_uno[cont][3][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][3][2] = document.createTextNode(hoy.getDate());//dia
      contenedor_tabla_uno[cont][3][1].setAttribute("id", "tabla_uno_" + cont + "_c_4");
      contenedor_tabla_uno[cont][3][1].appendChild(contenedor_tabla_uno[cont][3][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][3][1]);

      contenedor_tabla_uno[cont][4][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][4][2] = document.createTextNode((hoy.getMonth() + 1));//mes
      contenedor_tabla_uno[cont][4][1].setAttribute("id", "tabla_uno_" + cont + "_c_5");
      contenedor_tabla_uno[cont][4][1].appendChild(contenedor_tabla_uno[cont][4][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][4][1]);

      contenedor_tabla_uno[cont][5][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][5][2] = document.createTextNode(hoy.getFullYear());//año
      contenedor_tabla_uno[cont][5][1].setAttribute("id", "tabla_uno_" + cont + "_c_6");
      contenedor_tabla_uno[cont][5][1].appendChild(contenedor_tabla_uno[cont][5][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][5][1]);



      let token = `_token=${$('input[name="_token"]').val()}`;
      $.ajax({
        type: 'POST',
        url: "motivos",
        data: token,
        success: function (r) {
          // console.log(r);

          for (let i = 0; i < r.length; i++) {
            if (r[i]['nick'] == motivo) {
              // console.log(r[i]['nick']);
              contenedor_tabla_uno[cont][6][1] = document.createElement("TD");
              contenedor_tabla_uno[cont][6][2] = document.createTextNode(r[i]['nick']);
              contenedor_tabla_uno[cont][6][3] = document.createTextNode(r[i]['descripcion']);
              contenedor_tabla_uno[cont][6][1].setAttribute("id", "tabla_uno_" + cont + "_c_7");
              contenedor_tabla_uno[cont][6][1].appendChild(contenedor_tabla_uno[cont][6][2]);
              contenedor_tabla_uno[cont][6][1].appendChild(document.createElement("br"));
              contenedor_tabla_uno[cont][6][1].appendChild(contenedor_tabla_uno[cont][6][3]);
              contenedor_tabla_uno[cont][6][1].classList.add("text-center");
              contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][6][1]);

              contenedor_tabla_uno[cont][7][1] = document.createElement("TD");
              contenedor_tabla_uno[cont][7][2] = document.createTextNode($('#add_6').val());
              contenedor_tabla_uno[cont][7][1].setAttribute("id", "tabla_uno_" + cont + "_c_8");
              contenedor_tabla_uno[cont][7][1].appendChild(contenedor_tabla_uno[cont][7][2]);
              contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][7][1]);
        
              contenedor_tabla_uno[cont][8][1] = document.createElement("TD");
              contenedor_tabla_uno[cont][8][2] = document.createTextNode($('#add_7').val());
              contenedor_tabla_uno[cont][8][1].setAttribute("id", "tabla_uno_" + cont + "_c_9");
              contenedor_tabla_uno[cont][8][1].appendChild(contenedor_tabla_uno[cont][8][2]);
              contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][8][1]);
        
              contenedor_tabla_uno[cont][9][1] = document.createElement("TD");
              contenedor_tabla_uno[cont][9][2] = document.createTextNode($('#add_8').val());
              contenedor_tabla_uno[cont][9][1].setAttribute("id", "tabla_uno_" + cont + "_c_10");
              contenedor_tabla_uno[cont][9][1].appendChild(contenedor_tabla_uno[cont][9][2]);
              contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][9][1]);
             
            }
          }
        }
      });


     



    }
  });

  $('#btn_registrar').click(function () {
    alert("registrar");
  });

  $('#btn_salir').click(function () {
    alert("alerta");
  });

});
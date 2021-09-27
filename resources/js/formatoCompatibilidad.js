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

  let institucion; //La institucion activa 0-plantel 1-externa
  const selectInstitucion = document.querySelector('#select_institucion');
  selectInstitucion.addEventListener('change', (event) => {
    let select = event.target.value;
    console.log(select);
    if (select == "0") {
      institucion=0;
      // document.getElementById("select_institucion").disabled = true;
      document.getElementById("buscar_rfc").disabled = false;
      document.getElementById("btn_buscar_rfc").disabled = false;

      document.getElementById("unidad_inst_uno").disabled = true;
      document.getElementById("sub_unidad_inst_uno").disabled = true;
      document.getElementById("categoria_inst_uno").disabled = true;
      document.getElementById("horas_inst_uno").disabled = true;
      document.getElementById("plaza_inst_uno").disabled = true;
      document.getElementById("motivo_inst_uno").disabled = true;

      document.getElementById("btn_agregar_inst_uno").disabled = true;
      document.getElementById("fecha_inicio_inst_uno").disabled = false;
      document.getElementById("fecha_termino_inst_uno").disabled = false;
    
      document.getElementById("unidad_inst_dos").disabled = false;
      document.getElementById("sub_unidad_inst_dos").disabled = false;
      document.getElementById("categoria_inst_dos").disabled = false;
      document.getElementById("horas_inst_dos").disabled = false;
      document.getElementById("plaza_inst_dos").disabled = false;
      document.getElementById("motivo_inst_dos").disabled = false;
      
      document.getElementById("btn_agregar_inst_dos").disabled = false;
      document.getElementById("fecha_inicio_inst_dos").disabled = false;
      $('#fecha_inicio_inst_dos').datepicker({ changeYear: true });
      document.getElementById("fecha_termino_inst_dos").disabled = false;
      $('#fecha_termino_inst_dos').datepicker({ changeYear: true });

      document.getElementById("btn_registrar").disabled = false;

    } else {
      institucion=1;
      // document.getElementById("select_institucion").disabled = true;
      document.getElementById("buscar_rfc").disabled = false;
      document.getElementById("btn_buscar_rfc").disabled = false;

      document.getElementById("unidad_inst_uno").disabled = false;
      document.getElementById("sub_unidad_inst_uno").disabled = false;
      document.getElementById("categoria_inst_uno").disabled = false;
      document.getElementById("horas_inst_uno").disabled = false;
      document.getElementById("plaza_inst_uno").disabled = false;
      document.getElementById("motivo_inst_uno").disabled = false;

      document.getElementById("btn_agregar_inst_uno").disabled = false;
      document.getElementById("fecha_inicio_inst_uno").disabled = false;
      $('#fecha_inicio_inst_uno').datepicker({ changeYear: true });
      document.getElementById("fecha_termino_inst_uno").disabled = false;
      $('#fecha_termino_inst_uno').datepicker({ changeYear: true });
      
      document.getElementById("unidad_inst_dos").disabled = false;
      document.getElementById("sub_unidad_inst_dos").disabled = false;
      document.getElementById("categoria_inst_dos").disabled = false;
      document.getElementById("horas_inst_dos").disabled = false;
      document.getElementById("plaza_inst_dos").disabled = false;
      document.getElementById("motivo_inst_dos").disabled = false;

      document.getElementById("btn_agregar_inst_dos").disabled = false;
      document.getElementById("fecha_inicio_inst_dos").disabled = false;
      $('#fecha_inicio_inst_dos').datepicker({ changeYear: true });
      document.getElementById("fecha_termino_inst_dos").disabled = false;
      $('#fecha_termino_inst_dos').datepicker({ changeYear: true });

      document.getElementById("btn_registrar").disabled = false;

      let informacion=`
      <h3>Datos de institució externa</h3>
      <hr class="red">
      <div class="row">
          <div class="col">
              <div class="form-group">
                  <label class="col-sm-3 control-label" for="denominacion">Denominacion de la institucion:</label>
                  <div class="col-sm-9">
                      <input class="form-control" id="denominacion"
                          placeholder="Ingresa denominacion de la institucion" type="text">
                  </div>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col">
              <div class="form-group">
                  <label class="col-sm-3 control-label" for="puesto">Puesto del servidor público:</label>
                  <div class="col-sm-9">
                      <input class="form-control" id="puesto" placeholder="Ingresa puesto del servidor publico"
                          type="text">
                  </div>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col">
              <div class="form-group">
                  <label class="col-sm-3 control-label" for="certifica">Nombre del servidor público que
                      certifica:</label>
                  <div class="col-sm-9">
                      <input class="form-control" id="certifica"
                          placeholder="Ingresa nombre del servidor publico que certifica" type="text">
                  </div>
              </div>
          </div>
      </div>
      `;
    
      $('#institucion_externa').html(informacion);

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

  const selectCategoria_inst_dos = document.querySelector('#categoria_inst_dos');
  selectCategoria_inst_dos.addEventListener('change', (event) => {
    let select = event.target.value;
    let token = `_token=${$('input[name="_token"]').val()}`;
    let info = `${token}&categoria=${select}`;
    $.ajax({
      type: 'POST',
      url: "categoria",
      data: info,
      success: function (r) {
        $('#puesto_inst_dos').val(r[0]["denominacion"]);
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
        console.log(r);
        $('#curp').val(r['docentes'][0]['curp']);
        $('#nombre').val(r['docentes'][0]['nombre']);
        $('#apePaterno').val(r['docentes'][0]['apePaterno']);
        $('#apeMaterno').val(r['docentes'][0]['apeMaterno']);
        // console.log(r['sueldoDocen'][0][0]);
        // console.log(r['sueldoDocen'][1][0]);
        // console.log(r['sueldoDocen'][1][0]['categoria']);
        var informacion="";
        let hoy = new Date()
        let sueldo=0.0;
        for(let i=0; i<r['docentesTabla'].length; i++){

          if(r['sueldoDocen'][i][0]!=undefined){
            // console.log(r['sueldoDocen'][i][0]['ze2c07']);
            // cadena.replace(',', '');
            // console.log(r['docentesTabla'][i]['horas'].substring(0,2));
            sueldo=(parseFloat(r['sueldoDocen'][i][0]['ze2c07'].replace(',', ''))*parseInt(r['docentesTabla'][i]['horas'].substring(0,2))).toFixed(2);
          }else if(['sueldoAdmin'][i][0]!=undefined){
            // console.log(r['sueldoAdmin'][i][0]['ze2c07']);
            sueldo=(parseFloat(r['sueldoAdmin'][i][0]['ze2c07'].replace(',', ''))*parseInt(r['docentesTabla'][i]['horas'].substring(0,2))).toFixed(2);
          }else{
            // console.log("false");
          }

          
          informacion=`${informacion}
            <tr>
              <td class="text-center" id="inst_uno_puesto_${i}" >${r['docentesTabla'][i]['puesto']}</td>
              <td class="text-center" id="inst_uno_codigo_${i}">${r['docentesTabla'][i]['categoria']}</td>
              <td class="text-center" id="inst_uno_unidad_adscripcion_${i}">Ubicacion</td>
              <td class="text-center" id="inst_uno_dia_${i}">${hoy.getDate()}</td>
              <td class="text-center" id="inst_uno_mes_${i}">${hoy.getMonth()+1}</td>
              <td class="text-center" id="inst_uno_ano_${i}">${hoy.getFullYear()}</td>
              <td class="text-center" id="inst_uno_tipo_nombramiento_${i}">
                ${r['docentesTabla'][i]['motivo']} <br>
                ${r['motivos'][i][0]['descripcion']}
              </td>
              <td class="text-center" id="inst_uno_remuneracion_${i}">
                ${sueldo}
              </td>
              <td class="text-center" id="inst_uno_presupuestal_${i}">Ubicacion</td>
              <td class="text-center" id="inst_uno_ubicacion_trabajo_${i}">Ubicacion</td>
              
            </tr>
          `;
          
        }
        
        $('#tabla_inst_uno').html(informacion);
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
      contenedor_tabla_uno[cont][0][1].setAttribute("id", "inst_uno_puesto_" + cont);//atributo,valor;
      contenedor_tabla_uno[cont][0][1].appendChild(contenedor_tabla_uno[cont][0][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][0][1]);

      contenedor_tabla_uno[cont][1][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][1][2] = document.createTextNode(categoria);
      contenedor_tabla_uno[cont][1][1].setAttribute("id", "inst_uno_codigo_" + cont);
      contenedor_tabla_uno[cont][1][1].appendChild(contenedor_tabla_uno[cont][1][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][1][1]);

      contenedor_tabla_uno[cont][2][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][2][2] = document.createTextNode('ubicacion');
      contenedor_tabla_uno[cont][2][1].setAttribute("id", "inst_uno_unidad_adscripcion_" + cont);
      contenedor_tabla_uno[cont][2][1].appendChild(contenedor_tabla_uno[cont][2][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][2][1]);

      let hoy = new Date()
      contenedor_tabla_uno[cont][3][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][3][2] = document.createTextNode(hoy.getDate());//dia
      contenedor_tabla_uno[cont][3][1].setAttribute("id", "inst_uno_dia" + cont);
      contenedor_tabla_uno[cont][3][1].appendChild(contenedor_tabla_uno[cont][3][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][3][1]);

      contenedor_tabla_uno[cont][4][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][4][2] = document.createTextNode((hoy.getMonth() + 1));//mes
      contenedor_tabla_uno[cont][4][1].setAttribute("id", "inst_uno_mes_" + cont);
      contenedor_tabla_uno[cont][4][1].appendChild(contenedor_tabla_uno[cont][4][2]);
      contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][4][1]);

      contenedor_tabla_uno[cont][5][1] = document.createElement("TD");
      contenedor_tabla_uno[cont][5][2] = document.createTextNode(hoy.getFullYear());//año
      contenedor_tabla_uno[cont][5][1].setAttribute("id", "inst_uno_ano" + cont);
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
              contenedor_tabla_uno[cont][6][1].setAttribute("id", "inst_uno_tipo_nombramiento_" + cont);
              contenedor_tabla_uno[cont][6][1].appendChild(contenedor_tabla_uno[cont][6][2]);
              contenedor_tabla_uno[cont][6][1].appendChild(document.createElement("br"));
              contenedor_tabla_uno[cont][6][1].appendChild(contenedor_tabla_uno[cont][6][3]);
              contenedor_tabla_uno[cont][6][1].classList.add("text-center");
              contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][6][1]);

              contenedor_tabla_uno[cont][7][1] = document.createElement("TD");
              contenedor_tabla_uno[cont][7][2] = document.createTextNode($('#add_6').val());
              contenedor_tabla_uno[cont][7][1].setAttribute("id", "inst_uno_remuneracion_" + cont);
              contenedor_tabla_uno[cont][7][1].appendChild(contenedor_tabla_uno[cont][7][2]);
              contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][7][1]);
        
              contenedor_tabla_uno[cont][8][1] = document.createElement("TD");
              contenedor_tabla_uno[cont][8][2] = document.createTextNode($('#add_7').val());
              contenedor_tabla_uno[cont][8][1].setAttribute("id", "inst_uno_presupuestal_" + cont);
              contenedor_tabla_uno[cont][8][1].appendChild(contenedor_tabla_uno[cont][8][2]);
              contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][8][1]);
        
              contenedor_tabla_uno[cont][9][1] = document.createElement("TD");
              contenedor_tabla_uno[cont][9][2] = document.createTextNode($('#add_8').val());
              contenedor_tabla_uno[cont][9][1].setAttribute("id", "inst_uno_ubicacion_trabajo_" + cont);
              contenedor_tabla_uno[cont][9][1].appendChild(contenedor_tabla_uno[cont][9][2]);
              contenedor_tabla_uno[cont][0][0].appendChild(contenedor_tabla_uno[cont][9][1]);
             
            }
          }
        }
      });


     



    }
  });

  const contenedor_tabla_dos = [
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
  $('#btn_agregar_inst_dos').click(function () {
    let unidad = document.getElementById("unidad_inst_dos").value;
    let sub_unidad = document.getElementById("sub_unidad_inst_dos").value;
    let categoria = document.getElementById("categoria_inst_dos").value;
    let horas = document.getElementById("horas_inst_dos").value;
    let plaza = $("#plaza_inst_dos").val();
    let motivo = document.getElementById("motivo_inst_dos").value;
    let puesto = document.getElementById("puesto_inst_dos").value;
    let cont = 0;
    if (document.getElementById("unidad_inst_dos").value == '') {
      alertaError('#asterisco_unidad_inst_dos', '#unidad_inst_dos');
      cont++;
    } else {
      limpiarError('#asterisco_unidad_inst_dos', '#unidad_inst_dos');
    }
    if (document.getElementById("sub_unidad_inst_dos").value == '') {
      alertaError('#asterisco_sub_unidad_inst_dos', '#sub_unidad_inst_dos');
      cont++;
    } else {
      limpiarError('#asterisco_sub_unidad_inst_dos', '#sub_unidad_inst_dos');
    }
    if (document.getElementById("categoria_inst_dos").value == '') {
      alertaError('#asterisco_categoria_inst_dos', '#categoria_inst_dos');
      cont++;
    } else {
      limpiarError('#asterisco_categoria_inst_dos', '#categoria_inst_dos');
    }
    if (document.getElementById("horas_inst_dos").value == '') {
      alertaError('#asterisco_horas_inst_dos', '#horas_inst_dos');
      cont++;
    } else {
      limpiarError('#asterisco_horas_inst_dos', '#horas_inst_dos');
    }
    if ($("#plaza_inst_dos").val() == '') {
      alertaError('#asterisco_plaza_inst_dos', '#plaza_inst_dos');
      cont++;
    } else {
      limpiarError('#asterisco_plaza_inst_dos', '#plaza_inst_dos');
    }
    if (document.getElementById("motivo_inst_dos").value == '') {
      alertaError('#asterisco_motivo_inst_dos', '#motivo_inst_dos');
      cont++;
    } else {
      limpiarError('#asterisco_motivo_inst_dos', '#motivo_inst_dos');
    }
    if ($('#puesto_inst_dos').val() == '') {
      alertaError('#asterisco_puesto_inst_dos', '#puesto_inst_dos');
      cont++;
    } else {
      limpiarError('#asterisco_puesto_inst_dos', '#puesto_inst_dos');
    }

    if (cont == 0) {
      const contenedor_tabla = document.querySelector("#tabla_inst_dos");

      const hijos = contenedor_tabla.children;
      cont = hijos.length;

      contenedor_tabla_dos[cont][0][0] = document.createElement("TR");//todo en mayuscula
      contenedor_tabla.appendChild(contenedor_tabla_dos[cont][0][0]);

      contenedor_tabla_dos[cont][0][1] = document.createElement("TD");
      contenedor_tabla_dos[cont][0][2] = document.createTextNode(puesto);
      contenedor_tabla_dos[cont][0][1].setAttribute("id", "inst_dos_puesto_" + cont);//atributo,valor;
      contenedor_tabla_dos[cont][0][1].appendChild(contenedor_tabla_dos[cont][0][2]);
      contenedor_tabla_dos[cont][0][0].appendChild(contenedor_tabla_dos[cont][0][1]);

      contenedor_tabla_dos[cont][1][1] = document.createElement("TD");
      contenedor_tabla_dos[cont][1][2] = document.createTextNode(categoria);
      contenedor_tabla_dos[cont][1][1].setAttribute("id", "inst_dos_codigo_" + cont);
      contenedor_tabla_dos[cont][1][1].appendChild(contenedor_tabla_dos[cont][1][2]);
      contenedor_tabla_dos[cont][0][0].appendChild(contenedor_tabla_dos[cont][1][1]);

      contenedor_tabla_dos[cont][2][1] = document.createElement("TD");
      contenedor_tabla_dos[cont][2][2] = document.createTextNode('ubicacion');
      contenedor_tabla_dos[cont][2][1].setAttribute("id", "inst_dos_unidad_adscripcion_" + cont);
      contenedor_tabla_dos[cont][2][1].appendChild(contenedor_tabla_dos[cont][2][2]);
      contenedor_tabla_dos[cont][0][0].appendChild(contenedor_tabla_dos[cont][2][1]);

      let hoy = new Date()
      contenedor_tabla_dos[cont][3][1] = document.createElement("TD");
      contenedor_tabla_dos[cont][3][2] = document.createTextNode(hoy.getDate());//dia
      contenedor_tabla_dos[cont][3][1].setAttribute("id", "inst_dos_dia_" + cont);
      contenedor_tabla_dos[cont][3][1].appendChild(contenedor_tabla_dos[cont][3][2]);
      contenedor_tabla_dos[cont][0][0].appendChild(contenedor_tabla_dos[cont][3][1]);

      contenedor_tabla_dos[cont][4][1] = document.createElement("TD");
      contenedor_tabla_dos[cont][4][2] = document.createTextNode((hoy.getMonth() + 1));//mes
      contenedor_tabla_dos[cont][4][1].setAttribute("id", "inst_dos_mes_" + cont);
      contenedor_tabla_dos[cont][4][1].appendChild(contenedor_tabla_dos[cont][4][2]);
      contenedor_tabla_dos[cont][0][0].appendChild(contenedor_tabla_dos[cont][4][1]);

      contenedor_tabla_dos[cont][5][1] = document.createElement("TD");
      contenedor_tabla_dos[cont][5][2] = document.createTextNode(hoy.getFullYear());//año
      contenedor_tabla_dos[cont][5][1].setAttribute("id", "inst_dos_ano_" + cont);
      contenedor_tabla_dos[cont][5][1].appendChild(contenedor_tabla_dos[cont][5][2]);
      contenedor_tabla_dos[cont][0][0].appendChild(contenedor_tabla_dos[cont][5][1]);



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
              contenedor_tabla_dos[cont][6][1] = document.createElement("TD");
              contenedor_tabla_dos[cont][6][2] = document.createTextNode(r[i]['nick']);
              contenedor_tabla_dos[cont][6][3] = document.createTextNode(r[i]['descripcion']);
              contenedor_tabla_dos[cont][6][1].setAttribute("id", "inst_dos_tipo_nombramiento_" + cont);
              contenedor_tabla_dos[cont][6][1].appendChild(contenedor_tabla_dos[cont][6][2]);
              contenedor_tabla_dos[cont][6][1].appendChild(document.createElement("br"));
              contenedor_tabla_dos[cont][6][1].appendChild(contenedor_tabla_dos[cont][6][3]);
              contenedor_tabla_dos[cont][6][1].classList.add("text-center");
              contenedor_tabla_dos[cont][0][0].appendChild(contenedor_tabla_dos[cont][6][1]);

              contenedor_tabla_dos[cont][7][1] = document.createElement("TD");
              contenedor_tabla_dos[cont][7][2] = document.createTextNode($('#add_6').val());
              contenedor_tabla_dos[cont][7][1].setAttribute("id", "inst_dos_remuneracion_actual_" + cont);
              contenedor_tabla_dos[cont][7][1].appendChild(contenedor_tabla_dos[cont][7][2]);
              contenedor_tabla_dos[cont][0][0].appendChild(contenedor_tabla_dos[cont][7][1]);
        
              contenedor_tabla_dos[cont][8][1] = document.createElement("TD");
              contenedor_tabla_dos[cont][8][2] = document.createTextNode($('#add_7').val());
              contenedor_tabla_dos[cont][8][1].setAttribute("id", "inst_dos_presupuestal_" + cont);
              contenedor_tabla_dos[cont][8][1].appendChild(contenedor_tabla_dos[cont][8][2]);
              contenedor_tabla_dos[cont][0][0].appendChild(contenedor_tabla_dos[cont][8][1]);
        
              contenedor_tabla_dos[cont][9][1] = document.createElement("TD");
              contenedor_tabla_dos[cont][9][2] = document.createTextNode($('#add_8').val());
              contenedor_tabla_dos[cont][9][1].setAttribute("id", "inst_dos_ubicacion_trabajo_" + cont);
              contenedor_tabla_dos[cont][9][1].appendChild(contenedor_tabla_dos[cont][9][2]);
              contenedor_tabla_dos[cont][0][0].appendChild(contenedor_tabla_dos[cont][9][1]);
             
            }
          }
        }
      });

    }
  });


  $('#btn_registrar').click(function () {
    
    
    const contenedor_tabla_uno = document.querySelector("#tabla_inst_uno");
    const hijos_uno = contenedor_tabla_uno.children;
    let conta_uno = hijos_uno.length;
    let inst_uno_informacion = "";
    inst_uno_informacion=inst_uno_informacion+`&certifica_inst_uno=${$('#certifica_inst_uno').val()}`;
    inst_uno_informacion=inst_uno_informacion+`&fecha_inicio_inst_uno=${$('#fecha_inicio_inst_uno').val()}`;
    inst_uno_informacion=inst_uno_informacion+`&fecha_termino_inst_uno=${$('#fecha_termino_inst_uno').val()}`;
    for (let i = 0; i < conta_uno; i++) {
      inst_uno_informacion = inst_uno_informacion + `
        &inst_uno_puesto[${i}]=${document.getElementById("inst_uno_puesto_" + i).innerHTML}
        &inst_uno_codi_pesu[${i}]=${document.getElementById("inst_uno_codigo_" + i).innerHTML}
        &inst_uno_unidad_descripcion[${i}]=${document.getElementById("inst_uno_unidad_adscripcion_" + i).innerHTML}
        &inst_uno_fecha_alta[${i}]=${document.getElementById("inst_uno_dia_" + i).innerHTML}/${document.getElementById("inst_uno_mes_" + i).innerHTML}
                          /${document.getElementById("inst_uno_ano_" + i).innerHTML}
        &inst_uno_tipo_nom[${i}]=${document.getElementById("inst_uno_tipo_nombramiento_" + i).innerHTML}
        &inst_uno_renumeracion[${i}]=${document.getElementById("inst_uno_remuneracion_" + i).innerHTML}
        &inst_uno_partida[${i}]=${document.getElementById("inst_uno_presupuestal_" + i).innerHTML}
        &inst_uno_ubicacion_centro[${i}]=${document.getElementById("inst_uno_ubicacion_trabajo_" + i).innerHTML}
        `;

    }

    const contenedor_tabla_dos = document.querySelector("#tabla_inst_dos");
    const hijos_dos = contenedor_tabla_dos.children;
    let conta_dos = hijos_dos.length;
    let inst_dos_informacion = "";
    inst_dos_informacion=inst_uno_informacion+`&certifica_inst_dos=${$('#certifica_inst_dos').val()}`;
    inst_dos_informacion=inst_uno_informacion+`&fecha_inicio_inst_dos=${$('#fecha_inicio_inst_dos').val()}`;
    inst_dos_informacion=inst_uno_informacion+`&fecha_termino_inst_dos=${$('#fecha_termino_inst_dos').val()}`;
    for (let i = 0; i < conta_dos; i++) {
      inst_dos_informacion = inst_dos_informacion + `
        &inst_dos_puesto[${i}]=${document.getElementById("inst_dos_puesto_" + i).innerHTML}
        &inst_dos_codi_pesu[${i}]=${document.getElementById("inst_dos_codigo_" + i).innerHTML}
        &inst_dos_unidad_descripcion[${i}]=${document.getElementById("inst_dos_unidad_adscripcion_" + i).innerHTML}
        &inst_dos_fecha_alta[${i}]=${document.getElementById("inst_dos_dia_" + i).innerHTML}/${document.getElementById("inst_dos_mes_" + i).innerHTML}
                          /${document.getElementById("inst_dos_ano_" + i).innerHTML}
        &inst_dos_tipo_nom[${i}]=${document.getElementById("inst_dos_tipo_nombramiento_" + i).innerHTML}
        &inst_dos_renumeracion[${i}]=${document.getElementById("inst_dos_remuneracion_actual_" + i).innerHTML}
        &inst_dos_partida[${i}]=${document.getElementById("inst_dos_presupuestal_" + i).innerHTML}
        &inst_dos_ubicacion_centro[${i}]=${document.getElementById("inst_dos_ubicacion_trabajo_" + i).innerHTML}
        `;

    }

    console.log($('#denominacion').val());
    console.log($('#puesto').val());
    console.log($('#certifica').val());
    
    let datos=`
      &rfc=${$('#buscar_rfc').val()}
      &curp=${$('#curp').val()}
      &nombre=${$('#nombre').val()}
      &apePaterno=${$('#apePaterno').val()}
      &apeMaterno=${$('#apeMaterno').val()}
    `;
  
    let inst_externa;
    if(institucion==1){
      inst_externa=`
      &denominacion=${$('#denominacion').val()}
      &puesto=${$('#puesto').val()}
      &certifica=${$('#certifica').val()}
    `;
    }else{
      inst_externa="";
    }
    

    

    // console.log(inst_uno_informacion);
    // console.log(inst_dos_informacion);
    

    let form_url = $('#form_formatoCompatibilidad').attr("action");
    let token = `_token=${$('input[name="_token"]').val()}`;
    $.ajax({
      type:"post",
      data: token+inst_uno_informacion+inst_dos_informacion+inst_externa,
      url: form_url,
      success:function(r){
        console.log(r);
      }
    });
    

  });

  $('#btn_salir').click(function () {
    alert("alerta");
  });

});
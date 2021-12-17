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
              //tabla=tabla+`&institucion_uno[${z}][${k-1}][${i-1}]=${elemento[j].value}`;
              tabla=tabla+`&inst_uno_${k}_${i}=${elemento[j].value}`;
            }
          }
        }
        if (k == 3) {
          for (let a = 1; a < 11; a++) {
            let elemento = document.getElementsByName(`institucion_uno_${k}_${a}`);
            for (let j = 0; j < elemento.length; j++) {
              if (elemento[j].checked) {
                institucion[z][k - 1][a - 1] = elemento[j].value;
                //tabla=tabla+`&institucion_uno[${z}][${k-1}][${a-1}]=${elemento[j].value}`;
                tabla=tabla+`&inst_uno_${k}_${a}=${elemento[j].value}`;
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
              //tabla=tabla+`&institucion_dos[${z}][${k-1}][${i-1}]=${elemento[j].value}`;
              //console.log("k: "+k+" i: "+i);
              tabla=tabla+`&inst_dos_${k}_${i}=${elemento[j].value}`;
            }
          }
        }
        if (k == 3) {
          for (let a = 1; a < 11; a++) {
            let elemento = document.getElementsByName(`institucion_dos_${k}_${a}`);
            for (let j = 0; j < elemento.length; j++) {
              if (elemento[j].checked) {
                institucion[z][k - 1][a - 1] = elemento[j].value;
                //tabla=tabla+`&institucion_dos[${z}][${k-1}][${a-1}]=${elemento[j].value}`;
                tabla=tabla+`&inst_dos_${k}_${a}=${elemento[j].value}`;
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
  
  //Fecha de institucion uno y dos que se creo el documentos
  let actual = new Date();
  fecha = `${actual.getDate()}/${actual.getMonth() + 1}/${actual.getFullYear()}`;
  $('#institutoUnoCalendarYear').val(fecha);
  $('#institutoDosCalendarYear').val(fecha);

  $('#btn_completado').click(function () {
    obtenerDatos();
    let texto_error = "";
    if ($('#inst_uno_analista').val() == "" || $('#inst_dos_analista').val() == "") {
      const asterisco = document.querySelector('#asterisco_analista');
      const element_padre_uno = document.querySelector('#inst_uno_analista');
      if (element_padre_uno.classList.contains("form-control-error") == true && $('#inst_uno_analista').val() != "") {
        element_padre_uno.classList.remove("form-control-error");
        const contenedor_uno = element_padre_uno.parentElement;
        const small_uno = contenedor_uno.querySelector("SMALL");
        contenedor_uno.removeChild(small_uno);
      }else{
        //const element_padre_uno = document.querySelector('#inst_uno_analista');
        if(element_padre_uno.classList.contains("form-control-error") == false){
          element_padre_uno.classList.add("form-control-error");
          // console.log(etiqueta_padre_rfc.parentElement);
          const contenedor_element = element_padre_uno.parentElement;
          const item_small = document.createElement("SMALL");//todo en mayuscula
          const textDelItem = document.createTextNode("Este campo es obligatorio");
          item_small.appendChild(textDelItem);
          item_small.classList.add("form-text");
          item_small.classList.add("form-text-error");
          contenedor_element.appendChild(item_small);
        }

        //console.log(item);
        texto_error = `${texto_error} Falta Campo Nombre del analista de Insititucion 1 <br>`;
      }
      const element_padre_dos = document.querySelector('#inst_dos_analista');
      if (element_padre_dos.classList.contains("form-control-error") == true && $('#inst_dos_analista').val() != "") {
        element_padre_dos.classList.remove("form-control-error");
        const contenedor_dos = element_padre_dos.parentElement;
        const small_dos = contenedor_dos.querySelector("small");
        contenedor_dos.removeChild(small_dos);
      }else{
          //const element_padre_dos = document.querySelector('#inst_dos_analista');
          if(element_padre_dos.classList.contains("form-control-error") == false){
            element_padre_dos.classList.add("form-control-error");
            // console.log(etiqueta_padre_rfc.parentElement);
            const contenedor_element = element_padre_dos.parentElement;
            const item_small = document.createElement("SMALL");//todo en mayuscula
            const textDelItem = document.createTextNode("Este campo es obligatorio");
            item_small.appendChild(textDelItem);
            item_small.classList.add("form-text");
            item_small.classList.add("form-text-error");
            contenedor_element.appendChild(item_small);
            //console.log(item);
          }
          
        texto_error = `${texto_error} Falta Campo Nombre del analista de Insititucion 1 <br>`;
      }


      if (asterisco.classList.contains("form-text-error") == false) {
        // console.log(asterisco.classList.contains("form-text-error"));
        asterisco.classList.add("form-text-error");
      }

      if (texto_error != "") {
        mensajeError('#alerta', texto_error);
        irArriba();
        return false;
      }

      
     
      
    } else {
      
      if(texto_error==""){
        limpiaMensajeError('#alerta');
      }

      const asterisco = document.querySelector('#asterisco_analista');
      if(asterisco.classList.contains("form-text-error") == true){
        const asterisco = document.querySelector('#asterisco_analista');
        asterisco.classList.remove("form-text-error");
  
        const element_padre_uno = document.querySelector('#inst_uno_analista');
        if (element_padre_uno.classList.contains("form-control-error") == true && $('#inst_uno_analista').val() != "") {
          element_padre_uno.classList.remove("form-control-error");
          const contenedor_uno = element_padre_uno.parentElement;
          const small_uno = contenedor_uno.querySelector("SMALL");
          contenedor_uno.removeChild(small_uno);
        }

        const element_padre_dos = document.querySelector('#inst_dos_analista');
        if (element_padre_dos.classList.contains("form-control-error") == true && $('#inst_dos_analista').val() != "") {
          element_padre_dos.classList.remove("form-control-error");
          const contenedor_dos = element_padre_dos.parentElement;
          const small_dos = contenedor_dos.querySelector("small");
          contenedor_dos.removeChild(small_dos);
        }
        
      }

      
      
      let tabla=obtenerDatos();

      let datos=`
      &inst_uno_3_fecha=${$('#institutoUnoCalendarYear').val()}
      &inst_dos_3_fecha=${$('#institutoDosCalendarYear').val()}
      &inst_uno_3_nombreAnalista=${$('#inst_uno_analista').val()}
      &inst_dos_3_nombreAnalista=${$('#inst_dos_analista').val()}
      `;
      
      // let form_url = $('#form_checkList').attr("action");
      // let token = `_token=${$('input[name="_token"]').val()}`;

      // $.ajax({
      //   type: 'POST',
      //   data: token+tabla+datos,
      //   url: form_url,
      //   success:function(r){
      //     window.location = "../formatoCompatibilidad";
      //     //console.log(r)
      //   },error: function (error) {
      //     //console.error();
      //   }
      // });

    }


  });
});
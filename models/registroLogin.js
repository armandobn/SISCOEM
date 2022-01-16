/*$(document).ready(function(){
  $("btn_registrar").click(function(){
    if($('#registrar_nombre').val() == ""){
      alert("Falra que escribas el nombre");
      return false;
    }else if($('#registrar_apePaterno').val() == ""){
      alert("Falta que escribas el apellido paterno");
      return false;
    }else if($('#registrar_apeMaterno').val() == ""){
      alert("Falta que escribas el apellido materno");
      return false;
    }else if($('#registar_emali').val() == ""){
      alert("Falta que escribas el Email");
      return false;
    }else if($('#registrar_password').val() == ""){
      alert("Falta que escribas la contraseña");
      return false;
    }

    informacion_recolectada = "nombre=" + $('#registrar_nombre').val() +
                                                                "&apePaterno=" +$('#registrar_apePaterno').val() +
                                                                "&apeMaterno=" +$('#registrar_apeMaterno').val() +
                                                                "&email=" +$('#registrar_email').val() +
                                                                "&password" +$('#registrar_password').val();
                                              
    $.ajax({
      type: "POST",
      url: "../controllers/registroLogin.php",
      data: informacion_recolectada,
      success: function(r){
        if(r==1){
          $('#formlgin')[0].reset();
          alert("Se registro con exito");
          return false;
        }else{
          alert("No se guardo la informacion");
          return false;
        }
      }
    });
  });
});*/



$gmx(document).ready(function (){

  $('#btn_registrar').click(function () {
    alert("No se ha llenado algun campo");
    let texto_error="";
    if ($('#nombre').val() == "") {
        alertaError('#asterisco_nombre', '#nombre');
        texto_error = texto_error + 'El campo del nombre esta vacio <br>';
        }else{
            limpiarAlertaError('#asterisco_nombre', '#nombre');
            texto_error = "";
          }if($('#apePaterno').val() == ""){
            alertaError('#asterisco_apePaterno', '#apePaterno');
            texto_error = texto_error + 'El campo apellido paterno esta vacio <br>';
        }else{
            limpiarAlertaError('#asterisco_apePaterno', '#apePaterno');
            texto_error = "";
          }if($('#apeMaterno').val() == ""){
            alertaError('#asterisco_apeMaterno', '#apeMaterno');
            texto_error = texto_error + 'El campo apellido materno esta vacio <br>';
        }else{
            limpiarAlertaError('#asterisco_apeMaterno', '#apeMaterno');
            texto_error = "";
          }if($('#email').val() == ""){
            alertaError('#asterisco_email', '#email');
            texto_error = texto_error + 'El campo email esta vacio <br>';
        }else{
            limpiarAlertaError('#asterisco_email', '#email');
            texto_error = "";
        }if($('#password').val() == ""){
            alertaError('#asterisco_password', '#password');
            texto_error = texto_error + 'El campo Password esta vacio <br>';
        }else{
            limpiarAlertaError('#asterisco_password', '#password');
            texto_error = "";
        }if(texto_error!=""){
            mensajeError('#alerta',texto_error);
            return false;
            }else{
            limpiaMensajeError('#alerta');
<<<<<<< Updated upstream
            }

=======
        }

        informacion_recolectada = "nombre=" + $('#nombre').val()+
                                  "&apePaterno=" + $('#p').val() +
                                  "&apeMaterno=" + $('#segundoApellido').val() +
                                  "&email=" + $('#email').val() +
                                  "&password=" + $('#password').val();

            let form_url = $('#formlogin').attr("action");
            $.ajax({
              type: "POST",
              url: "form_url",
              data: informacion_recolectada,
              success: function(r){
                if(r==1){
                  $('#formlogin')[0].reset();
                  console.log("Se registro con exito");
                  return false;
                }else{
                  console.log("No se guardo la informacion");
                  return false;
                }
              }
            });
>>>>>>> Stashed changes
          });
        });
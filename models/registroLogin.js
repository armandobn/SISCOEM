$gmx(document).ready(function (){
          
  $('#btn_registrar').click(function () {
    alert("hola");
    let texto_error="";
    if ($('#nombre').val() == "") {
        alertaError('#asterisco_nombre', '#nombre');
        texto_error = texto_error + 'El campo del nombre esta vacio <br>';
        }else{
            limpiarAlertaError('#asterisco_nombre', '#nombre');
            texto_error = "";
          }if($('#primerApellido').val() == ""){
            alertaError('#asterisco_primerApellido', '#primerApellido');
            texto_error = texto_error + 'El campo primerApellido esta vacio <br>';
        }else{
            limpiarAlertaError('#asterisco_primerApellido', '#primerApellido');
            texto_error = "";
          }if($('#segundoApellido').val() == ""){
            alertaError('#asterisco_segundoApellido', '#segundoApellido');
            texto_error = texto_error + 'El campo segundoApellido esta vacio <br>';
        }else{
            limpiarAlertaError('#asterisco_segundoApellido', '#segundoApellido');
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
            limpiarError('#asterisco_password', '#password');
            texto_error = "";
        }if(texto_error!=""){
            mensajeAlertaError('#alerta',texto_error);
            return false;
            }else{
            limpiaMensajeError('#alerta');
            }
            let form_url = $('#formlogin').attr("action");
                      $.ajax({
                        type: 'post',
                        url: form_url,
                        data: $('#formlogin').serialize(),
                        success: function(r){
                          console.log(r);
                        } 

                      });
          });
        });
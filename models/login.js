$gmx(document).ready(function (){
        
            $('#enviar').click(function () {
                let texto_error="";
                if ($('#usuario').val() == "") {
                    alertaError('#asterisco_usuario', '#usuario');
                    texto_error = texto_error + 'El campo del Usuario esta vacio <br>';
                    }else{
                        limpiarAlertaError('#asterisco_usuario', '#usuario');
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
                        }
                        
            });
    });

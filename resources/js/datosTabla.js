

const selectCategoria = document.querySelector('#categoria');
selectCategoria.addEventListener('change', (event) => {
    let select=event.target.value;
    let token=`_token=${$('input[name="_token"]').val()}`;
    let info=`${token}&categoria=${select}`;
    $.ajax({
      type:'POST',
      url: "../../../registrarDocente/categoria",
      data: info,
      success:function(r){
       $('#puesto').val(r[0]["denominacion"]);
      }

    });
    
   

});

$gmx(document).ready(function () {

  $('#btn_actualizar').click(function(){

    let form_url=$('#form_actualizar_tabla').attr("action");
    let puesto=`&puesto=${$('#puesto').val()}`;
    $.ajax({
      type:'POST',
      url: form_url,
      data: $('#form_actualizar_tabla').serialize()+puesto,
      success:function(r){
        window.location=`../../${r[0]['rfc']}`;
      }

    });

  });


  
});
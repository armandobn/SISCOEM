

const selectCategoria = document.querySelector('#categoria');
selectCategoria.addEventListener('change', (event) => {
    let select=event.target.value;
    //alert( `Te gusta el sabor ${select}`);
    
    if($('#cat').val()=="0"){
      
      let token=`_token=${$('input[name="_token"]').val()}`;
      let info=`${token}&categoria=${select}`;
      $.ajax({
        type:'POST',
        url: "../../registrarDocente/categoria",
        data: info,
        success:function(r){
          //console.log(r[0]["denominacion"]);
  
         $('#puesto').val(r[0]["denominacion"]);
        }
  
      });
    }else{
      let token=`_token=${$('input[name="_token"]').val()}`;
      let info=`${token}&categoria=${select}`;
      $.ajax({
        type:'POST',
        url: "../../../registrarDocente/categoria",
        data: info,
        success:function(r){
          //console.log(r[0]["denominacion"]);
  
         $('#puesto').val(r[0]["denominacion"]);
        }
  
      });
    }
    
   

});

$gmx(document).ready(function () {


  $('#btn_actualizar').click(function(){

    console.log($('#form_actualizar_tabla').serialize());
    let form_url=$('#form_actualizar_tabla').attr("action");
    let puesto=`&puesto=${$('#puesto').val()}`;
    //console.log(puesto);
    $.ajax({
      type:'POST',
      url: form_url,
      data: $('#form_actualizar_tabla').serialize()+puesto,
      success:function(r){
        // console.log(r);
        // console.log(r['datos'][1]);
        // console.log(r['datos'][0][0]['rfc']);
        if(r['datos'][1]==1){
          window.location=`../${r['datos'][0][0]['rfc']}`;
        }
      }

    });

  });

  $('#btn_agregar').click(function(){

    //console.log($('#form_agrega_datosTabla').serialize());
    let form_url=$('#form_agrega_datosTabla').attr("action");
    let puesto=`&puesto=${$('#puesto').val()}`;
    $.ajax({
      type:'POST',
      url: form_url,
      data: $('#form_agrega_datosTabla').serialize()+puesto,
      success:function(r){
        // console.log(r);
        // console.log(r['datos'][1]);
        // console.log(r['datos'][0]);
        if(r['datos'][1]==1){
          window.location=`${r['datos'][0]}`;
        }

      }

    });

  });

  
});
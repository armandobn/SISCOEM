$gmx(document).ready(function() {
  $('#btn_tramite').click(function(){

    let e = document.getElementById("tramite");
    let e_value = e.value;
    let e_opcion = e.options[e.selectedIndex].text;
    
    
    //alert("Value: "+e_value+" Contenido de la Opcion: "+e_opcion);


  });
});

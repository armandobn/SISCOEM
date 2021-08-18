/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./resources/js/datosTabla.js ***!
  \************************************/
var selectCategoria = document.querySelector('#categoria');
selectCategoria.addEventListener('change', function (event) {
  var select = event.target.value; //alert( `Te gusta el sabor ${select}`);

  var token = "_token=".concat($('input[name="_token"]').val());
  var info = "".concat(token, "&categoria=").concat(select);
  $.ajax({
    type: 'POST',
    url: "../../../registrarDocente/categoria",
    data: info,
    success: function success(r) {
      //console.log(r[0]["denominacion"]);
      $('#puesto').val(r[0]["denominacion"]);
    }
  });
});
$gmx(document).ready(function () {
  // var pathname = window.location.pathname;
  // //alert(pathname);
  // let token=`_token=${$('input[name="_token"]').val()}`;
  // $.ajax({
  //   type: 'POST',
  //   url: pathname,
  //   data: token,
  //   success: function (r) {
  //     // console.log(r);
  //     let tabla_dato="";
  //     // console.log(r['docentesTabla'].length);
  //     for(let i=0; i<r['docentesTabla'].length; i++){
  //       tabla_dato=tabla_dato+`
  //       <tr>
  //         <td>${r['docentesTabla'][i]['unidad']}</td>
  //         <td>${r['docentesTabla'][i]['sub_unidad']}</td>
  //         <td>${r['docentesTabla'][i]['categoria']}</td>
  //         <td>${r['docentesTabla'][i]['horas']}</td>
  //         <td>${r['docentesTabla'][i]['plaza']}</td>
  //         <td>${r['docentesTabla'][i]['motivo']}</td>
  //         <td>${r['docentesTabla'][i]['categoria']}</td>
  //         <td>${r['docentesTabla'][i]['id']}
  //           <a href="${r['docentesTabla'][i]['id']}/edit"
  //           class="btn btn-primary">Editar</a>
  //         </td>
  //         <td>
  //           <form action="${r['docentesTabla'][i]['id']}/${r['docentesTabla'][i]['rfc']}" method="get" id="form_eliminar_datosTabla">
  //             <button type="submit" class="btn btn-primary">Eliminar(${r['docentesTabla'][i]['id']})</button>
  //           </form>
  //         </td>
  //       </tr>  
  //         `;
  //     }
  //     // console.log(r['docentesTabla']);
  //     // console.log(tabla_dato);
  //     tabla=`
  //     <div class="table-responsive form-group">
  //       <table class="table table-bordered" id="tabla_base">
  //       <thead>
  //           <tr>
  //               <th scope="col">Unidad</th>
  //               <th scope="col">Sub-unidad</th>
  //               <th scope="col">Categoria</th>
  //               <th scope="col">Horas</th>
  //               <th scope="col">Plaza</th>
  //               <th scope="col">Motivo</th>
  //               <th scope="col">Denominacion de la categoria o puesto</th>
  //               <th scope="col">Editar</th>
  //               <th scope="col">Eliminar</th>
  //           </tr>
  //       </thead>
  //       <tbody>
  //          ${tabla_dato}
  //       </tbody>
  //       </table>
  //     </div>  
  //     `;
  //     $('#datos_tabla_anuncio_usuario').html(tabla);
  //   }
  // });
  $('#btn_actualizar').click(function () {
    console.log($('#form_actualizar_tabla').serialize());
    var form_url = $('#form_actualizar_tabla').attr("action");
    var puesto = "&puesto=".concat($('#puesto').val()); //console.log(puesto);

    $.ajax({
      type: 'POST',
      url: form_url,
      data: $('#form_actualizar_tabla').serialize() + puesto,
      success: function success(r) {
        //console.log(r);
        //console.log(r[0]['rfc']);
        window.location = "../../".concat(r[0]['rfc']);
      }
    });
  });
});
/******/ })()
;
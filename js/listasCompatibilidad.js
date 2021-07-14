function lista(){
    botonCompletado.addEventListener("click", (evento) => {
        evento.preventDefault();
        let nombre = document.getElementById("nombre")
        let tmm = document.getElementById("tmm")
        let ct = document.getElementById("ct")
        let filiacion = document.getElementById("filiacion")
        let ceocb = document.getElementById("ceocb")
        let fecha = document.getElementById("fecha")
        let efectos = document.getElementById("efectos")
        let siapsepweb = document.getElementById("siapsepweb")
        let clave = document.getElementById("clave")
        let consecutivo = document.getElementById("concecutivo")

        if (nombre.value == "") {
            return alert("Falta tu nombre.");
        }
        if (tmm.value == "") {
            return alert("Falta Ingresa MOV-MOT.");
        }
        if (ct.value == "") {
            return alert("falta Ingresa C.T.");
        }
        if (filiacion.value == "") {
            return alert("falta la Filiacion.");
        }
        if (ceocb.value == "") {
            return alert("falta Ingresar No CETis o CBTis.");
        }
        if (fecha.value == "") {
            return alert("falta Ingresar la Fecha.");
        }
        if (efectos.value == "") {
            return alert("falta Ingresa Efectos.");
        }
        if (siapsepweb.value == "") {
            return alert("falta Ingresa No.Doc SIAPSEPWEB.");
        }
        if ( clave.value == "") {
            return alert("falta Ingresa Clave(s).");
        }
        if (consecutivo.value == "") {
            return alert("falta No.Consecutivo.");
        }
        return false;
    });   
   
} 
function tablaLista(){
 var opcion01 = document.getElementById('opcion01').checked;
 var opcion02 = document.getElementById('opcion02').checked;
 var opcion03 = document.getElementById('opcion03').checked;
 var opcion04 = document.getElementById('opcion04').checked;
 var opcion05 = document.getElementById('opcion05').checked;
 var opcion06 = document.getElementById('opcion06').checked;
 var opcion07 = document.getElementById('opcion07').checked;

 document.getElementById('mensaje').innerHTML = 
 'CheckBox 1: '+opcion01+'\n'+'CheckBox 2: '+opcion02+'\n'+
 'CheckBox 3: '+opcion03+'\n'+'CheckBox 4: '+opcion04+'\n'+
 'CheckBox 5: '+opcion05+'\n'+'CheckBox 6: '+opcion06+'\n'+'CheckBox 7: '+opcion07;
}
let botonCompletado = document.getElementById("btn");
function firma(){
    botonCompletado.addEventListener("click", (evento) => {
        evento.preventDefault();
        let nombre = document.getElementById("nombre")
        let fecha = document.getElementById("fecha")
        let firma = document.getElementById("firma")
        if (nombre.value == "") {
            return alert("Falta tu nombre.");
        }
        if (fecha.value == "") {
            return alert("Falta la fecha.");
        }
        if (firma.value == "") {
            return alert("falta la firma.");
        }
        return false;
    });   
}
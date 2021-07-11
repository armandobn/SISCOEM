function logear(){
    var idUsuario, Password;
    idUsuario = document.getElementById("usuario").value;
    Password = document.getElementById("password").value;
  
    if(idUsuario=="" || Password==""){
      alert("Todos los campos son obligatorios.");
      return false;
    }else if(idUsuario.length>50){
      alert("El email debe tener menos de 51 carácteres.");
      document.getElementById("usuario").value = "";
      document.getElementById("usuario").focus();
      return false;
    }else if(Password.length>16){
      alert("La contraseña debe tener menos de 17 carácteres.");
      document.getElementById("password").focus();
      return false;
    }
  }
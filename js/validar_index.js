function logear(){
    var usuario, password;
    usuario = document.getElementById("usuario").value;
    password = document.getElementById("password").value;
  
    if(usuario=="" || password==""){
      alert("Todos los campos son obligatorios.");
      return false;
    }else if(usuario.length>50){
      alert("El email debe tener menos de 51 carácteres.");
      document.getElementById("usuario").value = "";
      document.getElementById("usuario").focus();
      return false;
    }else if(password.length>16){
      alert("La contraseña debe tener menos de 17 carácteres.");
      document.getElementById("password").focus();
      return false;
    }
  }
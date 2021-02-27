Login.validarEstado("login");

let correo=document.getElementById("inp-correo")
let password=document.getElementById("inp-password")
let login=document.getElementById("inp-login");

login.addEventListener("click",()=>{
    let login=new Login();
    
    let config={
        elemento:"mensaje_error",
        destino:"https://www.google.com",
        mensaje="Valida bien tus datos",
      
    }

    login.validarAcceso(correo.value,password.value,config);
    elemnt.addClass("activo")

})

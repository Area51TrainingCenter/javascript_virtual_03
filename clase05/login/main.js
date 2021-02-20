validarEstadoLogin();

let correo=document.getElementById("inp-correo")
let password=document.getElementById("inp-password")
let login=document.getElementById("inp-login");

login.addEventListener("click",()=>{

    loginWebService(correo.value,password.value)
})

function loginWebService(par_correo,par_password){
     let datos=new FormData();
     datos.append("correo",par_correo)
     datos.append("password",par_password)
     let config={
        method:"POST",
        body:datos
     };
     let url="http://sminnova.com/recurso_clase/api/usuario/login";
    fetch(url,config)
    .then((data)=>{return data.json()})
    .then((data)=>{
        if(data[0].estado==1){
            console.log("LOS DATOS SON CORRECTOS , BIEVENIDO")
            loginStorage();
            window.location="inicio.html"
        }else{
            console.log("LOS DATOS SON INCORREOS")
            document.getElementById("error").innerHTML="<strong>Revisa los datos ingresados</strong>";
        }
            /*console.log(data[0])
            let pro=data[0].hasOwnProperty("mensaje");
            if(pro){
                // 
                console.log("LOS DATOS SON INCORREOS")
            }
            else{
                console.log("LOS DATOS SON CORRECTOS , BIEVENIDO")
            }*/

       
    })
    .catch((data)=>{
        console.log(data);
    })
}

function loginStorage(){
    localStorage.login="true"
}
function logoutStorage(){
    localStorage.clear();
}

function validarEstadoLogin(){
    if(localStorage.login=="true"){
        window.location="inicio.html";
    }
}
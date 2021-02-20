validarEstadoLogin();
function logoutStorage(){
    localStorage.clear();
    window.location="index.html"
}

function validarEstadoLogin(){
    if(localStorage.login=="true"){
      
    }else{
        window.location="index.html"
    }
}
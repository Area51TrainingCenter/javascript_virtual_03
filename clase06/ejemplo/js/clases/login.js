/*****
config={
    elemento:Es el identificador que se usa para definir donde mostrar el mensaje,
    destino:"https://www.google.com",
    mensaje="Valida bien tus datos"
}
 ****/


class Login{
    constructor(){

    }
    validarAcceso(par_correo,par_password){
       
        let datos=new FormData();
        datos.append("correo",par_correo)
        datos.append("password",par_password)
        let config={
           method:"POST",
           body:datos
        };
        let url="http://testing.com/recurso_clase/api/usuario/login"
        fetch(url,config)
        .then((data)=>{return data.json()})
        .then((data)=>{
            if(data[0].estado==1){
             
                this.loginStorage();
                window.location=config.destino
            }else{
                
                document.getElementById(config.elemento).innerHTML="<strong>"+config.mensaje+"</strong>";
            }
      
        })
        .catch((data)=>{
            console.log(data);
        })

    }

    loginStorage(){
        localStorage.login="true"
    }
    static logoutStorage(){
        localStorage.clear();
    }
    
    static validarEstado(pagina="contenido"){
      
        if(pagina=="login"){
            if(localStorage.login=="true"){
                window.location="inicio.html"
            }  
            
        }else{
          
            if(localStorage.login!="true"){
                window.location="index.html"
            }
        }

    }
  

}


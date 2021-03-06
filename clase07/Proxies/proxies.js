let configuracionProxy={
    get(objeto,propiedad){
            /*if(localStorage.login=="true"){
                return objeto[propiedad];
            }else{
                console.log("Como desarrollador no tienes el permiso necesario para acceder al dato")
            }*/
            if(localStorage.rol=="admin"){
                return objeto[propiedad];
            }else{
                console.log("Como desarrollador no tienes el permiso necesario para acceder al dato")
            }
           
    },
    set(objeto,propiedad,valor){
      
        let estado=false;
        let mensaje="";

        switch(propiedad){
            case "correo":

                break;
            case "edad":
                    if(typeof valor=="number"){
                       estado=true;
                    }else{                
                        mensaje="La edad solo soporta valores numericos , por favor revisar el valor ingresado";
                    }

                break;
            case "estado":
                    if(typeof valor=="boolean"){
                        estado=true;
                    }else{
                        mensaje="El estado solo soporta valores entre true o false";
                    }
                   
                break;
            case "nombre":
                        if(typeof valor=="string"){

                            let caracteres=valor.split("");
                            let estadoNumero=false;
                            for(let item of caracteres){
                                if(parseInt(item)){
                                   estadoNumero=true;
                                }else{
                                  
                                }
                            }
    
                            if(estadoNumero==true){
                                mensaje="El Nombre no debe contener numeros"
                            }
                            else{
                                estado=true;
                            }

                        }else{
                            mensaje="El nombre solo soporta valores de cadena"
                        }
                break;
            default:
                break;
        }
        if(estado){
            objeto[propiedad]=valor;
        }else{
         
        }
      
    }
}


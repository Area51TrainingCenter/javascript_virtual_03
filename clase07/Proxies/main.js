let objeto={
    nombre:"Juan Carlos",
    dni:"123123",
    estado:true,
    edad:20
}
let error="";


let configuracionProxy={
    get(objeto,propiedad){
           
         
    },
    set(objeto,propiedad,valor){
       
        let estado=false;
        let mensaje="";

        switch(propiedad){
         
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
            error=mensaje
        }
      
    }
}




/* update de informacion */
/*
nombre no permita numeros
dni no permita mas de 8 caracteres
estado siempre sea boleano
edad siempre sea un numero
*/


let objetoProxy=new Proxy(objeto,configuracionProxy)

console.log(objetoProxy.nombre="a123sd");


console.log(error)




/*
let presona=new Persona();
let personaProxy=new Proxie(persona,proxiPersona);*/





function igv(monto){

    if(typeof monto!="number"){
        //throw "error de formato";
        console.log("erro de formato")
        throw {
            message:"ERROR"
        }
    }
}

//igv("123")
console.log("Hola")
let obj=
{
    edad:10
}
let proxie={
    get(){},
    set(objeto,propiedad,valor){
        if(propiedad=="edad"){
            if(typeof valor!="number"){
                throw {codigo_error:10,mensaje:"Estamos resolvienod algunos inconvenenites"}
            }
        }
    }
}



let objProxie=new Proxy(obj,proxie);

try{
 // intenta hacer este codigo
 objProxie.edad="30"
}catch(exception){
    //alert(exception.mensaje);
    //console.log(exception);
}

try{
    obtenerDatosSitios()
}
catch(exception){
    ///alert("no podemos obtener la informacion en este momento , intentalo mas tarde");
}
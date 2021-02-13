let i=0;
let estado=true;
while(estado){
    i++;
    let usuario=prompt("ingresa usuario")
    //console.log(i)
    
    
    if(usuario=="admin"){
        estado=false;
        console.log("Bievenido Admin");
    }else{
        if(i==3){
            estado=false;
            console.log("Bloqueado por intentos fallidos");
        }
    }


}

///
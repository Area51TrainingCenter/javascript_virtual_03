

let nuevosDatos=new Map();
nuevosDatos.set("nombre", "Juan Carlos");
nuevosDatos.set("correo","jramos@gmail.com");

let obj_={
    nombre:"Diego",
    Correo:"diego@@gmail.com"
}



let estado=nuevosDatos.has("nombre");

console.log(estado);

if(nuevosDatos.has("nombre")){
    let dato=nuevosDatos.get("nombre");
    console.log(dato);
}


console.log(nuevosDatos.size)

let datos=["Juan","Diego"]


let obj={
    nombre:"Diego",
    Correo:"diego@@gmail.com"
}

for(let item of datos){
    console.log(item)
 // iterar sobre arreglo
}

for (let item in obj){
// iterar las propiedades de un objetos
    console.log(item)
    //console.log(obj[item])
}


for (let item of nuevosDatos){
    console.log(item)
}




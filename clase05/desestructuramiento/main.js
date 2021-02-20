let datos=["Juan carlos", "Correo@gmail.com","jramos"];
/*
let nombre=datos[0]
let correo=datos[1];
let usuario=datos[2]
*/

let [nombre,correo,usuarioa,telefono="NO CUENTA CON TELEFONO"]=datos;




let usuario=["Juan Carlos","Jramos"]

//registroUsuario(usuario);

function registroUsuario([nombre,correo,codigo="NO ESPECIFICADO"]){
    console.log("::::::::::")
    console.log(nombre)
    console.log(correo)
    console.log(codigo)
}

let arreglo1=["1_dato1","1_dato2","1_dato3"]
let arreglo2=["2_dato1","2_dato2","2_dato3"]

let [valor1,valor2,valor3]=arreglo1;
let [valor4,valor5,valor6]=arreglo2;

demo(arreglo1);
demo(arreglo2);

function demo([dato1,dato2,dato3]){

}

let persona={
    nombre:"JC",
    telefono:"987987987",
    pais:"Peru"
}
/*
let {pais}=persona;
console.log(pais)
*/
function registroPersona({nombre,telefono}){
    console.log(nombre);
    console.log(telefono);
}

registroPersona(persona);

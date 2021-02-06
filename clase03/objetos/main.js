console.log("objetos");
let objeto_estudiante={
    nombre:"Diego",
    apellidos:"Ramos",
    telefono:"987987987",
    correo:"diego@gmail.com",
    estado:true
}


console.log(objeto_estudiante.nombre)
console.log(objeto_estudiante.apellidos)
console.log(objeto_estudiante.telefono)
console.log(objeto_estudiante.correo)
console.log(objeto_estudiante.estado)

objeto_estudiante.nombre;

objeto_estudiante["nombre"];

obtenerDato("apellidos")


function obtenerDato(parametro){
    
   console.log(objeto_estudiante[parametro])

}




let objeto_curso={
    nombre:"Curso1",
    horario:["09:00-10:00","12:00-13:00","16:00-17:00"],
    sedes:["Lince","Jesus Maria","Miraflores"]
}

console.log(objeto_curso.horario);


objeto_curso.horario;
let limite=objeto_curso.horario.length;

for(let i=0;i<limite;i++){
    console.log(objeto_curso.horario[i])
}

let empleado={
    nombre:"Carlos",
    edad:22,
    domicilio:{
        direccion:"jr francisco lazo",
        numero:1672,
        distrito:"lince",
        referencia:{
            avenidad:"",
            lugar:"",
            nombre_conocido:"",
        },
        latitud:123,
        longitud:747897
    },
    estudios:[
        {
        nombre:"diplomado en gestion de recursos",
        tiempo:"2 años",
        estado:"concluido"
        },
        {
            nombre:"diplomado en gestion de redes",
            tiempo:"1 año",
            estado:"concluido"
        },
        {
            nombre:"diplomado en finanzas",
            tiempo:"2 años",
            estado:"concluido"
        }
    ]

}

console.log(empleado.domicilio)
console.log(empleado.domicilio.direccion)
console.log(empleado.domicilio.distrito)

console.log(empleado.estudios);

for(let i=0;i<empleado.estudios.length;i++){
    console.log(empleado.estudios[i].nombre);
    console.log(empleado.estudios[i].estado);
}




let ejemplo={
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }


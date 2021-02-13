let arreglo=["Persona1","Persona2","Persona3"];

for(let i=0;i<10;i++){
    console.log(i)
}

let limite=arreglo.length;

for(let i=0;i<limite;i++){
    console.log(arreglo[i]);
}

let objeto={
    nombre:"Juan",
    apellido:"Ramos",
    correo:"jramos"
}
/*
objeto.propiedad*/
// objeto["propiedad"] == Valor
for (let prop in objeto){
    console.log("****")
    console.log(prop)
    console.log(objeto[prop])
}

for (let item of arreglo){
    console.log(item);
}

for (let [index,item] of arreglo.entries()){
    console.log(index);
    console.log(item);
}

arreglo.forEach(function(elemento){
    console.log(elemento)
})


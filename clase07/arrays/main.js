let datos=["aas asd asdas"," asdas basdas"," asdc","d"];
//datos.push() // agregar al final
//datos.pop() // remover al final
//datos.unshift(); //  agrega al inicio
//datos.shift(); // eliminar del inicio


let nuevosDatos=datos.map((item)=>{
    return item.toUpperCase().trim();
})

console.log(nuevosDatos);


let notas=[15,10,20];
let resultado=notas.find((num)=>{
    return num==30
})


let notas2=[15,13,20,17,14];

let resultado2=notas2.filter((num)=>{
    let estado=false;
    if(num>15){
        estado=true;
    }

    return estado;
})
console.log(resultado2);


console.log(notas.join(","));

console.log(notas2.includes(15)); //

let cursos=["html","css",{nombre:"jc"}];  // NO CORRECTO
console.log(cursos.includes({nombre:"jc"})) // NO CORRECTO
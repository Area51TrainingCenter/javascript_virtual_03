let ingredientes=new Set();
ingredientes.add(51);
ingredientes.add(60);
ingredientes.add(10);
console.log(ingredientes.size)
ingredientes.add(14);
console.log(ingredientes.size)
ingredientes.add(60);
console.log(ingredientes.size)

console.log(ingredientes.has(61))

let registro=[10,15,20,5,20,10];
let newSet=new Set(registro);
console.log(newSet);
let registro_sin_duplicados=Array.from(newSet);
console.log(registro_sin_duplicados);


let ingredientes2=new Set(["sal","azucar","limon"])
ingredientes2.add("SAL")
console.log(ingredientes2)
for(let item of ingredientes2 ){
    console.log(item)
}
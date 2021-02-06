let arreglo=[];
print()

// insertar un elemento
// agrega un elemento al final de la lista
arreglo.push(1)
print();

arreglo.push("Juan")
print();

// agrega un elemento al inicio de la lista
arreglo.unshift("Diego")
print()

arreglo.unshift(50)
print()

function print(){
    console.log(arreglo);
    console.log(arreglo.length)
}


// Remover elementos de un arreglo 
// remueve el último elemento de la lista
arreglo.pop()
print();

// Remueve el primer elemento de la lista
arreglo.shift()
print();
arreglo.shift()
print();



let meses=["Enero",
			"Febrero",
			"MAR",
			"ABR",
			"MAY",
			"JUN",
			"JUL",
			"AGO",
			"SEPT",
			"OCT",
			"NOV",
			"DIC"]

console.log(meses[11])

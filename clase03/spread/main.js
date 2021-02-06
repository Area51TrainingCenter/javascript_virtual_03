
//PARAMETROS REST
console.log("spread");

function suma(...valores){
    
    let suma=0;
    for(let i=0;i<valores.length;i++)
    {
        
        suma=suma+valores[i];
    }
    return suma;

}




console.log(suma(5,6,5,20));


//OPERADOR SPREAD


let numeros=[4,5];
console.log(...numeros)

console.log(restar(...numeros));

/*restar(10,5);*/
restar(numeros[0],numeros[1])
restar(...numeros)

function restar(num1,num2){
    return num1-num2;
}





function calcular(...valores){

}

calcular(1,2,3,54,6,7,23,234);


lista_numeros=[4,456,78,456,31,24,1,236,94,15156,1,2];

//...lista_numeros

calcular(...lista_numeros);

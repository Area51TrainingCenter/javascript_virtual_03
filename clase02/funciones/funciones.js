
/*** HOISTING ***/
/*
function suma(){
    var num1=10;
    var num2=20;
    var suma=num1+num2;
    console.log(suma);
}

function resta(valor1,valor2){
    // ambito 
    var resta=valor1-valor2;
    console.log(resta);
}

var division
var mult
var datos;
var numero;
*/
/*** END HOISTING ***/


// Las funciones pueden ser creadas por Declaración de función
// o por Expresión de función 

// Declaracion de funcion
function suma(){
    var num1=10;
    var num2=20;
    var suma=num1+num2;
    console.log(suma);
}

function resta(valor1,valor2){
    // ambito 
    var resta=valor1-valor2;
    console.log(resta);
}

// Creando una función pero la estamos manejando 
// como un expresión de funcion

var division=function(){
    var num1=10;
    var num2=5;
    var div=num1/num2;
    console.log(div)
}

var mult=function(num1,num2){
    var mul=num1*num2;
    console.log(mul);
}

function esMayorEdad(edad){
    var estado;
    //
    if(edad>18){
        estado=true;
    }
    else{
        estado=false;
    }
    return estado;
}

function calcularIGV(monto){
    var igv=monto*0.18;
    return igv;
}

function tipoCambio(){
    var tipo=3.5;
    console.log(tipo); 
    return tipo;
}
 // declaracion de function tipo flecha

 // (parametros)=>{ ambito de funcion }

 
 /*var calcularcambio=(valor)=>{
     var cambio=valor*3.5;
     //console.log(cambio);
     return cambio;
 }*/

var calcularcambio = valor => valor*3.5;



var res=calcularcambio(15);
console.log(res);
 

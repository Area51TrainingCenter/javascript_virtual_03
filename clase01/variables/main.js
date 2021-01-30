// console.log()

// creando una variable
var nombre_usuario;
var dato;

dato="Juan Carlos";
//var 1no; ERROR
//var 13; ERROR
//var nom persona ERROR


nombre_usuario=dato;

dato="luis"
//nombre_usuario="Juan Carlos";


console.log(nombre_usuario);

/*** 
Nombre
Telefono
año nacimiento
correo
***/


var nombre="JC";
var telefono="987654321";
var anio_nacimiento="1987";
var correo="jramos@gmail.com";

/*console.log(nombre)
console.log(telefono)
console.log(anio_nacimiento)
console.log(correo)
*/

var num1=10;
var num2=30;
var num3="50";

var suma=num1+num2;
var resta=num1-num2;
var mul=num1*num2;
var div=num1/num2;
/*
console.log(suma)
console.log(resta)
console.log(mul)
console.log(div)
*/
var suma2=num1+num3;
console.log(suma2);
/*
+ SUMA
+ CONCATENAR
//*"texto"+"texto2"="textotexto2"
- RESTA
* MUL
*/
dato1=10
dato2=30;
//SUMA o CONCATENAR 
dato1+dato2   // SUMA

dato1="10"
dato2="30";
//SUMA o CONCATENAR 
dato1+dato2   // CONCATENAR




dato1="10";
dato2=30;
//SUMA o CONCATENAR 
console.log(dato1+dato2)   //CONCATENAR 

dato1=10;
dato2="30";
//SUMA o CONCATENAR 
console.log(dato1+dato2)   //CONCATENAR 



num1="10";
num2="5";
resta=num1-num2;
console.log(resta);



// devuelve el valor en formato numerico
var valor_numero;
var valor_texto;
valor_texto="150";
valor_numero=parseInt(valor_texto);  // 150
console.log(valor_numero);


//variables de boolean
var  estado;
estado=true;
estado=false;

//variables de fecha
var fecha="23/01/2020";

var meses=["Enero",
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

var nueva_fecha=new Date();
var mes=nueva_fecha.getMonth();
console.log(nueva_fecha.getFullYear());
console.log(nueva_fecha.getDate());
console.log(nueva_fecha.getMonth());
console.log(nueva_fecha.getHours());
console.log(nueva_fecha.getMinutes());
console.log(nueva_fecha.getSeconds());


console.log("mes del año " +mes);


console.log(meses[mes]);

/*
class fecha{
	minutos,
	segundos,
	horas
	obtenerHora(){
		devuleve la horas
	}
	obtenerMinutos(){
		devuelve los minutos
	}
	obtenerSegundos(){
		deveulve segundos
	}

}
var valor=new fecha();
*/

// texto, numero, bool , fecha //

//                 1          2       3    4  5  6  7     8     9
var arreglo=["Juan Carlos","Diego","Luis",20,30,25,true,false,true];
//                 0           1      2    3  4  5  6     7     8


console.log(arreglo);
console.log(arreglo.length) // 9
console.log(arreglo[0]);
console.log(arreglo[5]);
console.log(arreglo[8]);


var objeto={
	nombre:"Juan Carlos",
	correo:"jramos@gmail.com",
	estado:true,
	edad:20
}

var objeto2={
	nombre:"Diego",
	correo:"jramos@gmail.com",
	estado:true	
}


objeto.estado;
objeto.nombre;



var objetos=[objeto,objeto2];








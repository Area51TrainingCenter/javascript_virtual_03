console.log("conociendo eventos");

function evento1(){
    console.log("hizo click en el elemento h1")
}


// uso del API DOCUMENT
// propiedades disponbile con el API document https://www.w3schools.com/jsref/prop_html_id.asp

//let elemento=document.getElementById("sub_titulo"); 

//console.log(elemento.innerText);
//elemento.innerText="Contenido actualizado mediante JS"
/*
elemento.propiedad  // Obteniendo el valor de esa propiedad
elemento.propiedad="valor"  //actualizando el valor de esa propiedad
*/
/*
elemento.addEventListener("click",tarea1)

function tarea1(){
    console.log("hizo click a un elemento con addEventListener")
}
*/

let title=document.getElementById("title");
let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
// capturo el valor , sea cual sea inicial y lo guardo en una variable
let valor_inicial=title.innerText;
/*
btn1.addEventListener("click",tarea1)

function tarea1(){
    title.innerText="Texto modificado por JS"
}*/
/*
btn1.addEventListener("click",function (){ 
    title.innerText="Texto modificado por JS"
 })
 */

 btn1.addEventListener("click",()=>{
    title.innerText="Texto modificado por JS"
 })

btn2.addEventListener("click",tarea2)

function tarea2(){
    title.innerText=valor_inicial
}
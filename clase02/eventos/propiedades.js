let title=document.getElementById("title");
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let foto=document.getElementById("foto");
let caja=document.getElementById("caja");

//title.innerText="Actualizado<strong class='red'>123456</strong>";
title.innerHTML="Actualizado<strong class='red'>123456</strong>";
// obtienes el valor del atributo
//foto.getAttribute("src");
// actualizas el valor
//foto.setAttribute("src","nuevo valor");

var datos=foto.getAttribute("src");
console.log(datos);


btn1.addEventListener("click",()=>{
    foto.setAttribute("class","circulo");
    foto.setAttribute("src","https://img.freepik.com/vector-gratis/fondo-pintura-acuarela-rosa-vibrante_53876-58930.jpg?size=626&ext=jpg")
})

btn2.addEventListener("click",()=>{
    //console.log(caja.classList);
    caja.classList.remove("green");
    caja.classList.add("purple");
    caja.classList.add("purple");
    caja.classList.add("purple");
   
})
let btn=document.getElementById("btn-datos");
let formulario=document.getElementById("formulario");
let usuario=document.getElementById("inp-usuario");
let password=document.getElementById("inp-password");
let turno=document.getElementById("turno");

btn.addEventListener("click",()=>{
    event.preventDefault();
    console.log("hizo click en el boton");
    console.log(usuario.value)
    console.log(password.value)
    console.log(turno.value);
 
})
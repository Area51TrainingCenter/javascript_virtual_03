// guarda la informacion , hasta que tu la borre
console.log(localStorage.usuario);
localStorage.usuario="JC"
console.log(localStorage.usuario);

console.log(localStorage.getItem("usuario"))
/*let nombre;
console.log(nombre)
nombre="JC"
console.log(nombre);*/

// guarda la informacion mientras la session este activa
console.log(sessionStorage.correo)
sessionStorage.correo="jramos"
console.log(sessionStorage.correo)
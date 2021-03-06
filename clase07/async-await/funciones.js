async function obtenerUsuarios(){
    console.log("hola");
    let url="https://jsonplaceholder.typicode.com/users";
    let contenido=await fetch(url);
    let final=await contenido.json()
    console.log(final);
    console.log("adios");
    return 10;
}
async function obtenerData(){
  
    return 10;
}
function datos(){
    return 20;
}
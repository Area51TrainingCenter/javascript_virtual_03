let lista=document.getElementById("lista");

let obj=new XMLHttpRequest();
let url="https://jsonplaceholder.typicode.com/users"
// GET  no envia valores peticion , solo consulta informacion
// POST envia valores en la peticion
// UPDATE envia valores en la peticion
// DELETE envia valores en la peticion

obj.open("GET",url)
obj.send();
/*obj.onreadystatechange=function (){

}*/
obj.onreadystatechange=()=>{
    //console.log(obj.readyState);
    if(obj.readyState==4){
        //console.log(obj.responseText);
        let respuesta=JSON.parse(obj.responseText);
        console.log(respuesta)
        imprimirLista(respuesta);
       
              
    }

}


function imprimirLista(listado){
    
    let elemento="";
    for(let i=0;i<listado.length;i++){
        //console.log(listado[i].name)
        //console.log(listado[i].address.city)
        elemento=elemento+"<li>"+listado[i].name+" -- correo: "+listado[i].email+"</li>";
    }
    lista.innerHTML=elemento;
}


/*





obj.readyState

obj.responseText;
/*
0 No inicializado (objeto creado, pero no se ha invocado el método open)
1 Cargando (objeto creado, pero no se ha invocado el método send)
2 Cargado (se ha invocado el método send, pero el servidor aún no ha respondido)
3 Interactivo (se han recibido algunos datos, aunque no se puede emplear la propiedad responseText)
4 Completo (se han recibido todos los datos de la respuesta del servidor)
*/
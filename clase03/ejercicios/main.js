let tarea=document.getElementById("inp-tarea");
let btn_agregar=document.getElementById("inp-agregar");
let items=document.getElementById("items")
let tareas=[];

/*
btn_agregar.addEventListener("click",function(){
    let valor_actual_items=items.innerHTML;

    let valor=tarea.value;

    let elemento="<li>"+valor+"</li>";
    //<li>tarea1</li>
    items.innerHTML=valor_actual_items+elemento;


})*/


btn_agregar.addEventListener("click",function(){
    let valor=tarea.value;
    tareas.push(valor);
    imprimirListado(tareas);
    tarea.value="";
})


function imprimirListado(valor){
    let limite=valor.length;
    let contenido="";
    for(let i=0;i<limite;i++){
        let elemento="<li>"+valor[i]+"</li>";
        contenido=contenido+elemento;
    }
    items.innerHTML=contenido;
}
/*let ele=document.getElementById("btn-consultar")
ele.addEventListener("click",()=>{

})*/

$("#btn-consultar").click(function(){
    //$("#lista-sitios").html("<li class='list-group-item'>Elemento nuevo</li>")
   // $("#lista-sitios").append("<li class='list-group-item'>Elemento nuevo</li>")
    //console.log("le dio click al boton consultar")
    $("#lista-sitios").html("<span>Estamos obteniendo la informacion, espere un momento</span>");
    obtenerDatosv2();
})

function obtenerDatos(){
    let xhr =new XMLHttpRequest();
    let url="http://sminnova.com/restapitrujillo/sitiosturisticos"
    xhr.open("GET",url)
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            $("#lista-sitios").html("");
            respuesta=JSON.parse(xhr.responseText);
           
            for (let item of respuesta){
             
                $("#lista-sitios").append("<li class='list-group-item'>"+item.nombre+"</li>")
            }
        }
    }

}
function obtenerDatosv2(){
   /* let config={
        url:"",
        success:function(){},
        data:{},
        method:"GET"
    }*/
    $.ajax({
        method:"GET",
        url:"http://sminnova.com/restapitrujillo/sitiosturisticos",
        error:function(){},
        success:function(data){
            $("#lista-sitios").html("");
            let respuesta=JSON.parse(data);
            for (let item of respuesta){
             console.log(item)
                $("#lista-sitios").append("<li class='list-group-item'>"+item.id +") "+item.nombre+"</li>")
            }

        },
        complete:function(){
            console.log("la peticion finalizo")
        }
    })
}
/*$("#btn-consultar").mouseenter(function(){
    console.log("manejando otro evento");
})*/

/*$("#btn-consultar").dblclick(function(){
    console.log("manejando evento dblclick");
})*/
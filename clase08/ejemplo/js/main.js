

let servicios=new ServiciosSitios();
//let sitios=servicios.getTodosSitiosv3();
let sitios=servicios.getSitiosTuristicosCategoria(1);
sitios.then((data)=>{
    console.log(data);
    cargarSitiosHtml(data)
})




function cargarSitiosHtml(datos){
    //document.getElementById("listado-sitios-principal").innerHTML="";
    let temp="";
    for(let item of datos){
        temp=temp+`
        <div class="media" onclick="selecionsitio(${item.id})">
            <img  src="${item.foto_principal}" class="foto rounded-circle mr-3" alt="...">
            <div class="media-body">
                <h5 class="mt-0">${item.nombre}</h5>
                <p> Dirección: ${item.direccion}.</p>
            </div>
        </div>`;
    }
    document.getElementById("listado-sitios-principal").innerHTML=temp;

}


function obtenerporcategoria(ele,id){

    document.getElementById("listado-sitios-principal").innerHTML="<span>Cargando...</span>"

    limpiarSeleccion()
   
    
    ele.classList.add("activo");
    let porcategoria=servicios.getSitiosTuristicosCategoria(id);
    porcategoria.then((data)=>{
     
        cargarSitiosHtml(data);
    })
}

function obtenertodositios(ele)
{
    document.getElementById("listado-sitios-principal").innerHTML="<span>Cargando...</span>"
    limpiarSeleccion()
    let sitios=servicios.getTodosSitiosv3();
  
    ele.classList.add("activo");
    sitios.then((data)=>{
        console.log(data);
        cargarSitiosHtml(data)
    })


}

function limpiarSeleccion(){
    let items=document.querySelectorAll(".categorias div");
    for(let item of items){
        item.classList.remove("activo");
    }
}

function selecionsitio(id){
    console.log(id);
    localStorage.idseleccionado=id;
    window.location="detalle.html"
    console.log("click");
}
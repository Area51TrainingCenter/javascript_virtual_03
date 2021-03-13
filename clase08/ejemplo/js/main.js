

let servicios=new ServiciosSitios();
let sitios=servicios.getTodosSitiosv3();
sitios.then((data)=>{
    console.log(data);
    cargarSitiosHtml(data)
})


function cargarSitiosHtml(datos){
    let temp="";
    for(let item of datos){
        temp=temp+`<div class="media">
        <img  src="${item.foto_principal}" class="foto rounded-circle mr-3" alt="...">
        <div class="media-body">
          <h5 class="mt-0">${item.nombre}</h5>
          <p> Dirección: ${item.direccion}.</p>
        </div>
      </div>`;
    }
    document.getElementById("listado-sitios-principal").innerHTML=temp;

}
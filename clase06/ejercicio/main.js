//URL DE CONSUMO DE PRODUCTOS
// https://sminnova.com/productos.json

let obj_servicios=new ProductosCarrito();

obj_servicios.obtenerProductos()

// true si hay productos 
// false si no hay productos
console.log(obj_servicios.validarProductosCarrito());

if(obj_servicios.validarProductosCarrito()){
    // si hay productos
    actualizarMiniCarrito();
}
else{
    actualizarMiniCarrito(0)
    // no hay productos
}


function agregarcarrito(indice){
    obj_servicios.registarEnCarrito(indice);
    // necesito obtener los productos registrados en el carrito
    actualizarMiniCarrito();
  
}

function actualizarMiniCarrito(parametro=1){
    if(parametro==0){
        document.getElementById("productos_carrito").innerHTML="<span>No hay productos seleccionados</span>";
    }
    else{
        let datos=obj_servicios.obtenerProductosCarrito();
        let temp="";
                for(let i=0;i<datos.length;i++){
                    
                    temp=temp+`
                    <article class="producto-carrito">
                        <div class="forma">
                            <img src="${datos[i].foto}" alt="">
                            <h2>${datos[i].nombre}</h2>
                            </div>
                            
                    </article>
                    `;
    
                }
        document.getElementById("productos_carrito").innerHTML=temp;
    }
    
}
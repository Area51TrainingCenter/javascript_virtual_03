
function crearProducto(nombre,precio=0.0,categoria="General",stock=0){
    let producto={
        nombre:nombre,
        precio:precio,
        categoria:categoria,
        stock:stock
    };
    return producto;
}

let dato_celuar=["iphone",1200]
let valor=crearProducto("ipone");
//let valor=crearProducto(...dato_celuar);
console.log(valor);
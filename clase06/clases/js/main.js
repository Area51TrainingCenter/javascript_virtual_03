
let obj_producto=new Producto("Telefono",200,"Celulares");
console.log(obj_producto.obtenerNombre());
console.log(obj_producto.obtenerStock());
console.log(obj_producto.obtenerPrecio());
obj_producto.actualizarPrecio(300)
console.log(obj_producto.obtenerPrecio());

obj_producto.verificarStock();


console.log(obj_producto.dato_tienda);
obj_producto.dato_tienda="Lima"
console.log(obj_producto.dato_tienda);

console.log(Producto.obtenerNombreStatico())
/*
// Instanciando la clases
let helper=new Helper();

console.log(helper.fechaActual());

console.log(helper.convertirMayusculas("juan carlos"))
//helper.limpiarinput("inp-nombre");


console.log(HelperFecha.obtenerHoraActual());
console.log(HelperFecha.obtenerFechaActual())*/
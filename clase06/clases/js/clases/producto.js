class Producto{
    constructor(nombre,precio,categoria,stock=0,tienda="NO ASIGNADA"){
        this.nombre=nombre;
        this.precio=precio;
        this.categoria=categoria;
        this.stock=stock;
        this.tienda=tienda;
    }
    obtenerNombre(){
        return this.nombre;
    }
    actualizarNombre(valor){
        this.nombre=valor;
    }
    obtenerPrecio(){
        return this.precio;
    }
    actualizarPrecio(valor){
        if(typeof valor=="number"){
            this.precio=valor;
        }else{
            console.log("no se puede actualiar el valor")
        }
        
    }
    obtenerStock(){
        return this.stock;
    }
    actualizarStock(valor){
        this.stock=valor;
    }
    get dato_tienda(){
        return this.tienda;
    }
    set dato_tienda(valor){
        this.tienda=valor;
    }

    verificarStock(){
        let mensaje="";
        if(this.stock<5){
            mensaje="Estock bajo de existencia"
        }
        else{
            mensaje="Todavía tenemos stock"
        }
        return mensaje;
    }
    static obtenerNombreStatico(){
        return this.nombre;
    }
   /*
    get datoTienda(){
        return this.tienda;
    }
    set datoTienda(valor){
        this.tienda=valor;
        console.log("cargo desde metodo")
    }*/
}


class ProductosCarrito{
    constructor(){
        this.listadoProductos;
        this.productosCarrito=[];
    }
    obtenerProductos(){
        let url="productos.json";
         fetch(url)
        .then((data)=>{return data.json()})
        .then((data)=>{
            this.listadoProductos=data;
            
            let temp="";
            for(let i=0;i<data.length;i++){
                
                temp=temp+`
                <article class="producto">
                    <img src="${data[i].foto}">
                    <h2>${data[i].nombre}</h2>
                    <button onclick="agregarcarrito(${i})">Agregar al carrito</button>
                </article>
                `;

            }
            document.getElementById("productos").innerHTML=temp;
        })
    }
    registarEnCarrito(indice){
        //console.log(this.listadoProductos[indice]);
       this.productosCarrito.push(this.listadoProductos[indice]);
       localStorage.productosCarrito=JSON.stringify(this.productosCarrito);
     
    }
    obtenerProductosCarrito(){
        return this.productosCarrito;
    }
    validarProductosCarrito(){
        let estado=false;
        if(localStorage.productosCarrito){
            //let datos=JSON.parse(localStorage.productosCarrito)
            this.productosCarrito=JSON.parse(localStorage.productosCarrito)
            estado=true;
        }
        else{
            estado=false;
            //console.log("no hay datos")
        }
        return estado;
    }
}
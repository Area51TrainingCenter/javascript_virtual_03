function sumar(){
    let num1=10;
    let num2=20;
    console.log(this)
}
function cargardatos(){
    //console.log(this.event.target.classList.add("activado"))
    //console.log("hicieron click en cargar datos")
}

let objeto={
    nombre:"Juan carlos",
    apellido:"Ramos T.",
    obtenerNombreCompleto:function(){
        return this.nombre +" "+this.apellido;
    }
}

objeto.nombre  // 
//console.log(objeto.obtenerNombreCompleto());


let persona={
    nombre:"JC",
    estado:true,
    codigo:123,
  
}

function obtenerCodigoPersona(par1,par2){
    console.log("el codigo es: " + this.codigo);
    console.log(par1,par2)

}
obtenerCodigoPersona(1,2)
/*obtenerCodigoPersona();
obtenerCodigoPersona.call(persona)*/

obtenerCodigoPersona.call(persona,1,5)


obtenerCodigoPersona.apply(persona,[4,50])

class ServiciosSitios{
    constructor(){

    }
    getTodosSitios(){
        let url="http://sminnova.com/restapitrujillo/sitiosturisticos";
        let xhr=new XMLHttpRequest()
        xhr.open("GET",url)
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
               return xhr.responseText;
            }
        }
        
    }
    getTodosSitiosv2(){
        let url="http://sminnova.com/restapitrujillo/sitiosturisticos";
       return fetch(url)
        .then((data)=>{return data.json()})
        .then((data)=>{console.log(data)})
    }
    async getTodosSitiosv3(){
        let url="http://sminnova.com/restapitrujillo/sitiosturisticos";
        let contenido=await fetch(url)
        let resultado=await contenido.json();
        return resultado;
    }

    async getSitiosTuristicosCategoria(id){
        let url="http://sminnova.com/restapitrujillo/sitiosturisticos/categoria/"+id
        let contenido=await fetch(url)
        let resultado=await contenido.json();
        return resultado;
    }
}
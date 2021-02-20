let nombre="JC";
let correo="JRamos";
console.log("Linea 1")
let xhr=new XMLHttpRequest();

let url="https://jsonplaceholder.typicode.com/photos";
xhr.open("GET",url)
xhr.send();
xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
       let dni=12312323
        
        let newxhr=new XMLHttpRequest()
        newxhr.open("GET",url);
        newxhr.send()
        newxhr.onreadystatechange=function(){
            if(newxhr.readyState==4){

               /* registrobanco=true;
                registroPrestamo(dni,registro)*/
            }
        }

    }
}







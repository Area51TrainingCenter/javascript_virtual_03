let respuesta
console.log("linea1")
let xhr =new XMLHttpRequest();
let url="http://sminnova.com/restapitrujillo/sitiosturisticos"
xhr.open("GET",url)
xhr.send();
xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
        respuesta=JSON.parse(xhr.responseText);
        console.log(respuesta);
    }
}

console.log(respuesta)
console.log("linea2")
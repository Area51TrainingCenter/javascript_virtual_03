/** estructura de una promesa **/
//new Promise(()=>{})

/*
(resolve,reject)=>{
    let xhr=new XMLHttpRequest();
    let url="https://jsonplaceholder.typicode.com/photos";
    xhr.open("GET",url)
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
               if (respuesta==0){
                    reject()
               }else{
                    resolve();
               }
                
        }
    }

   
    // resolve 
    //al exito de la promesa

    // reject 
    //al error de la promesa 
}

*/

let conusltaDNI=new Promise((resolve,reject)=>{
        let xhr=new XMLHttpRequest();
        let url="https://jsonplaceholder.typicode.com/photos";
        xhr.open("GET",url)
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                let respuesta=1;
                   if (respuesta==0){
                        reject()
                   }else{
                        resolve();
                   }
                    
            }
        }
    
       
        // resolve 
        //llama al exito de la promesa
    
        // reject 
        //llama al error de la promesa 
    })
// el exito de la promesa
conusltaDNI.then(()=>{
    console.log("la promesa se ejecuto con exito")
})

// el error de la promesa
conusltaDNI.catch(()=>{
    console.log("la promesa ejecuto un error")
})
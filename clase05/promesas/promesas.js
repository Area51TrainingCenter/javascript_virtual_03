let consultarDNI=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let num1=10;
        let num2=20;
        let suma=num1+num2;
        resolve(suma)
    },2000)
})
/*
consultarDNI.then((data)=>{
    console.log(":: DNI ::")
    console.log(data);
    
});
consultarDNI.catch((data)=>{
    console.log(data)
    console.log(":: CATCH ::")
})*/

let consulstarEstadoBanco=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let estado="Positivo"
        resolve(estado)
    },4000)

})
/*
consulstarEstadoBanco.then((data)=>{
    console.log("::: ESTADO ::::")
    console.log(data);
})
consulstarEstadoBanco.catch((data)=>{})*/

Promise.all([consulstarEstadoBanco,consultarDNI])
.then((data)=>{
    console.log(data)
    console.log("::: ALL Then :::")
})
.catch((data)=>{
    console.log(data)
    console.log("::: ALL catch :::");
})





let promesa1=new Promise((res,rej)=>{
    res("promesa 1 resulto");
})


let promesa2=new Promise((res,rej)=>{
    res("promesa 2 resulto");
})

promesa1.then((data)=>{
    console.log("Promesa 1")
    return promesa2
}).then(()=>{
    console.log("ahora se ejectuo la promesa 2")
}).catch()



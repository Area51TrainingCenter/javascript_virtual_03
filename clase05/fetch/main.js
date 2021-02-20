let url="https://jsonplaceholder.typicode.com/users";

fetch(url)
.then((data)=>{ return data.json()})
.then((data)=>{
    let estructura="";
    for(let item of data){
        let elemento=`<div class="card">
                        <h2>${item.name}</h2>
                        <small>${item.email}</small>
                        <small>${item.phone}</small>
                        <p>Direcion: ${item.address.city} ${item.address.street} ${item.address.suite} </p>
                     </div>`;

        

        estructura=estructura+elemento;
        console.log(item);
    }

    document.getElementById("listado").innerHTML=estructura;
})
.catch((error)=>{
    console.log(error);
})

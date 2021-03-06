/*async function general(){
    await obtenerUsuarios();
    let valor= datos();
    console.log(valor);
}
*/

let valor= datos();
async function global(){
    let resultado=await obtenerData();
    console.log(resultado);
}
global();



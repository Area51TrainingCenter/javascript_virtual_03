
class Helper{
    constructor(){}
    fechaActual(){
        let fecha=new Date();
        let fecha_final=fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
        return fecha_final;

    }
    convertirMayusculas(valor){
        return valor.toUpperCase();
    }
    limpiarinput(valorselector){
        document.getElementById(valorselector).val="";
    }
}



class HelperFecha{
    constructor(){}
    static obtenerFechaActual(){
        let fecha=new Date();
        let fecha_final=fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
        return fecha_final;

    }
    static obtenerHoraActual(){
        let fecha=new Date();
        let hora_final=fecha.getHours()+":"+(fecha.getMinutes()+1)+":"+fecha.getSeconds();
        return hora_final;

    }
}

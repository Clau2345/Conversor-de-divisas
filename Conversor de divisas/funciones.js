
setTimeout(() => {
    console.log("Delayed for 1 second.");
    document.getElementById('calculadora').removeAttribute('class','oculto');
    document.getElementById('loader').setAttribute('class','oculto');
}, "5000");



function convertir() {
    var valor= document.getElementById("cantidad").value;
    var de= document.getElementById("convertirDe").value;
    var a= document.getElementById("convertirA").value;
    var dolar=4171.78;
    var euro=4496.74;
    var convertidoA=0;
    if (de==1 && a==2){
        convertidoA= valor/dolar;
    }
    else if(de==1 && a==3){
        convertidoA= valor/euro;
    }
    else if(de==2 && a==1){
        convertidoA= valor*dolar;
    }
    else if(de==2 && a==3){
        convertidoA= valor*(dolar/euro);
    }
    else if(de==3 && a==1){
        convertidoA= valor*euro;
    }
    else if(de==3 && a==2){
        convertidoA=valor*(euro/dolar);
    }
    else{
        convertidoA=valor;
    }
    //DocumentTimeline.getElementById("convertidoA").innerHTML="Resultado" +valor.toFixed(2);
    document.getElementById("convertidoA").value=convertidoA;
}


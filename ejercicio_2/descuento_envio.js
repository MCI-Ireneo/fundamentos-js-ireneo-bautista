const importe = 100.01; 
const descuento10 = 0.10;
const descuento5 = 0.05;
let envio = 4.95;
let descuento = 0;
if(importe >50 && importe <=100){
     descuento = (importe * descuento5)
    //console.log(`Importe ${importe.toFixed(2)}€ Descuento ${descuento.toFixed(2)}€`)
}else if (importe > 100){
     descuento = (importe * descuento10)
    //console.log(`Importe ${importe.toFixed(2)}€ Descuento ${descuento.toFixed(2)}€`)
}else if (importe <= 50){
     descuento = descuento
    //console.log(`Importe ${importe.toFixed(2)}€ Descuento ${descuento.toFixed(2)}€`)
}
let importe_con_descuento = importe - descuento

if (importe_con_descuento < 50){
    envio = envio
      texto_envio = `${envio}€`
    
}else if ( importe_con_descuento >= 50){
    envio = 0
       texto_envio = "Gratis"
}
//console.log(`Importe ${importe.toFixed(2)}€ Descuento ${descuento.toFixed(2)}€ Importe con Descuento ${importe_con_descuento}€ Envio ${envio}`)



let total = importe_con_descuento + envio 

console.log(`Importe ${importe.toFixed(2)}€ Descuento ${descuento.toFixed(2)}€ Importe con Descuento ${importe_con_descuento.toFixed(2)}€ Envio ${texto_envio} Total ${total.toFixed(2)}€`)

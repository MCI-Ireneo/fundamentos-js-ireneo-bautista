const producto = "Monitor";
const cantidad = 2;
const precio = 189;
const iva = 0.21;
const calcular_iva =(precio * iva);
console.log(`Producto : ${producto}`)
console.log(`${cantidad} x ${precio.toFixed(2)}€`)
console.log(`Subtotal : ${(precio * cantidad).toFixed(2)}€`)
console.log(`IVA (21%) : ${calcular_iva * cantidad}€`)
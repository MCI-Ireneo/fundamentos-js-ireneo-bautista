const productos = [
  "Teclado".toLowerCase(),
  "Ratón".toLowerCase(),
  "Monitor".toLowerCase(),
  "Auriculares".toLowerCase(),
  "Webcams".toLowerCase(),
];
const precios = [45.99, 19.9, 189.0, 59.95, 34.5];
const stock = [10, 25, 3, 0, 7];
let buscador = "Monitor";
let posicion = -1;
let descuento = 0;

for (let i = 0; i < productos.length; i++) {
  if (buscador.toLowerCase() === productos[i]) {
    posicion = i;
    break;
  }
}
const calcularImporteLinea = function (precio, cantidad) {
  let importe = precio * cantidad;
  return importe;
};

const calcular_iva = function (n1) {
  const iva = 0.21;
  let importe = n1 * iva;
  return importe;
};

console.log(calcularImporteLinea(189, 2));
let resultado1 = calcularImporteLinea(189, 2);
console.log(calcular_iva(resultado1));

const productos = [
  "Teclado".toLowerCase(),
  "Ratón".toLowerCase(),
  "Monitor".toLowerCase(),
  "Auriculares".toLowerCase(),
  "Webcams".toLowerCase(),
];
const precios = [45.99, 19.9, 189.0, 59.95, 34.5];
const stock = [10, 25, 3, 0, 7];
let buscado = "MONITOR".toLowerCase();
const sin_producto = -1;
let posicion = -1;

for (let i = 0; i < productos.length; i++) {
  if (buscado === productos[i]) {
    posicion = i;
  }
}
if (posicion === sin_producto) {
  console.log(`Posición:${sin_producto}.${buscado} no existe en el catálogo`);
} else {
  console.log(
    `${buscado} esta en la posición ${posicion}. Precio :${precios[posicion].toFixed(2)}€. Stock:${stock[posicion]}`,
  );
}

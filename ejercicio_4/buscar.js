const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcams"];
const precios = [45.99, 19.9, 189.0, 59.95, 34.5];
const stock = [10, 25, 3, 0, 7];
let buscado = "Monitor";

for (let i = 0; i < productos.length; i++) {
  if (buscado === productos[i]) {
    console.log(`${buscado} esta en la posición ${i}. Precio :${precios[i].toFixed(2)}€. Stock:${stock[i]}`);
  }
}

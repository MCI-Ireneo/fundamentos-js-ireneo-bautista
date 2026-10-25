const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios = [45.99, 19.9, 189.0, 59.95, 34.5];
const stock = [10, 25, 3, 0, 7];
const pedidoProductos = ["Ratón", "Monitor", "Auriculares", "Teclado", "Altavoz"];
const pedidoCantidades = [2, 4, 1, 1, 1];
const catalogo = function (catalogo) {
  for (let i = 0; i < productos.length; i++) {
    catalogo = console.log(`Productos: ${productos[i]} Precio: ${precios[i]}€ Unidades: ${stock[i]}`);
  }
  return catalogo;
};
console.log(catalogo(catalogo));

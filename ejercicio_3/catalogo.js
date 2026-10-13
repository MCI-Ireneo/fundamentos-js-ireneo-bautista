const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcams"];
const precios = [45.99, 19.9, 189.0, 59.95, 34.5];
const stock = [10, 25, 3, 0, 7];

let agotado = 0;
let valor_inventario = 0;
let mas_caro = 0;
let producto_mas_caro = "";

for (let i = 0; i < productos.lenght; i++) {
  if (stock[i] === 0) {
    agotado++;
    console.log(`${productos[i]} - ${precios[i].toFixed(2)} € (AGOTADO)`);
  } else {
    console.log(
      `${productos[i]} - ${precios[i].toFixed(2)} € (${stock[i]} uds)`,
    );
  }
}
for (let precio of precios) {
  if (precio[precios] > mas_caro) {
    mas_caro = precio[precios];
    producto_mas_caro = productos[precios];
  }
}
console.log(`Productos agotados ${agotado}`);
console.log(producto_mas_caro);

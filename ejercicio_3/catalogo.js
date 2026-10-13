const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcams"];
const precios = [45.99, 19.9, 189.0, 59.95, 34.5];
const stock = [10, 25, 3, 0, 7];

let agotado = 0;
let valor_inventario = 0;
let mas_caro = 0;
let producto_mas_caro = "";
let valor_inventarioTemp = 0;

for (let i = 0; i < productos.length; i++) {
  if (stock[i] === 0) {
    console.log(`${productos[i]} - ${precios[i].toFixed(2)} € (AGOTADO)`);
    agotado++;
  } else {
    console.log(
      `${productos[i]} - ${precios[i].toFixed(2)} € (${stock[i]} uds)`,
    );
  }
  if (precios[i] > precios[mas_caro]) {
    mas_caro = i;
  }
  valor_inventario = precios[i] * stock[i];
  valor_inventarioTemp = valor_inventario + valor_inventarioTemp;
  //tambien sirve valor_inventario += precio[i] * stock[i]
}

console.log(`Productos agotados ${agotado}`);
console.log(
  `Producto más caro: ${productos[mas_caro]} (${precios[mas_caro].toFixed(2)}€)`,
);
console.log(valor_inventarioTemp.toFixed(2));

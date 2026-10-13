const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios = [45.99, 19.9, 189.0, 59.95, 34.5];
const stock = [10, 25, 3, 0, 7];

let agotados = 0;
let indiceCaro = 0;
let valorInventario = 0;

for (let i = 0; i < productos.length; i++) {
  if (stock[i] === 0) {
    console.log(`${productos[i]} - ${precios[i].toFixed(2)} € (AGOTADO)`);
    agotados++;
  } else {
    console.log(
      `${productos[i]} - ${precios[i].toFixed(2)} € (${stock[i]} uds)`,
    );
  }

  if (precios[i] > precios[indiceCaro]) {
    indiceCaro = i;
  }

  valorInventario += precios[i] * stock[i];
}

/*console.log(`\nProductos agotados: ${agotados}`);
console.log(
  `Producto más caro: ${productos[indiceCaro]} (${precios[indiceCaro].toFixed(2)} €)`,
);
console.log(`Valor del inventario: ${valorInventario.toFixed(2)} €`);*/

const productos = [
  "Teclado".toLowerCase(),
  "Ratón".toLowerCase(),
  "Monitor".toLowerCase(),
  "Auriculares".toLowerCase(),
  "Webcam".toLowerCase(),
];
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
const buscarProducto = function (productos, nombre) {
  let posicion = -1;
  let buscado = "";
  const sin_producto = -1;
  for (let i = 0; i < productos.length; i++) {
    if (nombre.toLowerCase() === productos[i]) {
      posicion = i;
    }
  }
  if (posicion === sin_producto) {
    buscado = nombre;
    return [posicion, buscado];
  } else {
    buscado = nombre;
    return [posicion, buscado];
  }
};

const calculoDescuento = function (n1) {
  const descuento10 = 0.1;
  const descuento5 = 0.05;
  let resultado = 0;
  if (n1 > 50 && n1 <= 100) {
    resultado = n1 * descuento5;
  } else if (n1 > 100) {
    resultado = n1 * descuento10;
  } else if (n1 <= 0 && n1 <= 50) {
    resultado = resultado;
  }
  return resultado.toFixed(2);
};
const calcularImporteLinea = function (precio, cantidad) {
  let importe = precio * cantidad;
  return importe.toFixed(2);
};

const calcular_iva = function (n1) {
  const iva = 0.21;
  let importe = n1 * iva;
  return importe.toFixed(2);
};

const calcular_envio = function (n1) {
  const envio = 4.95;
  const gratis = 0;
  if (n1 >= 50) {
    resultado = gratis;
  } else if (n1 < 50) {
    resultado = envio;
  }
  return resultado.toFixed(2);
};

const contarAgotados = function (stock) {
  let agotados = 0;
  for (let i = 0; i < stock.length; i++) {
    if (stock[i] === 0) {
      agotados++;
    }
  }
  return agotados;
};

const producto_mas_caro = function (productos) {
  let max_precio = -1;
  for (let i = 0; i < productos.length; i++) {
    if (precios[i] > max_precio) {
      max_precio = precios[i];
      mas_caro = productos[i];
    }
  }
  return mas_caro;
};
const valor_inventario = function (precios, stock) {
  let valor = 0;
  for (let i = 0; i < precios.length; i++) {
    valor_temp = precios[i] * stock[i];
    valor = valor + valor_temp;
  }
  return valor.toFixed(2);
};

console.log(catalogo(catalogo));
console.log("=== Procesando Pedido ===");
console.log(buscarProducto(productos, "Ratón"));

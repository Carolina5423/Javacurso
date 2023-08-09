const ropa = [
  { marca: "Remera", modelo: "estampa", precio: 5000 },
  { marca: "Pantalon", modelo: "jean", precio: 8000 },
  { marca: "Zapatillas", modelo: "blancas", precio: 30000 },
  { marca: "Buzos", modelo: "verde", precio: 10000 },
];

let nombre = prompt("Ingrese la prenda de ropa que desea agregar");
let producto = ropa.find((item) => item.marca === nombre);

if (producto) {
  let mensaje = `
  Disponible el modelo: ${producto.modelo}
  Precio: ${producto.precio}
`;
  alert(mensaje);
} else {
  alert("No disponible");
}

let consulta = prompt("¿Desea realizar esta compra?");

if (consulta === "si") {
  alert("Usted tiene un descuento especial");
  let precioConDescuento = calcularPrecioConDescuento(producto.precio, 20);
  alert(`Precio con descuento: ${precioConDescuento}`);
}

function calcularPrecioConDescuento(precio, descuento) {
  const descuentoAplicado = (precio * descuento) / 100;
  const precioConDescuento = precio - descuentoAplicado;
  return precioConDescuento;
}

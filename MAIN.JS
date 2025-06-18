alert()
// Variables y Arrays
const productos = [
  { id: 1, nombre: "Camiseta", precio: 5000 },
  { id: 2, nombre: "Pantalón", precio: 8000 },
  { id: 3, nombre: "Zapatillas", precio: 15000 }
];

let carrito = [];

// Mostrar productos disponibles (salida)
function mostrarProductos() {
  let mensaje = "Productos disponibles:\n";
  productos.forEach(producto => {
    mensaje += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
  });
  alert(mensaje);
}

// Agregar productos al carrito (entrada + procesamiento)
function agregarAlCarrito() {
  let seleccion = prompt("Ingrese el ID del producto que desea comprar:\n(0 para finalizar)");
  while (seleccion !== "0") {
    const productoSeleccionado = productos.find(p => p.id === parseInt(seleccion));
    if (productoSeleccionado) {
      carrito.push(productoSeleccionado);
      alert(`${productoSeleccionado.nombre} fue agregado al carrito.`);
    } else {
      alert("Producto no encontrado. Intente nuevamente.");
    }
    seleccion = prompt("Ingrese otro ID para seguir comprando, o 0 para finalizar:");
  }
}

// Calcular total y confirmar compra (procesamiento + salida)
function finalizarCompra() {
  if (carrito.length === 0) {
    alert("No hay productos en el carrito.");
    return;
  }

  let total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
  let resumen = "Productos en tu carrito:\n";
  carrito.forEach(prod => {
    resumen += `- ${prod.nombre} - $${prod.precio}\n`;
  });
  resumen += `\nTotal a pagar: $${total}`;

  let confirmar = confirm(resumen + "\n¿Deseas confirmar tu compra?");
  if (confirmar) {
    alert("¡Gracias por tu compra!");
  } else {
    alert("Compra cancelada.");
  }
}

// Llamadas a funciones
console.log("Bienvenido a la tienda virtual.");
mostrarProductos();
agregarAlCarrito();
finalizarCompra();

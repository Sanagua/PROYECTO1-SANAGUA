console.log("El archivo JS se está ejecutando correctamente");

// Productos disponibles
const productos = [
  { id: 1, nombre: "Camiseta", precio: 5000 },
  { id: 2, nombre: "Pantalón", precio: 8000 },
  { id: 3, nombre: "Zapatillas", precio: 15000 }
];

// Carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Mostrar productos en la interfaz
function mostrarProductos() {
  console.log("Función mostrarProductos() llamada");
  const listaProductos = document.getElementById('listaProductos');
  
  // Verificamos la lista Productos
  if (!listaProductos) {
    console.error("Elemento 'listaProductos' no encontrado.");
    return;
  }

  listaProductos.innerHTML = '';
  
  productos.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    const btnAgregar = document.createElement('button');
    btnAgregar.textContent = 'Agregar al carrito';
    
    
    btnAgregar.onclick = () => {
      console.log(`Producto agregado: ${producto.nombre}`);
      agregarAlCarrito(producto);
    };
    li.appendChild(btnAgregar);
    listaProductos.appendChild(li);
  });
}

// Agregar un producto al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarCarrito();
  alert(`${producto.nombre} fue agregado al carrito.`);
}

// Actualizar la visualización del carrito
function actualizarCarrito() {
  const carritoLista = document.getElementById('carritoLista');
  carritoLista.innerHTML = ''; // Limpiamos el carrito antes de actualizar

  carrito.forEach(prod => {
    const li = document.createElement('li');
    li.textContent = `${prod.nombre} - $${prod.precio}`;
    carritoLista.appendChild(li);
  });
}

// Finalizar compra
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
    carrito = []; // Limpiamos el carrito
    localStorage.removeItem('carrito');
    actualizarCarrito(); // Actualizamos la vista
  } else {
    alert("Compra cancelada.");
  }
}

// Asignar eventos a los botones
document.addEventListener('DOMContentLoaded', function() {
  // Verificar si el botón está siendo clickeado
  console.log("Asignando eventos a los botones");

  document.getElementById('mostrarProductosBtn').addEventListener('click', function() {
    console.log("Botón de mostrar productos fue clickeado");
    mostrarProductos();
  });

  document.getElementById('finalizarCompraBtn').addEventListener('click', finalizarCompra);
  actualizarCarrito();
});

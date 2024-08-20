// Constantes
const productosDiv = document.getElementById('productos');
const carritoDiv = document.getElementById('carrito');
const carritoKey = 'miCarrito';
const btnComprar = document.getElementById('btnComprar');

// Productos
const productos = [
];


let carrito = JSON.parse(localStorage.getItem(carritoKey)) || [];

// Función para mostrar los productos
const mostrarProductos = () => {
};

// Función para agregar un producto al carrito y actualizar localStorage
const agregarAlCarrito = (id) => {

    // Actualizar localStorage
    localStorage.setItem(carritoKey, JSON.stringify(carrito));

    // Mostrar el carrito actualizado
    mostrarCarrito();
    calcularTotal();
};

// Función para eliminar un producto del carrito
const eliminarDelCarrito = (id) => {
    carrito = carrito.filter(producto => producto.id !== id);
    localStorage.setItem(carritoKey, JSON.stringify(carrito));
    mostrarCarrito();
    calcularTotal();
};

// Función para mostrar el carrito (desde localStorage si existe)
const mostrarCarrito = () => {
};

// Función para calcular el total del carrito
const calcularTotal = () => {
    const totalSpan = document.getElementById('total');
    totalSpan.textContent = `Total: $${total}`;
};

// Función para realizar la compra (simulada)
const realizarCompra = () => {
};

// Inicializar el carrito al cargar la página
mostrarProductos();
mostrarCarrito();
calcularTotal();

// Evento del botón de compra
btnComprar.addEventListener('click', realizarCompra);

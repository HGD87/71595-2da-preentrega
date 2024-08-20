const productoDiv = document.getElementById ('item-id')
const carritoDiv = document.getElementById('carrito');
const carritoKey = 'miCarrito';
const btnComprar = document.getElementById('btnComprar');
const listaCarrito = document.getElementById('lista-carrito');

// Productos
const producto = [
    { id: 1, nombre: "Bife angosto", precio: 7245 },
    { id: 2, nombre: "T-Bone", precio: 19070 },
    { id: 3, nombre: "Chinchulines", precio: 3950 },
    { id: 4, nombre: "Pechuga de Pollo", precio: 6340 },
    { id: 5, nombre: "Mollejas", precio: 9070 },
    { id: 6, nombre: "Entrana", precio: 8950 },
];

let carrito = JSON.parse(localStorage.getItem(carritoKey)) || [];

// Función para agregar un producto al carrito
function agregarAlCarrito(event) {
    const producto = event.target.closest('.producto');
    const id = producto.dataset.id;
    const cantidadInput = producto.querySelector('.cantidad');
    const cantidad = parseInt(cantidadInput.value);

    // Encuentra el producto por su ID y actualiza la cantidad
    const productoEnCarrito = carrito.find(p => p.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad += cantidad;
    } else {
        carrito.push({ id, cantidad });
    }

    localStorage.setItem(carritoKey, JSON.stringify(carrito));
    mostrarCarrito();
    calcularTotal();
}

// Función para mostrar el carrito
function mostrarCarrito() {
    listaCarrito.innerHTML = '';
    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} x ${producto.cantidad} - $${producto.precio * producto.cantidad}`;
        // Agrega un botón para eliminar el producto
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.addEventListener('click', () => {
            eliminarDelCarrito(producto.id);
        });
        li.appendChild(btnEliminar);
        listaCarrito.appendChild(li);
    });
}

// Función para calcular el total
function calcularTotal() {
    const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    const totalSpan = document.getElementById('total');
    totalSpan.textContent = `Total: $${total}`;
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(producto => producto.id !== id);
    localStorage.setItem(carritoKey, JSON.stringify(carrito));
    mostrarCarrito();
    calcularTotal();
}

// Agregar event listener a todos los botones "Agregar al carrito"
const botonesAgregar = document.querySelectorAll('.agregar');
botonesAgregar.forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
});

// Inicializar el carrito al cargar la página
mostrarCarrito();
calcularTotal();

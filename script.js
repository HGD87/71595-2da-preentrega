// Productos
const productos = [
    { id: 1, nombre: "Entraña xkg", precio: 8950, imagen: "entrana.jpg" },
    { id: 2, nombre: "Mollejas xkg", precio: 9070, imagen: "molleja.webp" },
    { id: 3, id: 3, nombre: "Pechuga de pollo xkg", precio: 6340, imagen: "pechugapollo.webp" },
    { id: 4, nombre: "Chinchulines xkg", precio: 3950, imagen: "chinchu.jpg" },
    { id: 5, nombre: "T-Bone xkg", precio: 19070, imagen: "tbone.webp" },
    { id: 6, nombre: "Bife angosto xkg", precio: 7245, imagen: "bifea.jpg" },
];

// Carrito de compras (array vacío inicialmente)
const carrito = [];

// Función para mostrar los productos
const mostrarProductos = () => {
    const productosDiv = document.getElementById('productos');
    productosDiv.innerHTML = productos.map(producto => {
        return `<div>
            ${producto.nombre} - $${producto.precio}/kg
            <input type="number" id="cantidad_${producto.id}" min="1" value="1">
            <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
        </div>`;
    }).join('');
};

// Función para agregar un producto al carrito
const agregarAlCarrito = (id) => { 
    const producto = productos.find(p => p.id === id);
    const cantidadInput = document.getElementById(`cantidad_${producto.id}`);
    const cantidad = parseInt(cantidadInput.value); // Convertir a número entero

    // Crear un objeto con el producto y la cantidad
    const productoConCantidad = { ...producto, cantidad };

    carrito.push(productoConCantidad);
    console.log('Producto agregado al carrito:', productoConCantidad);
};
// Función para realizar la compra
const realizarCompra = () => {
    // Simular un proceso de compra asíncrono
    const promesaCompra = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (carrito.length > 0) {
                resolve('¡Compra realizada con éxito! Pronto recibirás tu pedido.');
            } else {
                reject('El carrito está vacío');
            }
        }, 2000);
    });

    promesaCompra
        .then(mensaje => {
            alert(mensaje);
        })
        .catch(error => {
            console.error(error);
            alert('Error al realizar la compra');
        });
};

// Función para calcular el total del carrito
const calcularTotal = () => {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    return total;
};

// Función para mostrar el carrito (nueva o existente)
const mostrarCarrito = () => {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '<h2>Tu carrito</h2>';
    carrito.forEach(producto => {
        carritoDiv.innerHTML += `<div>
            ${producto.nombre} x ${producto.cantidad} - $${producto.precio * producto.cantidad}
        </div>`;
    });

    const total = calcularTotal();
    carritoDiv.innerHTML += `<p>Total: $${total}</p>`;
};



// Mostrar el carrito inicialmente y cada vez que se agrega un producto
mostrarCarrito();

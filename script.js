let contadorCarrito = 0;
let total = 0;

const botonesAgregar = document.querySelectorAll(".btn-agregar-orden, .boton-comprar");
const contador = document.querySelector(".cart-count, .contador-carrito");

botonesAgregar.forEach((boton) => {
boton.addEventListener("click", () => {
    contadorCarrito++;

    if (contador) {
    contador.textContent = contadorCarrito;
    }

    alert("Producto agregado al carrito");
});
});



const carrito = [];
const badgeCarrito = document.querySelector('.cart-badge');
const contenedorCarrito = document.querySelector('#carrito-items');
const subtotalCarrito = document.querySelector('#carrito-subtotal');
const totalCarrito = document.querySelector('#carrito-total');

function formatoSoles(numero) {
    return `S/ ${numero.toFixed(2)}`;
}

function actualizarCarrito() {
    let cantidadTotal = 0;
    let total = 0;

    contenedorCarrito.innerHTML = '';

    carrito.forEach((producto) => {
        cantidadTotal += producto.cantidad;
        total += producto.precio * producto.cantidad;

        contenedorCarrito.innerHTML += `
            <div class="custom-cart-item d-flex align-items-center gap-3 bg-white p-3 rounded-4 shadow-sm">
                <img src="${producto.img}" alt="${producto.nombre}" style="width: 55px; height: 55px; object-fit: contain;">

                <div class="flex-grow-1">
                    <h6 class="mb-1 fw-bold">${producto.nombre}</h6>
                    <small class="text-muted">${formatoSoles(producto.precio)}</small>

                    <div class="d-flex align-items-center gap-2 mt-2">
                        <button class="btn btn-sm btn-outline-secondary btn-restar" data-id="${producto.id}">-</button>
                        <span class="fw-bold">${producto.cantidad}</span>
                        <button class="btn btn-sm btn-outline-secondary btn-sumar" data-id="${producto.id}">+</button>
                    </div>
                </div>

                <button class="btn btn-sm btn-danger btn-eliminar-cart" data-id="${producto.id}">
                    Eliminar
                </button>
            </div>
        `;
    });

    if (badgeCarrito) {
        badgeCarrito.textContent = cantidadTotal;
    }

    if (subtotalCarrito) {
        subtotalCarrito.textContent = formatoSoles(total);
    }

    if (totalCarrito) {
        totalCarrito.textContent = formatoSoles(total);
    }

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = `
            <p class="text-center text-muted py-4">Tu carrito está vacío.</p>
        `;
    }
}

document.addEventListener('click', function (e) {
    const botonAgregar = e.target.closest('.btn-agregar-orden');
    const botonEliminar = e.target.closest('.btn-eliminar-cart');
    const botonSumar = e.target.closest('.btn-sumar');
    const botonRestar = e.target.closest('.btn-restar');

    if (botonAgregar) {
        const producto = {
            id: botonAgregar.dataset.id,
            nombre: botonAgregar.dataset.nombre,
            precio: Number(botonAgregar.dataset.precio),
            img: botonAgregar.dataset.img,
            cantidad: 1
        };

        const existe = carrito.find(item => item.id === producto.id);

        if (existe) {
            existe.cantidad++;
        } else {
            carrito.push(producto);
        }

        actualizarCarrito();
    }

    if (botonEliminar) {
        const id = botonEliminar.dataset.id;
        const index = carrito.findIndex(item => item.id === id);

        if (index !== -1) {
            carrito.splice(index, 1);
        }

        actualizarCarrito();
    }

    if (botonSumar) {
        const producto = carrito.find(item => item.id === botonSumar.dataset.id);

        if (producto) {
            producto.cantidad++;
        }

        actualizarCarrito();
    }

    if (botonRestar) {
        const producto = carrito.find(item => item.id === botonRestar.dataset.id);

        if (producto) {
            producto.cantidad--;

            if (producto.cantidad <= 0) {
                const index = carrito.findIndex(item => item.id === producto.id);
                carrito.splice(index, 1);
            }
        }

        actualizarCarrito();
    }
});

actualizarCarrito();






// Variables con const y let
const nombreTienda = 'Supermercados RB';
const tieneDelivery = true;
const costoEnvio = 0;
let cantidadCarrito = 0;

const mensajeBienvenida = `
Bienvenido a ${nombreTienda}
Compra productos frescos y recibe tu pedido en casa.
`;

console.log(mensajeBienvenida);


for (let i = 0; i < botonesAgregar.length; i++) {
botonesAgregar[i].addEventListener('click', function () {
    cantidadCarrito++;

    const nombreProducto = 'Producto seleccionado';

const mensaje = `Agregaste ${nombreProducto}. Ahora tienes ${cantidadCarrito} producto(s) en tu carrito.`;

if (cantidadCarrito === 1) {
    alert('Agregaste tu primer producto al carrito.');
    } else if (cantidadCarrito >= 5) {
    alert('Ya tienes varios productos en tu carrito.');
    } else {
    alert(mensaje);
    }

    if (tieneDelivery === true && costoEnvio === 0) {
    console.log('El pedido tiene delivery gratis.');
    }

    switch (cantidadCarrito) {
    case 1:
        console.log('Carrito iniciado.');
        break;

    case 2:
        console.log('Ya tienes 2 productos.');
        break;

    case 3:
        console.log('Ya tienes 3 productos.');
        break;

    default:
        console.log(`Total actual en carrito: ${cantidadCarrito}`);
        break;
    }
});
}
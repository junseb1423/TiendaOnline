// 1. Estado global del carrito
const carrito = [];
const badgeCarrito = document.querySelector('.cart-badge, .cart-count, .contador-carrito');
const contenedorCarrito = document.querySelector('#carrito-items');
const subtotalCarrito = document.querySelector('#carrito-subtotal');
const totalCarrito = document.querySelector('#carrito-total');
const elementoToast = document.getElementById('notificacion-carrito');
const toastBootstrap = new bootstrap.Toast(elementoToast, { delay: 3000 }); // Se ocultará solo en 3 segundos
const contenedorMensajeToast = document.getElementById('mensaje-toast');

// 2. Función auxiliar para formatear la moneda (Soles Peruanos)
function formatoSoles(numero) {
    return `S/ ${numero.toFixed(2)}`;
}

// 3. Función principal para pintar el carrito en la interfaz
function actualizarCarrito() {
    let cantidadTotal = 0;
    let total = 0;

    // Limpiamos el contenedor para evitar duplicados visuales
    contenedorCarrito.innerHTML = '';

    carrito.forEach((producto) => {
        cantidadTotal += producto.cantidad;
        total += producto.precio * producto.cantidad;

        // Renderizado dinámico con diseño premium
        contenedorCarrito.innerHTML += `
            <div class="cart-item d-flex gap-3 align-items-center mb-3 shadow-sm border rounded-4 p-3 bg-white">
                <div class="cart-item-img-wrap bg-light rounded-3 overflow-hidden d-flex align-items-center justify-content-center" style="width: 70px; height: 70px; flex-shrink: 0;">
                    <img src="${producto.img || 'Estilos/img_categorias/LogoRB.png'}" alt="${producto.nombre}" class="img-fluid p-1" style="object-fit: contain; max-height: 100%;">
                </div>
                
                <div class="cart-item-details flex-grow-1" style="min-width: 0;">
                    <h4 class="fs-6 fw-bold text-dark m-0 mb-1 text-truncate" style="max-width: 150px;" title="${producto.nombre}">${producto.nombre}</h4>
                    <span class="cart-item-price fw-black text-success fs-6">${formatoSoles(producto.precio)}</span>
                </div>
                
                <div class="cart-item-actions d-flex flex-column align-items-end justify-content-between">
                    <button class="btn p-1 text-muted hover-danger border-0 bg-transparent mb-2 btn-eliminar-cart" data-id="${producto.id}" title="Eliminar artículo">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </button>
                    
                    <div class="quantity-control d-flex align-items-center border rounded-pill overflow-hidden bg-light">
                        <button class="qty-btn border-0 bg-transparent px-2 py-1 btn-restar" data-id="${producto.id}">-</button>
                        <span class="qty-number px-2 fw-semibold text-dark" style="font-size: 13px; min-width: 20px; text-align: center;">${producto.cantidad}</span>
                        <button class="qty-btn border-0 bg-transparent px-2 py-1 btn-sumar" data-id="${producto.id}">+</button>
                    </div>
                </div>
            </div>
        `;
    });

    // Actualizamos los contadores del Header y totales
    if (badgeCarrito) {
        badgeCarrito.textContent = cantidadTotal;
    }

    if (subtotalCarrito) {
        subtotalCarrito.textContent = formatoSoles(total);
    }

    if (totalCarrito) {
        totalCarrito.textContent = formatoSoles(total);
    }

    // Estado vacío amigable
    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = `
            <div class="text-center py-5">
                <p class="text-muted m-0">Tu carrito está vacío.</p>
            </div>
        `;
    }
}

// 4. Manejo centralizado de clics (Delegación de Eventos)
document.addEventListener('click', function (e) {
    const botonAgregar = e.target.closest('.btn-agregar-orden');
    const botonEliminar = e.target.closest('.btn-eliminar-cart');
    const botonSumar = e.target.closest('.btn-sumar');
    const botonRestar = e.target.closest('.btn-restar');

    // ACCIÓN: AGREGAR PRODUCTO
    if (botonAgregar) {
        e.preventDefault();
        
        const producto = {
            id: botonAgregar.dataset.id,
            nombre: botonAgregar.dataset.nombre,
            precio: Number(botonAgregar.dataset.precio),
            img: botonAgregar.dataset.img,
            cantidad: 1
        };

        // Validamos que los datos obligatorios existan para evitar errores
        if (!producto.id || !producto.nombre) {
            console.error("Faltan atributos 'data-' en el botón presionado.");
            return;
        }

        const existe = carrito.find(item => item.id === producto.id);

        if (existe) {
            existe.cantidad++;
        } else {
            carrito.push(producto);
        }

        actualizarCarrito();
    }

    // ACCIÓN: ELIMINAR COMPLETAMENTE
    if (botonEliminar) {
        const id = botonEliminar.dataset.id;
        const index = carrito.findIndex(item => item.id === id);
        if (index !== -1) {
            carrito.splice(index, 1);
        }
        actualizarCarrito();
    }

    // ACCIÓN: SUMAR CANTIDAD EN EL CARRITO
    if (botonSumar) {
        const id = botonSumar.dataset.id;
        const producto = carrito.find(item => item.id === id);
        if (producto) {
            producto.cantidad++;
        }
        actualizarCarrito();
    }

    // ACCIÓN: RESTAR CANTIDAD EN EL CARRITO
    if (botonRestar) {
        const id = botonRestar.dataset.id;
        const producto = carrito.find(item => item.id === id);
        if (producto) {
            producto.cantidad--;
            if (producto.cantidad <= 0) {
                const index = carrito.findIndex(item => item.id === id);
                carrito.splice(index, 1);
            }
        }
        actualizarCarrito();
    }

    // ACCIÓN: AGREGAR PRODUCTO
    if (botonAgregar) {
        e.preventDefault();
        
        const producto = {
            id: botonAgregar.dataset.id,
            nombre: botonAgregar.dataset.nombre,
            precio: Number(botonAgregar.dataset.precio),
            img: botonAgregar.dataset.img,
            cantidad: 1
        };

        if (!producto.id || !producto.nombre) {
            console.error("Faltan atributos 'data-' en el botón presionado.");
            return;
        }

        const existe = carrito.find(item => item.id === producto.id);

        if (existe) {
            existe.cantidad++;
        } else {
            carrito.push(producto);
        }

        actualizarCarrito();

        // --- AQUÍ CONECTAMOS EL TOAST ---
        // 1. Personalizamos el mensaje con el nombre del producto seleccionado
        contenedorMensajeToast.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            ¡${producto.nombre} agregado con éxito!
        `;
        
        // 2. Ordenamos a Bootstrap que muestre la animación en pantalla
        toastBootstrap.show();
    }
});

// Inicializamos el carrito al cargar la página
actualizarCarrito();

// Log informativo de bienvenida
console.log("Supermercados RB - Sistema de órdenes activo.");
const carrito = [];
const badgeCarrito = document.querySelector('.cart-badge, .cart-count, .contador-carrito');
const contenedorCarrito = document.querySelector('#carrito-items');
const subtotalCarrito = document.querySelector('#carrito-subtotal');
const totalCarrito = document.querySelector('#carrito-total');
const elementoToast = document.getElementById('notificacion-carrito');
const toastBootstrap = new bootstrap.Toast(elementoToast, { delay: 3000 }); // Se ocultará solo en 3 segundos
const contenedorMensajeToast = document.getElementById('mensaje-toast');

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
    if (badgeCarrito) badgeCarrito.textContent = cantidadTotal;
    if (subtotalCarrito) subtotalCarrito.textContent = formatoSoles(total);
    if (totalCarrito) totalCarrito.textContent = formatoSoles(total);

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

    // ACCIÓN: AGREGAR PRODUCTO (Código unificado con Toast)
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

        // Mostrar Toast de Bootstrap
        if (contenedorMensajeToast && toastBootstrap) {
            contenedorMensajeToast.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                ¡${producto.nombre} agregado con éxito!
            `;
            toastBootstrap.show();
        }
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

    // ACCIÓN: SUMAR CANTIDAD
    if (botonSumar) {
        const id = botonSumar.dataset.id;
        const producto = carrito.find(item => item.id === id);
        if (producto) producto.cantidad++;
        actualizarCarrito();
    }

    // ACCIÓN: RESTAR CANTIDAD
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
});

// Inicializamos el carrito al cargar la página
actualizarCarrito();
console.log("Supermercados RB - Sistema de órdenes activo.");


/* ==========================================================================
    5. CONTENEDOR DE CATALOGO PARA LOS PRODUCTOS (FRUTAS)
   ========================================================================== */


function renderizarCategoria(nombreCategoriaOBloque, idContenedor) {
    const contenedor = document.getElementById(idContenedor);
    if (!contenedor) return; 

    const tarjetaFija = contenedor.querySelector('.custom-view-more-card')?.parentElement;

    if (tarjetaFija) {
        contenedor.querySelectorAll('.col:not(#tarjeta-explorar-hogar)').forEach(el => el.remove());
    } else {
        contenedor.innerHTML = '';
    }

    const limiteEspecial = tarjetaFija ? 3 : 4;
    let productosFiltrados = [];
    
    if (Array.isArray(nombreCategoriaOBloque)) {
        productosFiltrados = nombreCategoriaOBloque.slice(0, limiteEspecial);
    } else {
        productosFiltrados = productosDB.filter(producto => 
            producto.categoria && producto.categoria.toLowerCase() === nombreCategoriaOBloque.toLowerCase()
        ).slice(0, limiteEspecial);
    }

    if (productosFiltrados.length === 0) {
        if (!tarjetaFija) {
            contenedor.innerHTML = `<div class="col-12 text-center text-muted"><p>No hay productos disponibles en esta categoría.</p></div>`;
        }
        return;
    }

    productosFiltrados.forEach(producto => {
        const htmlTarjeta = `
            <div class="col">
                <div class="card h-100 border-0 shadow-sm rounded-4 custom-product-card">
                    <div class="position-relative overflow-hidden card-img-wrap bg-light d-flex align-items-center justify-content-center" style="height: 160px;">
                        <img src="${producto.img}" class="card-img-top img-fluid p-3" alt="${producto.nombre}" style="max-height: 100%; object-fit: contain;">
                        <span class="badge bg-dark text-white position-absolute top-0 start-0 m-3 px-2 py-1 rounded small fw-bold tracking-wide">${producto.origen || 'Nacional'}</span>
                    </div>
                    <div class="card-body p-3 d-flex flex-column">
                        <span class="text-muted text-uppercase fw-semibold tracking-wider mb-1" style="font-size: 10px;">${producto.categoria}</span>
                        <h3 class="card-title fs-6 fw-bold text-dark mb-1 text-truncate" title="${producto.nombre}">${producto.nombre}</h3>
                        <p class="text-muted small text-truncate mb-3" style="font-size: 13px;">${producto.descripcion || ''}</p>
                        <div class="d-flex align-items-center justify-content-between mt-auto pt-2">
                            <span class="fs-5 fw-black text-dark">S/ ${producto.precio.toFixed(2)} <small class="text-muted fw-normal p-unit">/ und</small></span>
                            <button class="btn btn-success p-0 d-flex align-items-center justify-content-center rounded-circle btn-agregar-orden" 
                                    style="width: 36px; height: 36px;"
                                    data-id="${producto.id}" data-nombre="${producto.nombre}" data-precio="${producto.precio}" data-img="${producto.img}">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        if (tarjetaFija) {
            tarjetaFija.insertAdjacentHTML('beforebegin', htmlTarjeta);
        } else {
            contenedor.innerHTML += htmlTarjeta;
        }
    });
}

window.addEventListener('DOMContentLoaded', function() {
    console.log("Comprobando base de datos antes de renderizar...", typeof productosDB !== 'undefined' ? productosDB : "No encontrada");
    
    // 1. Filtramos primero los destacados por ID usando productosDB
    const idsDestacados = ["arandanos", "queso", "vino-queirolo", "cafe-jaen"];
    const mejoresProductos = productosDB.filter(prod => idsDestacados.includes(prod.id));
    
    // 2. Ejecutamos la carga de los destacados pasándole el ARRAY
    renderizarCategoria(mejoresProductos, "contenedor-mejores-productos");

    // 3. Tus categorías normales pasándole el TEXTO de siempre
    renderizarCategoria("Frutas", "catalogo-frutas");
    renderizarCategoria("Lácteos", "catalogo-lacteos");
    renderizarCategoria("Carnes", "catalogo-carnes");
    renderizarCategoria("Despensa", "catalogo-despensa");
    renderizarCategoria("Bebidas", "catalogo-bebidas");
    renderizarCategoria("Hogar", "catalogo-hogar");
});
// ============================================================
// 1. VARIABLES GLOBALES Y SELECCIÓN DE ELEMENTOS
// ============================================================
const carrito = JSON.parse(localStorage.getItem('carrito_supermercado')) || [];

// Elementos de la interfaz (Selectores unificados)
const badgeCarrito = document.querySelector('.cart-badge, .cart-count, .contador-carrito');
const contenedorCarrito = document.getElementById('carrito-items'); // ¡Corregido ID!
const subtotalCarrito = document.getElementById('carrito-subtotal');
const totalCarrito = document.getElementById('carrito-total');
const contenedorMensajeToast = document.getElementById('mensaje-toast');

// Inicialización segura de Bootstrap Toast (Evita romper el script si falta en el HTML)
const elementoToast = document.getElementById('notificacion-carrito');
let toastBootstrap = null;
if (elementoToast) {
    toastBootstrap = new bootstrap.Toast(elementoToast, { delay: 3000 });
}

function formatoSoles(numero) {
    return `S/ ${numero.toFixed(2)}`;
}

// ============================================================
// 2. SISTEMA DE CARRITO (LOGICA Y RENDER)
// ============================================================
function actualizarCarrito() {
    // Protección por si no estamos en una pantalla con la barra lateral/vista del carrito abierta
    if (!contenedorCarrito) return; 
    
    let cantidadTotal = 0;
    let total = 0;

    // Estado vacío rápido antes de procesar fragmentos
    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = `
            <div class="text-center py-5">
                <p class="text-muted m-0">Tu carrito está vacío.</p>
            </div>
        `;
        if (badgeCarrito) badgeCarrito.textContent = 0;
        if (subtotalCarrito) subtotalCarrito.textContent = formatoSoles(0);
        if (totalCarrito) totalCarrito.textContent = formatoSoles(0);
        return;
    }

    // Optimización: Usamos un fragmento de documento en memoria para no estresar al DOM
    const fragmento = document.createDocumentFragment();

    carrito.forEach((producto) => {
        cantidadTotal += producto.cantidad;
        total += producto.precio * producto.cantidad;

        const elementoItem = document.createElement('div');
        elementoItem.className = "cart-item d-flex gap-3 align-items-center mb-3 shadow-sm border rounded-4 p-3 bg-white";
        elementoItem.innerHTML = `
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
        `;
        fragmento.appendChild(elementoItem);
    });

    // Inyección limpia en el DOM de una sola operación
    contenedorCarrito.innerHTML = '';
    contenedorCarrito.appendChild(fragmento);

    // Actualizamos los contadores globales
    if (badgeCarrito) badgeCarrito.textContent = cantidadTotal;
    if (subtotalCarrito) subtotalCarrito.textContent = formatoSoles(total);
    if (totalCarrito) totalCarrito.textContent = formatoSoles(total);

    // Guardamos el estado actualizado en localStorage
    localStorage.setItem('carrito_supermercado', JSON.stringify(carrito));
}

// ============================================================
// 3. DELEGACIÓN DE EVENTOS CENTRALIZADA
// ============================================================
document.addEventListener('click', function (e) {
    const botonAgregar = e.target.closest('.btn-agregar-orden');
    const botonEliminar = e.target.closest('.btn-eliminar-cart');
    const botonSumar = e.target.closest('.btn-sumar');
    const botonRestar = e.target.closest('.btn-restar');

    if (botonAgregar) {
        e.preventDefault();
        
        const idBoton = botonAgregar.dataset.id;
        const precioBoton = Number(botonAgregar.dataset.precio);

        // 1. CONTROL DE SEGURIDAD: Buscamos el producto real en nuestra base de datos local
        const productoReal = productosDB.find(prod => prod.id === idBoton);

        // Si el producto no existe en nuestro archivo, o si alteraron el precio en el HTML, los frenamos
        if (!productoReal) {
            console.error("Alerta de seguridad: Intento de agregar un producto inexistente.");
            return;
        }

        if (productoReal.precio !== precioBoton) {
            alert("Error: Se detectó una inconsistencia en el precio del producto. Operación cancelada.");
            console.warn(`Intento de alteración de precio detectado en ID: ${idBoton}. Esperado: ${productoReal.precio}, Recibido: ${precioBoton}`);
            return; // Bloqueamos la ejecución aquí, el producto NO entra al carrito
        }

        // 2. Si pasó la validación, estructuramos el objeto usando los datos seguros de productosDB
        const producto = {
            id: productoReal.id,
            nombre: productoReal.nombre,
            precio: productoReal.precio, // Usamos el precio oficial y seguro
            img: productoReal.img,
            cantidad: 1
        };

        const existe = carrito.find(item => item.id === producto.id);
        if (existe) {
            existe.cantidad++;
        } else {
            carrito.push(producto);
        }

        actualizarCarrito();

        // Despliegue del Toast
        if (contenedorMensajeToast && toastBootstrap) {
            contenedorMensajeToast.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                ¡${producto.nombre} agregado con éxito!
            `;
            toastBootstrap.show();
        }
    }

    if (botonEliminar) {
        const id = botonEliminar.dataset.id;
        const index = carrito.findIndex(item => item.id === id);
        if (index !== -1) carrito.splice(index, 1);
        actualizarCarrito();
    }

    if (botonSumar) {
        const id = botonSumar.dataset.id;
        const producto = carrito.find(item => item.id === id);
        if (producto) producto.cantidad++;
        actualizarCarrito();
    }

    if (botonRestar) {
        const id = botonRestar.dataset.id;
        const producto = carrito.find(item => item.id === id);
        if (producto) {
            producto.cantidad--;
            if (producto.cantidad <= 0) {
                const index = carrito.findIndex(item => item.id === id);
                if (index !== -1) carrito.splice(index, 1);
            }
        }
        actualizarCarrito();
    }
});

// ============================================================
// 4. MOTOR DE RENDERIZADO DE CATÁLOGOS
// ============================================================
function renderizarCategoria(nombreCategoriaOBloque, idContenedor, esBusqueda = false) {    
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
        productosFiltrados = esBusqueda ? nombreCategoriaOBloque : nombreCategoriaOBloque.slice(0, limiteEspecial);
    } else {
        if (typeof productosDB === 'undefined') return; // Validación por seguridad
        const resultadoFiltro = productosDB.filter(producto => 
            producto.categoria && producto.categoria.toLowerCase() === nombreCategoriaOBloque.toLowerCase()
        );
        productosFiltrados = esBusqueda ? resultadoFiltro : resultadoFiltro.slice(0, limiteEspecial);
    }

    if (productosFiltrados.length === 0) {
        if (!tarjetaFija) {
            contenedor.innerHTML = `<div class="col-12 text-center text-muted"><p>No hay productos disponibles en esta categoría.</p></div>`;
        }
        return;
    }

    let htmlAcumulado = '';
    productosFiltrados.forEach(producto => {
        htmlAcumulado += `
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
                            <span class="fs-5 fw-black text-dark">${formatoSoles(producto.precio)} <small class="text-muted fw-normal p-unit">/ und</small></span>
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
    });

    if (tarjetaFija) {
        tarjetaFija.insertAdjacentHTML('beforebegin', htmlAcumulado);
    } else {
        contenedor.innerHTML = htmlAcumulado;
    }
}

// ============================================================
// 5. INICIALIZACIÓN Y PROCESOS DE PÁGINA
// ============================================================
window.addEventListener('DOMContentLoaded', function() {
    if (typeof productosDB === 'undefined') {
        console.error("Base de datos 'productosDB' no encontrada.");
        return;
    }

    if (document.getElementById('catalogo-frutas')) {
        const idsDestacados = ["arandanos", "queso", "vino-queirolo", "cafe-jaen"];
        const mejoresProductos = productosDB.filter(prod => idsDestacados.includes(prod.id));
        
        renderizarCategoria(mejoresProductos, "contenedor-mejores-productos");
        renderizarCategoria("Frutas", "catalogo-frutas");
        renderizarCategoria("Lácteos", "catalogo-lacteos");
        renderizarCategoria("Carnes", "catalogo-carnes");
        renderizarCategoria("Despensa", "catalogo-despensa");
        renderizarCategoria("Bebidas", "catalogo-bebidas");
        renderizarCategoria("Hogar", "catalogo-hogar");
    }

    const contenedorDinamico = document.getElementById('catalogo-categoria-dinamica');
    if (contenedorDinamico) {
        // Obtenemos los parámetros de la URL (ej: ?cat=Lácteos)
        const parametrosURL = new URLSearchParams(window.location.search);
        const categoriaSeleccionada = parametrosURL.get('cat'); // Captura el valor de 'cat'

        if (categoriaSeleccionada) {
            // Actualizamos el título de la pestaña del navegador
            document.title = `${categoriaSeleccionada} - Supermercado RB`;
            
            // Actualizamos el título H2 visual en la página
            const tituloDinamico = document.getElementById('nombre-categoria-dinamica');
            if (tituloDinamico) {
                tituloDinamico.textContent = categoriaSeleccionada;
            }

            // Renderizamos todos los productos que coincidan con esa categoría exacta
            renderizarCategoria(categoriaSeleccionada, 'catalogo-categoria-dinamica', true);
        } else {
            // Por si alguien entra a 'categoria.html' sin especificar ninguna categoría
            contenedorDinamico.innerHTML = `<p class="text-muted text-center col-12">Por favor, selecciona una categoría válida.</p>`;
        }
    }
});

function procesarPaginaBusqueda() {
    const idContenedorResultados = "catalogo-resultados";
    const contenedorResultados = document.getElementById(idContenedorResultados);
    if (!contenedorResultados || typeof productosDB === 'undefined') return; 

    const parametrosURL = new URLSearchParams(window.location.search);
    const terminoBuscado = parametrosURL.get('q')?.toLowerCase().trim() || "";

    const txtTitulo = document.getElementById('titulo-busqueda');
    if (txtTitulo && terminoBuscado) {
        txtTitulo.innerHTML = 'Resultados para: <span class="text-success" id="termino-seguro"></span>';
        document.getElementById('termino-seguro').textContent = `"${terminoBuscado}"`;
    }

    const productosEncontrados = productosDB.filter(producto => {
        return producto.nombre.toLowerCase().includes(terminoBuscado) || 
            (producto.descripcion && producto.descripcion.toLowerCase().includes(terminoBuscado));
    });

    renderizarCategoria(productosEncontrados, idContenedorResultados, true);
}

function verificarEstadoSesion() {
    const botonLoginNav = document.getElementById('btn-navegacion-login');
    if (!botonLoginNav) return;

    const datosSesion = localStorage.getItem('usuarioSesion');
    if (datosSesion) {
        const usuario = JSON.parse(datosSesion);
        const primerNombre = usuario.nombre.split(' ')[0];

        const spanSaludo = botonLoginNav.querySelector('.login-greeting');
        const spanAccion = botonLoginNav.querySelector('.login-text');

        if (spanSaludo) spanSaludo.textContent = `¡Hola, ${primerNombre}!`;
        if (spanAccion) {
            spanAccion.textContent = "Cerrar sesión";
            spanAccion.classList.add('text-danger');
        }

        botonLoginNav.setAttribute('href', '#');
        botonLoginNav.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('usuarioSesion');
            window.location.reload();
        });
    }
}

// Ejecución inicial segura
actualizarCarrito();
procesarPaginaBusqueda();
document.addEventListener('DOMContentLoaded', verificarEstadoSesion);

// ============================================================
// PASARELA DE PAGO SIMULADA
// ============================================================

const btnProcederPago = document.getElementById('btn-pagar');

if (btnProcederPago) {
    btnProcederPago.addEventListener('click', function (e) {
        e.preventDefault();

        // Seguridad: No puedes pagar si no has comprado nada
        if (carrito.length === 0) {
            alert("Tu carrito está vacío. Agrega algunos productos antes de proceder al pago.");
            return;
        }

        // Si el carrito tiene productos, mostramos el formulario de pago
        // Nota: Aquí puedes activar un modal de Bootstrap o mostrar una sección oculta
        const seccionPago = document.getElementById('seccion-checkout');
        if (seccionPago) {
            seccionPago.classList.remove('d-none'); // Quitamos la clase que lo oculta
            seccionPago.scrollIntoView({ behavior: 'smooth' }); // Efecto visual para bajar al formulario
        } else {
            // Si prefieres hacerlo simple con un prompt por ahora, o si no tienes la sección HTML creada:
            abrirPasarelaSimulada();
        }
    });
}

function abrirPasarelaSimulada() {
    const tipoDocumento = prompt("Seleccione tipo de documento para su comprobante:\n1. DNI (Boleta)\n2. RUC (Factura)");

    if (tipoDocumento !== "1" && tipoDocumento !== "2") {
        alert("Opción inválida. Proceso cancelada.");
        return;
    }

    const numeroDoc = prompt(tipoDocumento === "1" ? "Ingrese su número de DNI (8 dígitos):" : "Ingrese su número de RUC (11 dígitos):");

    if (!numeroDoc) return; // Si cancela el prompt

    // VALIDACIÓN CON LÓGICA RECIENTEMENTE VISTA EN CURSOS (Longitud y números de caracteres)
    const esSoloNumeros = /^\d+$/.test(numeroDoc); // Verifica que no contenga letras

    if (tipoDocumento === "1") {
        // Validación de DNI Peruano
        if (numeroDoc.length !== 8 || !esSoloNumeros) {
            alert("Error: El DNI debe tener exactamente 8 dígitos numéricos.");
            return;
        }
    } else {
        // Validación de RUC Peruano
        if (numeroDoc.length !== 11 || !esSoloNumeros) {
            alert("Error: El RUC debe tener exactamente 11 dígitos numéricos.");
            return;
        }
    }

    // Calcular el total final para mostrarlo en el mensaje de éxito
    const totalFinal = carrito.reduce((acumulador, item) => acumulador + (item.precio * item.cantidad), 0);

    // MENSAGE DE ÉXITO: Simulamos la pasarela aprobada
    alert(`¡Pago Procesado con Éxito!\n\nDocumento registrado: ${numeroDoc}\nTotal debitado: S/ ${totalFinal.toFixed(2)}\n\nTu pedido de Supermercado RB ya está en camino. ¡Gracias por tu compra, hermano!`);

    // VACIAR EL CARRITO POST-COMPRA
    carrito.length = 0; // Limpia el array
    localStorage.removeItem('carrito_supermercado'); // Borra el almacenamiento local para que no reaparezca al F5
    actualizarCarrito(); 
}


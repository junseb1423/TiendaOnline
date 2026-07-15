// ============================================================
// LÓGICA DE LA PASARELA DE PAGO (pago.html)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    const contenedorResumen = document.getElementById('resumen-productos-pago');
    const subtotalLabel = document.getElementById('subtotal-pago');
    const totalLabel = document.getElementById('total-pago');
    const totalBoton = document.getElementById('total-boton-pago');
    const tipoDocSelect = document.getElementById('pago-tipo-doc');
    const labelDocumento = document.getElementById('label-documento');
    const inputDocumento = document.getElementById('pago-documento');
    const formPago = document.getElementById('form-pasarela-pago');

    // 1. Cargar el carrito desde localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito_supermercado')) || [];

    // Si entran directamente a pago.html sin tener nada en el carrito, los devolvemos al index
    if (carrito.length === 0) {
        alert("No tienes productos en el carrito. Redireccionando a la tienda...");
        window.location.href = "index.html";
        return;
    }

    // 2. Renderizar el resumen de compra a la derecha
    let totalAcumulado = 0;
    let htmlResumen = "";

    carrito.forEach(item => {
        const subtotalProducto = item.precio * item.cantidad;
        totalAcumulado += subtotalProducto;

        htmlResumen += `
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="d-flex align-items-center gap-2">
                    <img src="${item.img}" alt="${item.nombre}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px;">
                    <div>
                        <p class="m-0 fw-semibold text-white small">${item.nombre}</p>
                        <p class="m-0 text-muted extra-small">Cant: ${item.cantidad} x S/ ${item.precio.toFixed(2)}</p>
                    </div>
                </div>
                <span class="text-white fw-bold small">S/ ${subtotalProducto.toFixed(2)}</span>
            </div>
        `;
    });

    contenedorResumen.innerHTML = htmlResumen;
    subtotalLabel.textContent = `S/ ${totalAcumulado.toFixed(2)}`;
    totalLabel.textContent = `S/ ${totalAcumulado.toFixed(2)}`;
    totalBoton.textContent = totalAcumulado.toFixed(2);

    // 3. Cambiar dinámicamente etiquetas de DNI/RUC
    tipoDocSelect.addEventListener('change', () => {
        if (tipoDocSelect.value === 'DNI') {
            labelDocumento.textContent = "Número de DNI";
            inputDocumento.placeholder = "Escribe tus 8 dígitos";
        } else {
            labelDocumento.textContent = "Número de RUC";
            inputDocumento.placeholder = "Escribe tus 11 dígitos";
        }
    });

    // 4. Procesar y validar el Formulario de Compra
    formPago.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('pago-nombre').value;
        const tipoDoc = tipoDocSelect.value;
        const nroDoc = inputDocumento.value.trim();
        const tarjeta = document.getElementById('pago-tarjeta').value.trim();

        // Validaciones numéricas peruanas
        const esSoloNumeros = /^\d+$/.test(nroDoc);
        const tarjetaSoloNumeros = /^\d+$/.test(tarjeta);

        if (tipoDoc === 'DNI') {
            if (nroDoc.length !== 8 || !esSoloNumeros) {
                alert("Error: El DNI debe tener exactamente 8 dígitos numéricos.");
                return;
            }
        } else {
            if (nroDoc.length !== 11 || !esSoloNumeros) {
                alert("Error: El RUC debe tener exactamente 11 dígitos numéricos.");
                return;
            }
        }

        if (tarjeta.length < 13 || !tarjetaSoloNumeros) {
            alert("Error: Ingrese un número de tarjeta válido (mínimo 13 a 16 dígitos numéricos).");
            return;
        }

        // MENSAGE DE CONFIRMACIÓN EXITOSA
        alert(`¡Pago Procesado con Éxito en Supermercado RB!\n\nMuchas gracias ${nombre}.\nComprobante emitido: ${tipoDoc} - ${nroDoc}.\nTotal pagado: S/ ${totalAcumulado.toFixed(2)}.\n\nTu pedido ya se encuentra en camino, hermano.`);

        // Limpiar el carrito de localStorage al finalizar la compra
        localStorage.removeItem('carrito_supermercado');

        // Redirección a la tienda de nuevo
        window.location.href = "index.html";
    });
});
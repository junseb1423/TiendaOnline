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
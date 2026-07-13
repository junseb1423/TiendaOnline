// ============================================================
// LOGIC EXCLUSIVA DE LOGIN.HTML
// ============================================================

// Base de datos de usuarios simulada
const usuariosLoginDB = [
    { correo: "cliente@rb.com", clave: "123456", nombre: "Juan Pérez" },
    { correo: "admin@rb.com", clave: "admin2026", nombre: "Supervisor RB" }
];

function inicializarFormularioLogin() {
    const formulario = document.getElementById('formulario-login');
    const alerta = document.getElementById('alerta-login');

    if (!formulario) return;

    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const txtCorreo = document.getElementById('correo').value.trim();
        const txtClave = document.getElementById('clave').value;

        alerta.classList.add('d-none');

        // Validamos contra nuestra mini base de datos local
        const usuarioValido = usuariosLoginDB.find(user => user.correo === txtCorreo && user.clave === txtClave);

        if (usuarioValido) {
            // Guardamos en el localStorage del navegador
            localStorage.setItem('usuarioSesion', JSON.stringify({
                nombre: usuarioValido.nombre,
                correo: usuarioValido.correo
            }));

            // Redirección limpia a la tienda
            window.location.href = "index.html";
        } else {
            alerta.textContent = "Correo o contraseña incorrectos. Inténtalo de nuevo.";
            alerta.classList.remove('d-none');
        }
    });
}

// Se ejecuta de inmediato porque sabemos que estamos en login.html
inicializarFormularioLogin();
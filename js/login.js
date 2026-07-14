// ============================================================
// BASE DE DATOS Y AUTENTICACIÓN UNIFICADA - SUPERMERCADO RB
// ============================================================

// 1. Usuarios predeterminados (Siempre disponibles en el sistema)
const usuariosPredeterminados = [
    { nombre: "Juan Pérez", correo: "cliente@rb.com", clave: "123456" },
    { nombre: "Supervisor RB", correo: "admin@rb.com", clave: "admin2026" }
];

document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('form-login');
    const formRegistro = document.getElementById('form-registro');
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');

    // Manejo estético de las pestañas
    if (loginTab && registerTab) {
        loginTab.addEventListener('click', () => {
            loginTab.classList.replace('text-muted', 'text-success');
            registerTab.classList.replace('text-success', 'text-muted');
        });

        registerTab.addEventListener('click', () => {
            registerTab.classList.replace('text-muted', 'text-success');
            loginTab.classList.replace('text-success', 'text-muted');
        });
    }

    // ============================================================
    // 2. LÓGICA DE REGISTRO (Guarda usuarios nuevos)
    // ============================================================
    if (formRegistro) {
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('reg-nombre').value.trim();
            const email = document.getElementById('reg-email').value.trim().toLowerCase();
            const password = document.getElementById('reg-pass').value;

            // Obtener lista de usuarios creados por el localStorage
            const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRB')) || [];

            // Validar que el correo no esté en los usuarios predeterminados ni en los ya registrados
            const existeEnPredeterminados = usuariosPredeterminados.some(user => user.correo === email);
            const existeEnRegistrados = usuariosRegistrados.some(user => user.email === email);

            if (existeEnPredeterminados || existeEnRegistrados) {
                alert('Este correo ya está registrado en Supermercado RB.');
                return;
            }

            // Guardar el nuevo usuario en el localStorage
            const nuevoUsuario = { nombre, email, password }; // Usamos email y password para emparejar la estructura
            usuariosRegistrados.push(nuevoUsuario);
            localStorage.setItem('usuariosRB', JSON.stringify(usuariosRegistrados));

            alert('¡Cuenta creada con éxito, hermano! Ya puedes iniciar sesión.');
            
            // Limpiar formulario y saltar a la pestaña de Login
            formRegistro.reset();
            const triggerLogin = new bootstrap.Tab(document.getElementById('login-tab'));
            triggerLogin.show();
            if (loginTab) loginTab.click();
        });
    }

    // ============================================================
    // 3. LÓGICA DE INICIO DE SESIÓN (Unificada)
    // ============================================================
    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = document.getElementById('login-email').value.trim().toLowerCase();
            const passInput = document.getElementById('login-pass').value;

            // Traer los usuarios creados dinámicamente desde el localStorage
            const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRB')) || [];

            // 1er intento: ¿Es un usuario predeterminado de la base de datos fija?
            let usuarioValido = usuariosPredeterminados.find(
                user => user.correo === emailInput && user.clave === passInput
            );

            // 2do intento: Si no es predeterminado, ¿es un usuario creado mediante el registro?
            if (!usuarioValido) {
                usuarioValido = usuariosRegistrados.find(
                    user => user.email === emailInput && user.password === passInput
                );
            }

            // Si lo encontramos en cualquiera de las dos fuentes:
            if (usuarioValido) {
                // Guardamos en el localStorage usando la clave estándar 'usuarioSesion'
                localStorage.setItem('usuarioSesion', JSON.stringify({
                    nombre: usuarioValido.nombre,
                    correo: usuarioValido.correo || usuarioValido.email
                }));
                
                alert(`¡Bienvenido de vuelta, ${usuarioValido.nombre}!`);
                window.location.href = 'index.html'; // Redirección limpia
            } else {
                alert('Correo o contraseña incorrectos. Inténtalo de nuevo.');
            }
        });
    }
});
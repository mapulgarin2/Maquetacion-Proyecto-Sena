document.addEventListener('DOMContentLoaded', function () {
    // Mostrar/Ocultar contraseña
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');

    togglePassword.addEventListener('click', function () {
        // Cambiar el tipo del input
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);

        // Cambiar el icono del ojo
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });

    // Alerta para recuperación de contraseña
    const recuperarContrasena = document.getElementById('recuperarContrasena');
    recuperarContrasena.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Por favor, contacte al administrador para recuperar su contraseña.');
    });

    // Redirigir al usuario después de iniciar sesión
    const loginForm = document.getElementById('loginForm');
    const loginAdmin = document.getElementById('loginAdmin');
    const loginVendedor = document.getElementById('loginVendedor');

    loginAdmin.addEventListener('click', function (event) {
        event.preventDefault();
        iniciarSesion('admin');
    });

    loginVendedor.addEventListener('click', function (event) {
        event.preventDefault();
        iniciarSesion('vendedor');
    });

    function iniciarSesion(perfil) {
        // Validar campos
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            let mensaje = 'Iniciando sesión como ';
            let destino = '';

            if (perfil === 'admin') {
                mensaje += 'Administrador...';
                destino = 'inicioAdmin.html'; // Cambia esto por la URL de la página de destino para administradores
            } else if (perfil === 'vendedor') {
                mensaje += 'Vendedor...';
                destino = 'inicioVendedor.html'; // Cambia esto por la URL de la página de destino para vendedores
            }

            alert(mensaje);
            window.location.href = destino;
        } else {
            alert('Por favor, complete todos los campos.');
        }
    }
});

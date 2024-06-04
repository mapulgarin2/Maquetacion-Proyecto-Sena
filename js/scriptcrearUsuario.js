document.addEventListener('DOMContentLoaded', function () {
    const vendedorCreadoBtn = document.getElementById('vendedorCreado');
   

    vendedorCreadoBtn.addEventListener('click', function (event) {
        // Evitar el envío del formulario para validación
        event.preventDefault();

        // Obtener valores de los campos
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const birthdate = document.getElementById('birthdate').value;

        // Validar que todos los campos estén completos
        if (username && password && birthdate) {
            alert('Usuario creado correctamente, en perfil Vendedor');
            
            window.location.href = 'index.html'; // Enviar el formulario si la validación es correcta
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });

    // Script para mostrar/ocultar contraseña
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
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleLink = document.getElementById('toggleForm');
    const loginForm = document.getElementById('loginForm');

    toggleLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevenir la acción por defecto del enlace

        if (loginForm.classList.contains('hidden')) {
            loginForm.classList.remove('hidden');
            toggleLink.textContent = 'Ocultar Formulario';
        } else {
            loginForm.classList.add('hidden');
            toggleLink.textContent = 'Mostrar Formulario';
        }
    });
});

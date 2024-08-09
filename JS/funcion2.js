document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario para manejar el evento con JavaScript
    emitirVoto();
});

function emitirVoto() {
    const section = document.getElementById('section').value;
    let mensaje = '';

    switch (section) {
        case 'norte':
            mensaje = 'Gracias por votar por la sección Norte.';
            break;
        case 'sur':
            mensaje = 'Gracias por votar por la sección Sur.';
            break;
        case 'centro':
            mensaje = 'Gracias por votar por la sección Centro.';
            break;
        default:
            mensaje = 'Por favor selecciona una sección válida.';
            break;
    }

    document.getElementById('result').textContent = mensaje;
}
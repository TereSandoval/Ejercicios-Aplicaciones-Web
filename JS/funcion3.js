let suma = 0;

function sumarNumeros() {
    const numeroInput = document.getElementById('numero');
    const numero = parseInt(numeroInput.value);

    if (numero > 0) {
        suma += numero;
        document.getElementById('resultado').innerText = `La suma es: ${suma}`;
    }

    numeroInput.value = ''; // Limpiar el campo de entrada
}

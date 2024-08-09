// Ejercicio 1
document.addEventListener('DOMContentLoaded', () => {
    let suma = 0;
    for (let i = 1; i <= 100; i += 2) {
        suma += i;
    }
    document.getElementById('resultado').textContent = `La suma de los números impares del 1 al 100 es: ${suma}`;
});

// Ejercicio 2
function mostrarAsteriscos() {
    const numero = parseInt(document.getElementById('numero').value);
    let asteriscos = '';
    for (let i = 0; i < numero; i++) {
        asteriscos += '*';
    }
    document.getElementById('resultado-asteriscos').textContent = asteriscos;
}

// Ejercicio 3
document.addEventListener('DOMContentLoaded', () => {
    const contenedorTablas = document.getElementById('tablas');
    for (let i = 1; i <= 10; i++) {
        let tabla = `<h2>Tabla del ${i}</h2>`;
        for (let j = 1; j <= 10; j++) {
            tabla += `${i} x ${j} = ${i * j}<br>`;
        }
        contenedorTablas.innerHTML += tabla;
    }
});

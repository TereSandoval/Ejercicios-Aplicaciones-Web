document.addEventListener('DOMContentLoaded', function () {
    let container = document.getElementById('container');

    // Solicitar al usuario el número de cajas
    let numCajas = parseInt(prompt("¿Cuántas cajas deseas colocar?"));

    // Validar que el número ingresado sea un número válido y positivo
    if (isNaN(numCajas) || numCajas <= 0) {
        alert("Por favor, ingresa un número válido de cajas.");
        return;
    }

    // Crear las cajas según el número ingresado
    for (let i = 1; i <= numCajas; i++) {
        let article = document.createElement('article');
        article.classList.add('article-box');
        article.textContent = `Caja ${i}`;
        container.appendChild(article);
    }

    // Aplicar estilos según la cantidad de cajas
    if (numCajas < 8) {
        container.classList.add('vertical');
    } else {
        container.classList.add('horizontal');
    }
});

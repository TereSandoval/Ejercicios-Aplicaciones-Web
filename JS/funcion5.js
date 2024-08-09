// Ejercicio 1. Ordenar 3 números de mayor a menor
function ordenarNumeros() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    const nums = [num1, num2, num3];
    nums.sort((a, b) => b - a);

    document.getElementById('resultadoOrdenar').textContent = `Orden: ${nums.join(', ')}`;
}

// Ejercicio 2. Calcular importe neto
function calcularNeto() {
    const importe = parseFloat(document.getElementById('importe').value);

    let neto;
    if (importe > 15000) {
        neto = importe * 0.84; // 16% de impuestos
    } else {
        neto = importe * 0.90; // 10% de impuestos
    }

    document.getElementById('resultadoNeto').textContent = `Importe neto: ${neto.toFixed(2)} €`;
}

// Ejercicio 3. Calcular sueldo con aumento
function calcularSueldo() {
    const anos = parseInt(document.getElementById('anos').value);
    const sueldoBase = 40000;

    let aumento;
    if (anos > 10) {
        aumento = 0.10; // 10%
    } else if (anos > 5) {
        aumento = 0.07; // 7%
    } else if (anos > 3) {
        aumento = 0.05; // 5%
    } else {
        aumento = 0.03; // 3%
    }

    const sueldoFinal = sueldoBase * (1 + aumento);
    document.getElementById('resultadoSueldo').textContent = `Sueldo con aumento: ${sueldoFinal.toFixed(2)} €`;
}


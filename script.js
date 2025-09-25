function calcular(operacion) {
    const n1 = document.getElementById('num1').value;
    const n2 = document.getElementById('num2').value;
    const resultadoDiv = document.getElementById('resultado');

    if (n1 === "" || n2 === "") {
        resultadoDiv.textContent = "Por favor, ingrese ambos números.";
        return;
    }
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);

    if (isNaN(num1) || isNaN(num2)) {
        resultadoDiv.textContent = "Ingrese solo números válidos.";
        return;
    }

    let resultado;
    switch (operacion) {
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            if (num2 === 0) {
                resultadoDiv.textContent = "Error: No se puede dividir por cero.";
                return;
            }
            resultado = num1 / num2;
            break;
    }
    resultadoDiv.textContent = `Resultado: ${resultado}`;
}

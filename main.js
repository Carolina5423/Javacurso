function calcularCredito() {
    // Obtener los valores ingresados por el usuario
    const montoCredito = parseFloat(document.getElementById("montoCredito").value);
    const tasaInteresAnual = parseFloat(document.getElementById("tasaInteres").value);
    const numCuotas = parseInt(document.getElementById("numCuotas").value);

    // Convertir la tasa de interés a mensual y calcular el monto mensual a pagar
    const tasaInteresMensual = tasaInteresAnual / 12 / 100;
    const montoMensual = montoCredito * (tasaInteresMensual * Math.pow(1 + tasaInteresMensual, numCuotas)) / (Math.pow(1 + tasaInteresMensual, numCuotas) - 1);

    // Calcular el monto total a pagar
    const montoTotal = montoMensual * numCuotas;

    // Mostrar los resultados en la página
    document.getElementById("montoMensual").textContent = montoMensual.toFixed(2);
    document.getElementById("montoTotal").textContent = montoTotal.toFixed(2);
}
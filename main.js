<script>
    function calcularPrestamo() {
        var monto = parseFloat(document.getElementById('monto').value);
        var tasa = parseFloat(document.getElementById('tasa').value);
        var plazo = parseInt(document.getElementById('plazo').value);

        // Convierte la tasa anual a mensual y a decimal
        var tasaMensual = (tasa / 100) / 12;

        // Calcula la cuota mensual
        var cuotaMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));

        // Calcula el total a pagar
        var totalPagar = cuotaMensual * plazo;

        document.getElementById('cuotaMensual').textContent = '$' + cuotaMensual.toFixed(2);
        document.getElementById('totalPagar').textContent = '$' + totalPagar.toFixed(2);
    }
</script>

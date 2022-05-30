//Fórmula Precio con Descuento
// ( Precio * % Descuento ) / 100

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrConDesc = 100 - descuento;
    const prConDesc = (precio * porcentajePrConDesc)/100;

    return prConDesc;
}
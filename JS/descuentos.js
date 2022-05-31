//Fórmula Precio con Descuento
// ( Precio * % Descuento ) / 100

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrConDesc = 100 - descuento;
    const prConDesc = (precio * porcentajePrConDesc)/100;

    return prConDesc;
}

function calcularPrecioPago(){
    const precio = new Number(document.getElementById("InputPrice").value);
    const descInput= new Number(document.getElementById("InputDiscount").value);
    const descSelect = new Number(document.getElementById("selectDescuentos").value);

    let precioPago = 0;

    if (descInput > 0){
        precioPago = calcularPrecioConDescuento(precio, descInput);
    }else if(descSelect > 0){
        precioPago = calcularPrecioConDescuento(precio, descSelect);
    }else{
        alert("Ha ocurrido un error al calcular el descuento");
    }

    document.getElementById("res-precio").innerText = `El precio que debes pagar es ${precioPago}`;
}

function limpiaDescuentoInput() {
    const descInput = new Number(document.getElementById("InputDiscount").value);

    if (descInput > 0){
        document.getElementById("InputDiscount").value = "";
    }
}

function limpiaDescuentoSelect() {
    const descSelect = document.getElementById("selectDescuentos").value;

    if (descSelect != "0"){
        document.getElementById("selectDescuentos").value = 0;
    }
}


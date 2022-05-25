// Código del cuadrado
console.group("Cuadrado");

//Función para calcular de perímetro de un cuadrado.
function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;    
}

//Función para calcular de área de un cuadrado.
function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
}

console.groupEnd();

//Código del tríangulo
console.group("Tríangulo");

//Función para calcular el perímetro de un tríangulo.
function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

//Función para calcular el área de un tríangulo.
function areaTriangulo(alturaTriangulo,baseTriangulo){
    return (alturaTriangulo * baseTriangulo) / 2;
}

console.groupEnd();

//Código del círculo
console.group("Círculo");
const PI = Math.PI;

//Función para calcular el perímetro/circunferencia de un círculo.
function perimetroCirculo(radioCirculo){
    return (radioCirculo * 2) * PI;
}

//Función para calcular el área de un círculo.
function areaCirculo(radioCirculo){
    return (radioCirculo * radioCirculo) * PI;
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
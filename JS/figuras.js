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
    const medida = document.getElementById("med-cuadrado").value;
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    document.getElementById("res-cuadrado").innerHTML = `El per&iacute;metro es: ${perimetro} ${medida}`;
}

function calcularAreaCuadrado(){
    const medida = document.getElementById("med-cuadrado").value;
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    document.getElementById("res-cuadrado").innerHTML = `El &aacute;rea es: ${area} ${medida}`;
}

function calcularPerimetroTriangulo(){
    const medida = document.getElementById("med-triangulo").value;
    const ladoA = new Number(document.getElementById("InputLadoA").value);
    const ladoB = new Number(document.getElementById("InputLadoB").value);
    const base = new Number(document.getElementById("InputBase").value);

    const perimetro = perimetroTriangulo(ladoA,ladoB,base);
    document.getElementById("res-triangulo").innerHTML = `El per&iacute;metro es: ${perimetro} ${medida}`;
}

function calcularAreaTriangulo(){
    const medida = document.getElementById("med-triangulo").value;
    const altura = document.getElementById("InputAltura").value;
    const base = document.getElementById("InputBase").value;

    const area = areaTriangulo(altura,base);
    document.getElementById("res-triangulo").innerHTML = `El &aacute;rea es: ${area} ${medida}`;
}

function calcularPerimetroCirculo(){
    const medida = document.getElementById("med-circulo").value;
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value).toFixed(4);
    document.getElementById("res-circulo").innerHTML = `El per&iacute;metro es: ${perimetro} ${medida}`;
}

function calcularAreaCirculo(){
    const medida = document.getElementById("med-circulo").value;
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value).toFixed(4);
    document.getElementById("res-circulo").innerHTML = `El &aacute;rea es: ${area} ${medida}`;
}
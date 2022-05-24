// Código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;    
}
//console.log("El perímetro del cuadro es: " + perimetroCuadrado + " cm");

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
}
//console.log("El área del cuadro es: " + areaCuadrado + " cm^2");
console.groupEnd();

//Código del tríangulo
console.group("Tríangulo");
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del tríangulo miden: Lado 1 es " 
    + ladoTriangulo1 
    + " cm, lado 2 es " 
    + ladoTriangulo2 
    + "cm, la base es " + baseTriangulo
    + "cm y la altura es " + alturaTriangulo + " cm");*/

function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}
//console.log("El perímetro del tríangulo es: " + perimetroTriangulo + " cm");

function areaTriangulo(alturaTriangulo,baseTriangulo){
    return (alturaTriangulo * baseTriangulo) / 2;
}
//console.log("El área del tríangulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

//Código del círculo
console.group("Círculo");
const PI = Math.PI;
/*const radioCirculo = 4;
const diametroCirculo = radioCirculo*2;

console.log(
    "El radio del círculo es: " + radioCirculo 
    + "cm, el diámetro del círculo es: " + diametroCirculo
    + "cm y el valor de PI es: " + PI);*/

function perimetroCirculo(radioCirculo){
    return (radioCirculo * 2) * PI;
}
//console.log("La circunferencia del circulo es: " + perimetroCirculo + " cm");

function areaCirculo(radioCirculo){
    return (radioCirculo * radioCirculo) * PI;
}
//console.log("El área del circulo es: " + areaCirculo + " cm^2");
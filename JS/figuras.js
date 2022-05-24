// Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadro es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadro es: " + areaCuadrado + " cm^2");
console.groupEnd();

//Código del tríangulo
console.group("Tríangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del tríangulo miden: Lado 1 es " 
    + ladoTriangulo1 
    + " cm, lado 2 es " 
    + ladoTriangulo2 
    + "cm, la base es " + baseTriangulo
    + "cm y la altura es " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del tríangulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (alturaTriangulo * baseTriangulo) / 2;
console.log("El área del tríangulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

//Código del círculo
console.group("Círculo");
const radioCirculo = 4;
const diametroCirculo = radioCirculo*2;
const PI = Math.PI;
console.log(
    "El radio del círculo es: " + radioCirculo 
    + "cm, el diámetro del círculo es: " + diametroCirculo
    + "cm y el valor de PI es: " + PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("La circunferencia del circulo es: " + perimetroCirculo + " cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del circulo es: " + areaCirculo + " cm^2");
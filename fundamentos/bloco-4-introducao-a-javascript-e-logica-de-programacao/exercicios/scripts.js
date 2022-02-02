const a = 20;
const b = 25;
const c = 15;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//maior entre 3
console.log("Qual é maior?")

if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);

}

console.log("maior de 3")
if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > a) {
    console.log(b);
} else if (c > a && c > b) {
    console.log(c);
}

// posite - negative - zero

const d = -20;

if (d > 0) {
    console.log("Positive");
} else if (d < 0) {
    console.log("Negative");
} else {
    console.log("d=0")
}

//Triangulos
const anguloA = 80;
const anguloB = 90;
const anguloC = 10;
let triangulo;


if (anguloA < 0 || anguloB < 0 || anguloC < 0) {
    console.log("exite um angulo invalido - angulos não podem ser menor que zero")
} else if ((anguloA + anguloB + anguloC) == 180) {
    triangulo = true;
    console.log(triangulo + " - imagem é um triangulo");
} else {
    triangulo = false;
    console.log(triangulo)
}

// peças de xadrez

const pecaXadrez = "joao";

switch (pecaXadrez.toLowerCase()) {
    case "bispo":
        {
            console.log("diagonal");
            break;
        }
    case "peão":
        {
            console.log("1 casa para frente ou 2 casas na primeira jogada");
            break;
        }
    case "torre":
        {
            console.log("vertical e horizontal ")
            break
        }
    case "cavalo":
        {
            console.log("movimento em L")
            break
        }
    case "rainha":
        {
            console.log("livre varias casas")
            break
        }
    case "rei":
        {
            console.log("livre de 1 em uma casa")
            break
        }
    default:
        console.log("não é um peça de xaderz válida");

}
function verificaPalindrome(word) {
    for (index in word) {
        if (word[index] != word[(word.length - 1) - index]) {
            return false;
        }
    }
    return true;
}

// function verificaPalindrome(string) {
//     let reverse = string.split('').reverse().join('');
//     if (reverse === string) {
//         return true;
//     } else {
//         return false;
//     }
// }

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));


let arrayTeste = [2, 3, 6, 7, 10, 1];

function maiorValor(numeros) {

    let indiceMaior = 0;
    for (let indice in numeros) {
        if (numeros[indiceMaior] < numeros[indice]) {
            indiceMaior = indice;
        }
    }
    return indiceMaior;

}

console.log(maiorValor(arrayTeste));

let arrayTeste2 = [2, 4, 6, 7, 10, 0, -3];

function menorValor(numeros) {

    let indiceMenor = 0;
    for (let indice in numeros) {
        if (numeros[indiceMenor] > numeros[indice]) {
            indiceMenor = indice;
        }
    }
    return indiceMenor;

}

console.log(menorValor(arrayTeste2));


let arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) {
        if (maiorPalavra.length < palavras[indice].length) {
            maiorPalavra = palavras[indice];
        }
    }
    return maiorPalavra;
}

console.log(maiorPalavra(arrayNomes));
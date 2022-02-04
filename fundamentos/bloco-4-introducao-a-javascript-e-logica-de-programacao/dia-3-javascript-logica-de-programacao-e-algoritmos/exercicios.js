// Exericio 1 - Fatorial

let num = 4;
let fatorial = 1; // inicia em 1

for (let index = 1; index <= num; index += 1) {
    fatorial *= index;
}

console.log(fatorial);

// Exercicio 2 - inverter palavra

let word = 'tryber';
let invertida = '';

/* for (let index = 0; index < word.length; index++) {
    console.log(word[index]);

} */

for (let index = word.length - 1; index >= 0; index--) {
    invertida += word[index];
}

console.log(invertida);

// exercicio 3 - maior palavra do array e menor palavra considerando o numero de caractere de cada palavra

let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavra = 0;
let maiorpalavra = 0;
let texto = '';

for (let index = 0; index < array.length; index += 1) {

    palavra = (array[index].length);

    if (palavra > maiorpalavra) {
        maiorpalavra = palavra;
        texto = array[index];
    }

}

console.log("a maior palavra é " + texto + " com " + maiorpalavra + " caracteres");


<<<<<<< HEAD

// numeros primos
=======
// numero primo ate 50...

/* let primo = 50;
for (var i = 0; i <= primo; i++) {
    if ((primo % 1 === 0) && (primo % primo === 0)) {
        console.log(i);
    }
} */
>>>>>>> 565330ab3aae2fd6036cda6f67738710f1f400eb

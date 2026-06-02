let numeros = [];
let contador = 0;

do {
    numeros[contador] = Number(prompt("Digite o número " + (contador + 1) + ":"));
    contador = contador + 1;
} while (contador < 15);

let todosNumeros = "Vetor inteiro: ";
let posicoesMultiplos = "Posições dos múltiplos de 10: ";
contador = 0;
do {

    todosNumeros = todosNumeros + numeros[contador] + " ";
    if (numeros[contador] % 10 == 0) {
        posicoesMultiplos = posicoesMultiplos + contador + " ";
    }

    contador = contador + 1;
} while (contador < 15);

alert(todosNumeros);
alert(posicoesMultiplos);
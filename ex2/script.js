let idades = [];
let contador = 0;

do {
    idades[contador] = Number(prompt("Digite a idade da pessoa " + (contador + 1) + ":"));
    contador = contador + 1; 
} while (contador < 7);

let resultado = "Posições com mais de 25 anos: ";
contador = 0;

do {
    if (idades[contador] > 25) {
        resultado = resultado + contador + " ";
    }
    contador = contador + 1;
} while (contador < 7);

alert(resultado);
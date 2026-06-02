let idades = [];
let contador = 0;
let somaIdades = 0;


do {

    idades[contador] = Number(prompt(`Digite a idade da ${contador + 1}º pessoa:`));
    somaIdades += idades[contador];
    contador++;
} while (contador < 8);

let media = somaIdades / 8;

alert(`A média de idade das pessoas  é: ${media.toFixed(2)} .`);
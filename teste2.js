/*
2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula,
além de informar a quantidade 
de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
*/

const prompt = require('prompt-sync')()

function acharLetra() {
    
    let contador = 0
    const palavra = prompt('Digite qualquer frase: ').toLowerCase()
    

    for (i of palavra) {

        if (i === 'a') {
            contador +=1
        }

    }

    return `A letra "A" aparece na frase e aparece ${contador} vezes`

}

console.log(acharLetra())
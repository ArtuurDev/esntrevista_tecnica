/* 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código
*/


function fibonacci(num) {

    const calculo1 = 5*num**2 + 4
    const raiz1 = Math.sqrt(calculo1)
    const calculo2 = 5*num**2 - 4
    const raiz2 = Math.sqrt(calculo2)
    
    if (raiz1 % 1 != 0) {
                
        if(raiz2 % 1 != 0) {

            return `O numero ${num} não está na sequencia Fibonacci`

        }
        
        return `O numero ${num} está na sequencia de Fibonacci`
    
    }
    else {
        return `O numero ${num} está na sequencia Fibonacci`
    }
}

console.log(fibonacci(89))
console.log(fibonacci(5))
console.log(fibonacci(3))
console.log(fibonacci(13))
console.log(fibonacci(7))
console.log(fibonacci(9))



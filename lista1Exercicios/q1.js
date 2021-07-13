// Crie uma função que dado dois valores (passados como parâmetros)
// mostre no console a soma, subtração, multiplicação e divisão desses valores.

const op = (x, y) => {
    soma = x + y
    sub = x - y
    mult = x * y
    div = x / y
    console.log(`Soma é: ${soma}
Subtração é: ${sub}
Multiplicação é: ${mult}
Divisão é: ${div}`)
}

op(2,3)
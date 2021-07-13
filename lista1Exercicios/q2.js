// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo)

const identificaTriangulo = function (x, y, z){
    if(x == y && y == z){
        return 'Triângulo Equilátero'
    } else if(x == y || y == z || x == z){
        return 'Triângulo Isósceles'
    } else if(x != y && y != z && x != z){
        return 'Triângulo Escaleno'
    } else{
        return 'Dados inválidos'
    }
}

console.log(identificaTriangulo(2, 3, 2))
console.log(identificaTriangulo(3, 3, 3))
console.log(identificaTriangulo(1, 2, 3))
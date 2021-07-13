const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

//Desafio 1: Todos os alunos são bolsistas?

const d1 = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    return acumulador && atual
})

console.log(d1)

//Desafio 2: Tem algum aluno bolsista?

const d2 = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    return acumulador || atual
})

console.log(d2)

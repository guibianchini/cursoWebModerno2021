const peso1 = 1.0
const peso2 = Number('2.0')//X.0 são considerados inteiros mesmo com .

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))//Analisa se é inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1+peso2)

console.log(media.toFixed(2))//Imprime números x após a vírgula
console.log(media.toString())//Converte pra String
console.log(media.toString(2))//Converte pra binário
console.log(typeof media)//Mostra o tipo da variável
/*const a = {name: 'Teste'}

console.log(a)
const b = a
console.log(b)
b.name = 'Opa'
console.log(a)

let c = 3
let d = c
d++
console.log(d)
console.log(c)
*/

let valor 
console.log(valor) //não inicializada
valor = null
console.log(valor) //ausencia de valor

//console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)
produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

console.log(carrinho)
console.log('')

const p = e => JSON.parse(e)
const p1 = e => e.preco

let resultado = carrinho.map(p).map(p1)
console.log(resultado)



Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i =0; i < this.length; i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}

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

let resultado = carrinho.map2(p).map2(p1)
console.log(resultado)



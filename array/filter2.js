Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i =0; i < this.length; i++){
        if(callback(this[i])){
            newArray.push(this[i])
        }
    }
    return newArray
}

Array.prototype.forEach2 = function(callback) {
    for(let i =0; i < this.length; i++){
        callback(this[i], i, this)
    }
}


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.49, fragil: false},
]

const caro = p => p.preco > 500
const fragil = p => p.fragil

console.log(produtos.filter2(fragil).filter2(caro))
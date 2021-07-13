console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 //visivel fora do arquivo
exports.b = 2 //visivel fora
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
} //não vai ser exportado, apenas se for feito dentro de module.exports.

console.log(module.exports)

module.exports = { publico: true }
console.log(module.exports)
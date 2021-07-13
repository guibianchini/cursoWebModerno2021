function real(partes, ...valores){
    const resultado = [];
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;
        resultado.push(partes[indice], valor);
    })
    return resultado.join('');
}

const preco = 3401.9491587;
const precoParcela = 2000;
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`);

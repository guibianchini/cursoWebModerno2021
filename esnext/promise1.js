let a = 1;
console.log(a);

const primeiroElemento = conteudo => conteudo[0];

const letraMinuscula = letra => letra.toLowerCase();

new Promise(function(resolve){ //resolve é a mesma coisa que cumprir a promessa
    resolve(['Ana','Bia','Carlos','Daniel']);
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log); //imprime o parametro que está recebendo sem abrir o ()

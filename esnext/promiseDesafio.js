const fs = require('fs');
const path = require('path');
const caminho = path.join(__dirname, 'dados.txt');

async function exibirConteudo(caminho){
    return new Promise(resolve => {
        const conteudo = (_, conteudo) => resolve(conteudo.toString());
        fs.readFile(caminho, conteudo);
    });
};

exibirConteudo(caminho)
    .then(conteudo => conteudo.split(`\r\n`))
    .then(linhas => linhas.join(','))
    .then(cont => `O valor final é ${cont}`)
    .then(console.log);
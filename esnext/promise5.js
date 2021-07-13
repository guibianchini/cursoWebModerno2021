function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        try{
            con.log('temp');
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro!');
            } else {
                resolve(valor);
            }
        }catch(e){
            reject(e);
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor ${v}`)
    .then(
        v => console.log(v),
        //a => console.log(`Erro Esp.: ${a}`)
    )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`Erro G: ${err}`))
    .then(() => console.log('Fim!'));
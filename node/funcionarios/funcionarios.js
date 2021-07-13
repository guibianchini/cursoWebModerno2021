const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const filtroPais = e => e.pais === 'China'
const filtroGenero = e => e.genero === 'F'
const menorSalario = (menor, atual) =>
     menor.salario < atual.salario ? menor : atual

const f = axios.get(url).then(response =>{
    const funcionarios = response.data
    
    console.log(funcionarios.filter(filtroPais).filter(filtroGenero).reduce(menorSalario))
})

// const res = funcionarios.map(p)
console.log(Object.values(f))
//Operador ... rest(juntar)/spread(espalhar)
//Usar Rest com parâmetro de função

//Usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12349.99 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

//Usar spread com array
const grupoA = ['João', 'Glória', 'Pedro'];
const grupoFinal = ['Maria', ...grupoA];
console.log(grupoFinal); 
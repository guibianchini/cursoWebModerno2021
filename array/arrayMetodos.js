const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log('A ORIGINAL: ', pilotos, '\n')

pilotos.pop() //ultimo sai
console.log('POP: ',pilotos)

pilotos.push('Verstappen')
console.log('PUSH: ',pilotos)

pilotos.shift() //remove o primeiro
console.log('SHIFT: ',pilotos)

pilotos.unshift('Hamilton')
console.log('UNSHIFT: ',pilotos)

//splice add e remove elementos no array

//adicionar
pilotos.splice(2,0,'Bottas','Massa')
console.log('SPLICE: add',pilotos)

//remover
pilotos.splice(3,1)//massa saiu
console.log('SPLICE: rm',pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log('SLICE(2): ',algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log('SLICE(1,4): ',algunsPilotos2)
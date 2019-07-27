const alunos = [
    { nome: 'Gabriela', nota: 7.3, bolsista: false },
    { nome: 'Vitor', nota: 9.2, bolsista: true },
    { nome: 'Marcelo', nota: 9.8, bolsista: false },
    { nome: 'Suzy', nota: 8.7, bolsista: true }
]


// Desafio 1: Todos os alunos são bolsistas?
const teste1 = alunos.map(bolsa => bolsa.bolsista).reduce(function(acumulador, atual) {
    //console.log(acumulador, atual)
    return acumulador && atual
})
console.log(teste1)

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Algum aluno é bolsista?
const teste2 = alunos.map(bolsa => bolsa.bolsista).reduce(function(acumulador, atual) {
    return acumulador || atual
})
console.log(teste2)

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
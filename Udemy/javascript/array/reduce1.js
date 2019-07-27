const alunos = [
    { nome: 'Gabriela', nota: 7.3, bolsista: false },
    { nome: 'Vitor', nota: 9.2, bolsista: true },
    { nome: 'Marcelo', nota: 9.8, bolsista: false },
    { nome: 'Suzy', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(anterior, atual) {
    console.log(anterior, atual)
    return anterior + atual
}, 0)

console.log(resultado)
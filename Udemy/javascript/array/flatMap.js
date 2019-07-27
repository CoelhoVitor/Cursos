const escola = [{
    nome: 'Turma A',
    alunos: [{
        nome: 'Gabriela',
        nota: 10
    }, {
        nome: 'Vitor',
        nota: 0
    }]
}, {
    nome: 'Turma B',
    alunos: [{
        nome: 'Suzy',
        nota: 2
    }, {
        nome: 'Marcelo',
        nota: 8
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas = escola.flatMap(getNotasDaTurma)
console.log(notas)
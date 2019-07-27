// Object.preventExtensions
// Adicionar não
// Excluir sim
// Editar sim
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível: ', Object.isExtensible(produto))

produto.descricao = 'Borracha azul'
delete produto.tag
produto.nome = 'Borracha'
console.log(produto)

// Object.seal
// Adicionar não
// Excluir não
// Editar sim
const pessoa = Object.seal({ 
    nome: 'Gabriela', idade: 17 
})
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Benedito'
delete pessoa.nome
pessoa.idade = 24
console.log(pessoa)

//Object.freeze
// Adicionar não
// Excluir não
// Editar não
const pessoa2 = Object.freeze({ 
    nome: 'Gabriela', idade: 17 
})
console.log('Frozen: ', Object.isFrozen(pessoa2))

pessoa2.sobrenome = 'Benedito'
delete pessoa2.nome
pessoa2.idade = 24
console.log(pessoa2)

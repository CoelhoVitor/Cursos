const aprovados = ['Gabriela', 'Vitor', 'Marcelo', 'Suzy']

// obrigatoriamente a ordem dos parâmetros são: nome, índice e array
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

// salvou a arrow function em uma constante
// a função recebe como parâmetro um valor do array e o printa
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


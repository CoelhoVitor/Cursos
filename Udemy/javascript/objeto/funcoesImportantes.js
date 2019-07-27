const pessoa = {
    nome: 'Gabriela',
    idade: 17,
    altura: 1.66
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true,
    writable: false,
    value: '31/03/2001' 
})

pessoa.dataDeNascimento = '17/04/19998'
console.log(pessoa.dataDeNascimento)
console.log(pessoa)

const dest = { a: 1}
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
console.log(Object.assign(dest, o1, o2))
const deuses = ['Agni', 'Cupid', 'Skadi', 'Thor']
deuses.pop() // remove o ultimo elemento
console.log(deuses)

deuses.push('Loki') // adiciona no final do array
console.log(deuses)

deuses.shift() // remove o primeiro elemento
console.log(deuses)

deuses.unshift('Anhur') // adiciona no começo do array
console.log(deuses)

// splice pode adicionar e remover

// adicionar
deuses.splice(2, 0, 'Zeus', 'Hou Yi')
console.log(deuses)

// remover
deuses.splice(3, 1)
console.log(deuses)

const demons = deuses.slice(2) // novo array do indice 2 até o final
console.log(demons)

const semigod = deuses.slice(1, 4) // pega os valores do 2, 3 e 4
console.log(semigod)

console.log(deuses)
const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c}
const obj2 = { a, b, c}
console.log(obj1)
console.log(obj2)


const notaNome = 'nota'
const notaValor = 7.8

const obj3 = {}
obj3[notaNome] = notaValor
console.log(obj3)

const obj4 = {[notaNome]: notaValor}
console.log(obj4)


const obj5 = {
    funcao1: function() {
        // ...
    },
    // Forma reduzida de definir Função em Objeto
    funcao2() {
        // ...
    }
}
console.log(obj5)
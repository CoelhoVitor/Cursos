// Cedeia de protótipos (prototype chain)
// .__proto__ == prototype do Objeto

Object.prototype.attr0 = '0' // não fazer isso
const avo = { attr1: '1'}
const pai = { __proto__: avo, attr2: '2', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }    
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Usando shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`  // Usando super
    }
}

Object.setPrototypeOf(ferrari, carro) // seta Carro como protótipo de Ferrari
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)


ferrari.acelerarMais(300)
console.log(ferrari.status())

volvo.acelerarMais(100)
console.log(volvo.status())

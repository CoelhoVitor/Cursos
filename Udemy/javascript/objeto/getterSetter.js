const sequencia = {
    _valor: 1, // _ é conveção de variável privada
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) // utiliza-se do Get
sequencia.valor = 1000 // utiliza-se do Set
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima)
            velocidadeAtual += delta
        else
            velocidadeAtual = velocidadeMaxima
    }

    // metodo público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const fox = new Carro
fox.acelerar()
console.log(fox.getVelocidadeAtual())

const lambo = new Carro (350, 60)
lambo.acelerar()
lambo.acelerar()
lambo.acelerar()
console.log(lambo.getVelocidadeAtual())
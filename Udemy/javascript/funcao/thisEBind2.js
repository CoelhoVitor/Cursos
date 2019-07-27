function Pessoa() {
    const self = this // outra forma de guardar o this

    this.idade = 0

    // quem chama essa função é um temporizador, logo o this não é a função Pessoa
    setInterval(function() {
        this.idade++
        // self.idade++

        console.log(this.idade)
        // console.log(self.idade)

    }.bind(this), 1000)
}

new Pessoa
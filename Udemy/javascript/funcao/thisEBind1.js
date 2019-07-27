const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

// this não é conhecida
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// nessa função, o 'this' sempre estará amarrada à 'pessoa' por causa do bind
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
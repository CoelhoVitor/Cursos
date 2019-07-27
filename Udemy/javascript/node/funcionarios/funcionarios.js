const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheres = f => f.genero === 'F'
const chineses = f => f.pais === "China"
const menorSalario = (f, fAtual) => {
    return f.salario < fAtual.salario ? f : fAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    // mulher chinesa com menor salario
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)

})
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
//enquanto carrega o objeto, ele continua o programa, e depois printa
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    if (err === null) {
        const config = JSON.parse(conteudo)
        console.log(`${config.db.host}:${config.db.port}`)
    }
}) 

// espera o objeto carregar para continuar e printar
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

// Instancias A e B ficam em cache (únicas)
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

// Instancia C e D são diferentes (novas)
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
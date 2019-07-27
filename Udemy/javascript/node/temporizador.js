const schedule = require('node-schedule')

// terça-feira, qq mes, qq dia, às 12h, qq min, de 5 em 5 seg
// segundo minuto hora dia mes diaSemana
// const tarefa1 = schedule.schedule('*/5 * 12 * * 2')

const tarefa1 = schedule.scheduleJob('*/5 * 18 * * 0', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 5)]
regra.hour = 18
regra.second = 30

// roda exatamente no segundo 30
const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})
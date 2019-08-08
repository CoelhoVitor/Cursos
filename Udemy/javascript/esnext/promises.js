function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
            // reject(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal')
    .then(frase => frase.concat('!!!'))
    .then(frase => frase.concat('???'))
    .then(outraFrase => console.log(outraFrase))
    // caso dê erro (reject)
    .catch(e => console.log(e))
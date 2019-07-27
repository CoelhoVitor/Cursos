// IIFE -> Immediately Invoked Function Expression

// Expressão deve ficar entre parênteses
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})() // o '()' chama essa função imediatamente

// Mesma coisa que o de cima, porém é executado em escopo Global
console.log('Será executado na hora!')
console.log('Foge do escopo mais abrangente!')
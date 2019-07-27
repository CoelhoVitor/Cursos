// não aceita repetição
// não indexada
const pokemons = new Set()
pokemons.add('Pikachu')
pokemons.add('Bulbasaur').add('Charmander').add('Squirtle')
pokemons.add('Pidgey')
pokemons.add('Pikachu')

console.log(pokemons)
console.log(pokemons.size)
console.log(pokemons.has('Pikachu'))
console.log(pokemons.has('pikachu'))
pokemons.delete('Pikachu')
console.log(pokemons.has('Pikachu'))

const nomes = ['Vitor', 'Gabriela', 'Marcelo']
const nomesSet = new Set(nomes)
console.log(nomesSet)
// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
const HULK = avengers[0]
console.log(HULK)

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
avengers[0] = 'IRONMAN'
console.log(avengers)
// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const numberOfAvengers = avengers.length
console.log(`${numberOfAvengers}`)

// 1.4 Añade 2 elementos al array: "Morty" y "Summer".
// Muestra en consola el último personaje del array
//! const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
// rickAndMortyCharacters.push('Morty', 'Summer')
// const lastCharacter = rickAndMortyCharacters[rickAndMortyCharacters.length - 1]
// console.log(lastCharacter)

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters2.pop()
const firstCharacter = rickAndMortyCharacters2[0]
const lastCharacter =
  rickAndMortyCharacters2[rickAndMortyCharacters2.length - 1]
console.log(`Primer personaje: ${firstCharacter}`)
console.log(`Último personaje: ${lastCharacter}`)

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
rickAndMortyCharacters2.splice(1, 1)
console.log(rickAndMortyCharacters2)

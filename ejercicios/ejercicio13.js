//!      BUSCADOR DE NOMBRES Etc...

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(nameFinder, name) {
  if (nameFinder.includes(name)) {
    return `${true}, posición: ${nameFinder.indexOf(name)}`
  } else {
    return `${false}`
  }
}
console.log(finderName(nameFinder, 'Logan'))
console.log(finderName(nameFinder, 'jambito'))

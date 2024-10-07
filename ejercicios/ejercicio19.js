//! ELIMINAR PROPIEDAD DE OBJETO BUSCANDO SI INCLUYE UNA PARTE DE UN DATO O SEGÚN SU ID COMO EJ18

const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]

//! DATO

for (let i = 0; i < toys.length; i++) {
  if (toys[i].name.includes('gato')) {
    toys.splice(i, 1)
    i--
  }
}
console.log(toys)

//! ID

for (let i = 0; i < toys.length; i++) {
  if (toys[i].id === 40) {
    toys.splice(i, 1)
    i--
  }
}

console.log(toys)

// for (let i = 0; i < toys.length; i++) {
//   if (toys[i].includes('gato')) {
//     toys.splice(i, 1), i--
//   }
// }

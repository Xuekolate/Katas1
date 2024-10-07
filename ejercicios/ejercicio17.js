//! IMPRIMIR DATOS, PROPIEDADES O AMBOS DE UN OBJETO (ForIn)

const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}
//! DATOS
for (const key in alien) {
  console.log(alien[key])
}
//! PROPIEDADES

for (const key in alien) {
  if (Object.prototype.hasOwnProperty.call(alien, key)) {
    const element = alien[key]
  }
  console.log(key)
}
//! AMBOS

for (const key in alien) {
  if (Object.prototype.hasOwnProperty.call(alien, key)) {
    console.log(`${key}: ${alien[key]}`)
  }
}

const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll(numbers) {
  let suma = 0
  for (let number of numbers) {
    suma += number
  }
  return suma
}
const Sumatotal = sumAll(numbers)
console.log('la suma total es de:', Sumatotal)

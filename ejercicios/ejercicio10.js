const numbers = [12, 21, 38, 5, 45, 37, 6]

function sumAll(numbers) {
  let suma = 0
  let cantidadNumeros = numbers.length
  for (let number of numbers) {
    suma += number
  }
  const sumaTotal = suma
  const media = sumaTotal / cantidadNumeros

  return {
    sumaTotal: sumaTotal,
    media: media
  }
}
const resultado = sumAll(numbers)
console.log('el Resultado de la media de los numeros es:', resultado.media)

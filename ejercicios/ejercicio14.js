//! CONTADOR DE REPETICIONES.....

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(counterWords) {
  const count = {}
  for (let i = 0; i < counterWords.length; i++) {
    const element = counterWords[i]
    if (count[element]) {
      count[element]++
    } else {
      count[element] = 1
    }
  }
  return count
}
console.log(repeatCounter(counterWords))

// function repeatCounter(array) {
//   const count = {}
//   for (let i = 0; i < array.length; i++) {
//     if (count[array[i]] >= 1) {
//       count[array[i]]++
//     } else {
//       count[array[i]] = 1
//     }
//   }

//   console.log(count)
// }

// repeatCounter(counterWords) // { code: 4, repeat: 1, eat: 1, sleep: 2, enjoy: 2, upgrade: 1 }
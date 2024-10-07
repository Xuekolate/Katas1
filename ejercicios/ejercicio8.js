const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
//                 0123    0123    0123456    0123456789     012345678    0123456789

function findLongestWord() {
  let longestWord = ''
  let maxLength = 0

  for (let word of avengers) {
    const wordLength = word.length

    if (word.length > maxLength) {
      longestWord = word
      maxLength = wordLength
    }
  }

  return longestWord
}
const longestWord = findLongestWord(avengers)
console.log(longestWord)

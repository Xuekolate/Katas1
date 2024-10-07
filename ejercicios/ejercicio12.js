const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(duplicates) {
  for (let i = 0; i < duplicates.length; i++) {
    const vuelta1 = duplicates[i]

    for (let j = i + 1; j < duplicates.length; j++) {
      const vuelta2 = duplicates[j]

      if (vuelta1 === vuelta2) {
        duplicates.splice(j, 1)
        j--
      }
    }
  }
  console.log(duplicates)
}
removeDuplicates(duplicates)

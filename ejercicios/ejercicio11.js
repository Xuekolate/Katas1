const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(param) {
  let totalsum = 0
  let cuenta = 0

  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      totalsum += param[i]
    } else if (typeof param[i] === 'string') {
      totalsum += param[i].length
    }
    cuenta++
  }
  return totalsum / cuenta
}

console.log(averageWord(mixedElements))

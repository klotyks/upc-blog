// на вход должно приходить число.
// на выход должен уходить массив строк
// rankToClassNames
//3.5->['mdi-star','mdi-star','mdi-star','mdi-star-half-full',mdi-star-outline']

function subRankToClassName(x) {
  let doubleX = Math.round(x * 2) / 2
  const dict = {
    0: 'mdi-star-outline',
    0.5: 'mdi-star-half-full',
    1: 'mdi-star',
  }
  return dict[doubleX]
}

function arrayToClassNames(array) {
  return array.map(subRankToClassName)
}

function rankToArray(rank) {
  let a = Array.from(Array(Math.ceil(rank)), (_, idx) => rank - idx)
  a = a.map(x => (x > 1 ? 1 : x))
  a.push(...Array.from(Array(Math.ceil(5 - a.length))).fill(0))
  return a
}

const rankToClassNames = rank => arrayToClassNames(rankToArray(rank))

// const classNames = rankToClassNames(1.4)
// console.log(classNames)
// console.log(renderStarsRank(classNames))

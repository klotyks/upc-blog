// console.log((0.6).toFixed(2))

function subRankToClassName(x) {
  let doubleX = Math.round(x * 2) / 2
  const dict = {
    0: 'mdi-star-outline',
    0.5: 'mdi-star-half-full',
    1: 'mdi-star',
  }
  return dict[doubleX]
}

// function rankToClassNames(rank) {
//   let i = 5
//   const arr = []
//   let subRank = 5
//   while (subRank - rank) {

//   }
// }

let rank = 3.0
let arr = Array.from(Array(5), (_, idx) => (rank - idx < 0 ? 0 : rank - idx))
arr = arr.map(item => {
  const hasPoint = item.toString().includes('.')
  if (hasPoint) {
    return +('0.' + item.toString().split('.')[1])
  }
  return item
})
arr

// на вход должно приходить число.
// на выход должен уходить массив строк
//3.5->['mdi-star','mdi-star','mdi-star','mdi-star-half-full',mdi-star-outline']

// function generateRank(className) {
//   return `<span class="mdi ${className}"></span>`
// }

// function renderRank(classNames) {
//   return classNames.map(className => generateRank(className))
// }

// console.log(
//   renderRank([
//     'mdi-star',
//     'mdi-star',
//     'mdi-star',
//     'mdi-star-half-full',
//     'mdi-star-outline',
//   ]),
// )

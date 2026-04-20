console.log((0.6).toFixed(2))

function fn(x) {
  let doubleX = Math.round(x * 2) / 2
  const dict = {
    0: 'mdi-star-outline',
    0.5: 'mdi-star-half-full',
    1: 'mdi-star',
  }
  return dict[doubleX]
}

let r = fn(0)
r

r = fn(1)
r

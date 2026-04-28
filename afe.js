// arrow function expression

function sum(a, b) {
  return a + b
}

function multi(a, b) {
  return a * b
}

let result = sum(multi(2, 3), 4)
console.log(result)

const multiSum = (a, b, c) => sum(multi(a, b), c)

result = multiSum(2, 3, 4)
console.log(result)

// ООФ
// ОДЗ
const T = 3
console.log(Math.cos(T))

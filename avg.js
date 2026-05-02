let numbers = [1, 5, 3, 5, 1, 1, 5, 3, 5, 1]

function sum(arr) {
  let acc = 0
  let i = 0
  while (i < arr.length) {
    acc += arr[i]
    i = i + 1
  }
  return acc
}

console.log(sum(numbers))

console.log(sum(numbers) / numbers.length)

// let avg = numbers.legko()  numbers.length

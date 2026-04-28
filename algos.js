const subRanks = []
let rank = 0.5

while (rank > 1) {
  subRanks.push(1)
  rank = rank - 1
}
subRanks.push(rank)
let zeros = Array.from(Array(5 - subRanks.length))
zeros = zeros.map(() => 0)
subRanks.push(...zeros)
console.log(subRanks)

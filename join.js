let words = ['foo', 'bar', 'baz']

// метод массива. возвращает строку, склеенную через аргумент
let joinedWords = words.join(' > ')

// метод строки. возвращает массив, расклеенный, через разделитель в аргументе
let splittedWords = joinedWords.split('bar')

console.log()
console.log(joinedWords)
console.log(splittedWords)

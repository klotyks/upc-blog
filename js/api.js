async function getAllUsers() {
  // const response = await fetch('https://jsonplaceholder.typicode.com/' + url)
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const text = await response.text()
  return JSON.parse(text)
}

async function getPostsByUserId(userId) {
  // return await https://jsonplaceholder.typicode.com/posts?userId=4
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?userId=' + userId
  )
  const text = await response.text()
  return JSON.parse(text)
}

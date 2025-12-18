const API_URL = 'https://jsonplaceholder.typicode.com/'

async function getAllUsers() {
  const response = await fetch(`${API_URL}users`)
  const text = await response.text()
  const badUsers = JSON.parse(text)
  return badUsers.map(normalizeUser)
}

async function getAllComments() {
  const response = await fetch(`${API_URL}comments`)
  const text = await response.text()
  return JSON.parse(text)
}

async function getPostsByUserId(userId) {
  const response = await fetch(`${API_URL}posts?userId=${userId}`)
  const text = await response.text()
  return JSON.parse(text)
}
async function getCommentsByPostId(postId) {
  const response = await fetch(`${API_URL}comments?postId=${postId}`)
  const text = await response.text()
  return JSON.parse(text)
}

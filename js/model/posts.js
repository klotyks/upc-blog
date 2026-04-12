import { getCurrentUser } from './currentUser.js'

let posts = []

function createPost(dto) {
  if (!getCurrentUser()) {
    console.error('сначала войдите, а потом уже посты отправляйте')
    return null
  }
  return {
    id: Math.trunc(Math.random() * 10000),
    title: dto.title,
    body: dto.body,
    userId: getCurrentUser().id,
    rank: Math.trunc(Math.random() * 5 + 1),
  }
}

function setPosts(postsData) {
  posts = postsData
}

export function getPosts() {
  return [...posts]
}

export function addPost(dto) {
  const post = createPost(dto)
  if (!post) return null
  posts.push(post)
}

function removePostById(id) {
  posts = posts.filter(f => f.id !== id)
}

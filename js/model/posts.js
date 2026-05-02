// import { getCurrentUser } from './currentUser.js'

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
    // Math.random() * 5,
    rank: getCommentsByPostId(id).map(comment => comment.postRank),
    commentsCount: -1,
    author: currentUser.nickname,
  }
}

function setPosts(postsData) {
  posts = postsData
}

function getPosts() {
  return [...posts]
}

function addPost(dto) {
  const post = createPost(dto)
  if (!post) return null
  posts.push(post)
}

function removePostById(id) {
  posts = posts.filter(f => f.id !== id)
}

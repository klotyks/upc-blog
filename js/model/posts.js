let posts = []

function createPost(dto) {
  return {
    id: Math.trunc(Math.random() * 10000),
    title: dto.title,
    body: dto.body,
    userId: dto.userId,
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
  posts.push(post)
}

function removePostById(id) {
  posts = posts.filter(f => f.id !== id)
}

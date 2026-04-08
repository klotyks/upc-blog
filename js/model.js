let users = []
let posts = []
let comments = []

function createPost(dto, author, commentsCount) {
  return {
    id: dto.id,
    userId: dto.userId,
    title: dto.title,
    body: dto.body,
    author: author,
    commentsCount: commentsCount,
    rank: Math.trunc(Math.random()) * 5 + 1,
  }
}

function createComment() {
  return {
    userId: 1,
    text: '',
  }
}

function createUser() {
  return {
    id: 1,
    nickname: '',
  }
}

function addPost(dto, author, commentsCount) {
  const post = createPost(dto, author, commentsCount)
  posts.push(post)
}

function setUsers(usersData) {
  users = usersData
}
function setPosts(postsData) {
  posts = postsData
}
function setComments(commentsData) {
  comments = commentsData
}

function addUser(user) {
  users.push(user)
}

function addComment(comment) {
  comments.push(comment)
}

function removeUserById(id) {
  users = users.filter(f => f.id !== id)
}

function removeCommentById(id) {
  comments = comments.filter(f => f.id !== id)
}

function removePostById(id) {
  posts = posts.filter(f => f.id !== id)
}

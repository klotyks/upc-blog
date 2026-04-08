let users = []
let posts = []
let comments = []

function createPost(dto) {
  return {
    id: Math.trunc(Math.random() * 10000),
    title: dto.title,
    body: dto.body,
    userId: dto.userId,
    rank: Math.trunc(Math.random() * 5 + 1),
  }
}
function addPost(dto) {
  const post = createPost(dto)
  posts.push(post)
}

let x = Math.trunc(123.5)
x = Math.random()
x

function createComment(dto) {
  return {
    id: Math.trunc(Math.random() * 10000),
    userId: dto.user.id,
    postId: dto.post.id,
    text: dto.text,
  }
}
function createUser(dto) {
  return {
    id: Math.trunc(Math.random() * 10000),
    nickname: dto.nickname,
  }
}
function addUser(dto) {
  const user = createUser(dto)
  users.push(user)
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

addUser({ nickname: 'Alex' })
users

function postPostFromUserId(userId) {
  let dto = { title: 'Nuclear attack', body: 'Everything very bad', userId }
  addPost(dto)
}

postPostFromUserId(users[0].id)
posts

// let dto2 = { text: 'omg... we`re doomed!', user: user, post: post }
// let comment = createComment(dto2)

// comment
// posts

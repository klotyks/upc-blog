let users = []
let posts = []
let comments = []

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
function addPost(post) {
  posts.push(post)
}
function addComment(comment) {
  comments.push(comment)
}

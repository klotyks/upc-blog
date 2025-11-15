function onClickButtonGetPosts(e) {
  const elItemUser = e.target.closest('.item-user')
  const userId = elItemUser.dataset['userId']
  handleGetPostsByUserId(userId)
}
function onClickButtonGetAllUsers() {
  handleGetUsersAll()
}
function onClickButtonGetComments(e) {
  const elItemPost = e.target.closest('.item-post')
  const postId = elItemPost.dataset['postId']
  handleGetCommentsByPostId(postId)
}

function renderUsers(users) {
  elListUsers.innerHTML = ''
  users.forEach(user => (elListUsers.innerHTML += generateUser(user)))
}

function renderPosts(posts) {
  elListPosts.innerHTML = ''
  posts.forEach(post => (elListPosts.innerHTML += generatePost(post)))
}

function renderComments(comments) {
  elListComments.innerHTML = ''
  comments.forEach(
    comment => (elListComments.innerHTML += generateComment(comment))
  )
}

function generateUser(user) {
  return `
<li class="item-user" data-user-id=${user.id}>
  <div>
    <div>
      <b>${user.nickname}</b>    
    </div>
    <div>
      <i>${user.email}</i>
    </div>
    <div>
      <span>${user.city}</span>
    </div>
    <div>
      <u>${user.website}</u>
    </div>
  </div>
  <div class="wrap-button">
    <button onclick="onClickButtonGetPosts(event)">Get posts by userId</button>
  </div>
</li>
`
}
function generatePost(post) {
  return `
<li class="item-post" data-post-id=${post.id}>
  <span>
    <b><i>${post.title}</i></b>
  </span>
  <span>
    <b><i>${post.body}</i></b>
  </span>
  <div class="wrap-button">
    <button onclick="onClickButtonGetComments(event)">Get comments by postId</button>
  </div>
</li>
`
}

function generateComment(comment) {
  return `
<li class="item-comment">
  <span>
    <b><i>${comment.email}</i></b>
  </span>
  <span>
    <b><i>${comment.body}</i></b>
  </span>
</li>
`
}

const elButtonGetAllUsers = document.querySelector('#get-users')
elButtonGetAllUsers.onclick = onClickButtonGetAllUsers

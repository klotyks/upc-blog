function renderComments(users) {
  elListUsers.innerHTML = ''
  users.forEach(user => (elListUsers.innerHTML += generatePost(user)))
}

function renderComments(posts) {
  elListPosts.innerHTML = ''
  posts.forEach(post => (elListPosts.innerHTML += generatePost(post)))
}

function renderComments(comments) {
  elListComments.innerHTML = ''
  comments.forEach(
    comment => (elListComments.innerHTML += generateComment(comment))
  )
}

function generatePost(user) {
  return `
<li class="item-user">
  <div>
    <div>
      <b>${user.username}</b>    
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
    <button>Get posts</button>
  </div>
</li>
`
}
function generatePost(post) {
  return `
<li class="item-post">
  <span>
    <b><i>${post.title}</i></b>
  </span>
  <span>
    <b><i>${post.body}</i></b>
  </span>
  <div class="wrap-button">
    <button>Get comments</button>
  /div>
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

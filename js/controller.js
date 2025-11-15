async function handleGetPostsByUserId(userId) {
  const postsUsers = await getPostsByUserId(userId)
  setPosts(postsUsers)
  renderPosts(posts)
}

async function handleGetUsersAll() {
  const resultUsers = await getAllUsers()
  setUsers(resultUsers)
  renderUsers(users)
}

async function handleGetCommentsByPostId(postId) {
  const resultComments = await getCommentsByPostId(postId)
  setComments(resultComments)
  renderComments(comments)
}

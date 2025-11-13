function handleGetPostsByUserId(userId) {
  const posts = api.getPostsByUserId(userId)
  renderPosts(posts)
}

async function handleGetUsersAll() {
  const resultUsers = await getAllUsers()
  setUsers(resultUsers)
  renderUsers(users)
}

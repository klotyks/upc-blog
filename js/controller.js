async function handleGetPostsByUserId(userId) {
  const posts = await getPostsByUserId(userId)
  setPosts(posts)
  renderPosts(posts)
}

async function handleGetUsersAll() {
  const resultUsers = await getAllUsers()
  setUsers(resultUsers)
  renderUsers(users)
}

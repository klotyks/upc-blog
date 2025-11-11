function handleGetPostsByUserId(userId) {
  const posts = api.getPostsByUserId(userId)
  renderPosts(posts)
}

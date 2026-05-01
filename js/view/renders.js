function renderPostDetails(post) {
  const elItemPost = current_post.querySelector('.item-post')
  const elH2 = elItemPost.querySelector('h2')
  const elP = elItemPost.querySelector('p')
  const elPostInfo = elItemPost.querySelector('.post-info')
  const elAuthor = elPostInfo.querySelector('#post-author b i')
  const elCommentsCount = elPostInfo.querySelector('#comment-link b i')
  const elRank = elPostInfo.querySelectorAll('#post-rank > span > span')
  elItemPost.dataset.postId = 321
  elH2.textContent = 'foo'
  elP.textContent = 'foo'
  elAuthor.textContent = 'foo'
  elCommentsCount.textContent = '5'
  elRank.forEach(el => {
    el.classList.remove('mdi-star')
    el.classList.add('mdi-star-outline')
  })
}

function renderPagePosts(posts) {
  const elDivPosts = document.querySelector('.list-posts')
  elDivPosts.innerHTML = ''
  for (const post of posts) {
    elDivPosts.innerHTML += generatePost(post)
  }
}

function renderComments(comments) {
  const elDivComments = document.querySelector('.comments-list')
  elDivComments.setAttribute('id', 'display')
  elDivComments.innerHTML = ''
  for (const comment of comments) {
    elDivComments.innerHTML += generateFullComment(comment)
  }
}

function renderTextareaComment() {
  const elTextareaComment = document.querySelector('#textarea-comment')
  elTextareaComment.value = ''
}

function renderTextareaAddPost() {
  const elInputHeading = document.querySelector('#input-heading')
  const elTextareaText = document.querySelector('#textarea-text-post')
  elInputHeading.value = ''
  elTextareaText.value = ''
}

function renderSelectCurrentUser(users, currentUser) {
  elSelectCurrentUser.innerHTML = ''
  users.forEach(user => {
    const htmlOption = generateUserOption(user)
    elSelectCurrentUser.innerHTML += htmlOption
  })
  elSelectCurrentUser.value = currentUser?.nickname
}

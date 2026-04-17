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

// countComment
// commentCount

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
function renderSelectCurrentUser(users, currentUser) {
  elSelectCurrentUser.innerHTML = ''
  users.forEach(user => {
    const htmlOption = generateUserOption(user)
    elSelectCurrentUser.innerHTML += htmlOption
  })
  elSelectCurrentUser.value = currentUser?.nickname
}

renderSelectCurrentUser(users, currentUser)

function onChangeSelectCurrentUser(e) {
  console.log(e.target.value)
  switchCurrentUserByNickname(e.target.value)
}

elSelectCurrentUser.onchange = onChangeSelectCurrentUser

function onClickAddPost() {
  const elInputHeading = document.querySelector('#input-heading')
  const elTextareaText = document.querySelector('#textarea-text-post')
  const heading = elInputHeading.value
  const text = elTextareaText.value
  handleAddPost(heading, text)
}

function generatePost(post) {
  return `
<div class="item-post">
  <div class="post-content">
    <h2>${post.title}</h2>
    <p>
      ${post.body}
    </p>
  </div>
  <div>
    <div class="wide">
      <a href="#current_post"><button>Подробней...</button></a>
    </div>
    <div class="post-info row">
      <div>
        <span>Автор:</span>
        <b><i>${post.author}</i></b>
        <b>&nbsp;|&nbsp;</b>
      </div>
      <div>
        <span>Комментариев:</span>
        <b><i>3</i></b>
        <b>&nbsp;|&nbsp;</b>
      </div>
      <div>
        <span>Рейтинг: </span>
        <span>
          <span class="mdi mdi-star"></span>
          <span class="mdi mdi-star"></span>
          <span class="mdi mdi-star"></span>
          <span class="mdi mdi-star-half-full"></span>
          <span class="mdi mdi-star-outline"></span>
        </span>
      </div>
    </div>
  </div>
</div>`
}

function generateFullComment(comment) {
  return `
<div class="comments-item">
  <span><span class="mdi mdi-account"></span>${comment.userId}</span>
  <p>
    ${comment.text}
  </p>
  <div class="rating">
    <span class="mdi mdi-thumb-down-outline"></span>
    <span class="mdi mdi-thumb-up-outline"></span>
  </div>
</div>
  `
}

function generateUserOption(user) {
  return `
  <option>${user.nickname}</option>
  `
}

function onClickCommentA() {
  const elCommentA = document.querySelector('#comment-link')
  const elItemPost = elCommentA.closest('.item-post')
  const postId = elItemPost.dataset.postId
  console.log(elItemPost)
  // const elCommentsList = document.querySelector('.comments-list')
  handleShowComments(postId)
}

const elCommentA = document.querySelector('#comment-link')
elCommentA.onclick = onClickCommentA

const elButtonAddPost = document.querySelector('#add_post button')
elButtonAddPost.onclick = onClickAddPost

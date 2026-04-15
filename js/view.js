function renderPagePosts(posts) {
  const elDivPosts = document.querySelector('.list-posts')
  elDivPosts.innerHTML = ''
  for (const post of posts) {
    elDivPosts.innerHTML += generatePost(post)
  }
}
function renderComments(comments) {
  const elDivComments = document.querySelector('.comments-list')
  elDivComments.innerHTML = ''
  for (const comment of comments) {
    elDivComments.innerHTML += generateFullComment(comment)
  }
}
function renderSelectUsers() {
  const elSelectUsers = document.querySelector('#select-users')
  elSelectUsers.innerHTML = ''
}

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

function generateFullComment() {
  return `
  <div class="comments">
    <p>
      ${comments.body}
    </p>
  </div>
  `
}

function generateUserOption() {
  return `
  <option value="">${users.nickname}</option>
  `
}

function onClickCommentA() {
  const elCommentsList = document.querySelector('.comments-list')
  elCommentsList.setAttribute('id', 'display')
}

const elCommentA = document.querySelector('#comment-link')
elCommentA.onclick = onClickCommentA

const elButtonAddPost = document.querySelector('#add_post button')
elButtonAddPost.onclick = onClickAddPost

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
      <button>Подробней...</button>
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

function onClickCommentA() {
  const elCommentsList = document.querySelector('.comments-list')
  elCommentsList.setAttribute('id', 'display')
}

const elCommentA = document.querySelector('#comment-link')
elCommentA.onclick = onClickCommentA

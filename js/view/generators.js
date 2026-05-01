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
          ${generateStarsRank(post.rank)}
        </span>
      </div>
    </div>
  </div>
</div>`
}

function generateFullComment(comment) {
  return `
<div class="comments-item">
  <span><span class="mdi mdi-account"></span>${comment.nickname}</span>
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

function generateStarRank(className) {
  return `<span class="mdi ${className}"></span>`
}

function generateStarsRank(rank) {
  const classNames = rankToClassNames(rank)
  const html = classNames.map(generateStarRank).join('')
  return html
}

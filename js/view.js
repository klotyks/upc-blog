function generatePost(post) {
  return `
<div class="item-post">
  <div class="post-content">
    <h2>Шок!! Началось. Час назад совершилось не...</h2>
    <p>
      Час назад совершилось непридвиденное! Произошло то, чего никто не ожидал!
    </p>
  </div>
  <div>
    <div class="wide">
      <button>Подробней...</button>
    </div>
    <div class="post-info row">
      <div>
        <span>Автор:</span>
        <b><i>klotyks</i></b>
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

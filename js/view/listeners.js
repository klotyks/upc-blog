function onChangeSelectCurrentUser(e) {
  console.log(e.target.value)
  switchCurrentUserByNickname(e.target.value)
}

function onClickAddPost() {
  const elInputHeading = document.querySelector('#input-heading')
  const elTextareaText = document.querySelector('#textarea-text-post')
  const heading = elInputHeading.value
  const text = elTextareaText.value
  handleAddPost(heading, text)
}

function onClickAddComment() {
  const elInputNickname = document.querySelector('#label-nickname')
  const elTextareaComment = document.querySelector('#textarea-comment')
  const nickname = elInputNickname.value
  const comment = elTextareaComment.value
  handleAddComment(nickname, comment)
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

const elButtonAddComment = document.querySelector('#button-send-comment')
elButtonAddComment.onclick = onClickAddComment

elSelectCurrentUser.onchange = onChangeSelectCurrentUser

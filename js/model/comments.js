let comments = []

function createComment(dto) {
  return {
    id: Math.trunc(Math.random() * 10000),
    userId: dto.userId,
    postId: dto.postId,
    text: dto.text,
  }
}

function setComments(commentsData) {
  comments = commentsData
}

export function getComments() {
  return [...comments]
}

export function addComment(dto) {
  const comment = createComment(dto)
  comments.push(comment)
}

function removeCommentById(id) {
  comments = comments.filter(f => f.id !== id)
}

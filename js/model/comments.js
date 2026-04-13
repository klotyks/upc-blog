import { getCurrentUser } from './currentUser.js'
let comments = []

function createComment(dto) {
  return {
    id: Math.trunc(Math.random() * 10000),
    userId: getCurrentUser().id,
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
  if (!comment) return null
  comments.push(comment)
}

function removeCommentById(id) {
  comments = comments.filter(f => f.id !== id)
}

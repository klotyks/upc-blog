import { addComment, getComments } from './model/comments.js'
import { getPosts, addPost } from './model/posts.js'
import { addUser, getUsers } from './model/users.js'

let currentUser = null // куда запихнуть куррент юзера (кто залогинился)

addUser({ nickname: 'Alex' })
addUser({ nickname: 'John' })
addUser({ nickname: 'Bond' })

addPost({
  title: 'Nuclear attack',
  body: 'Everything very bad',
  userId: getUsers()[0].id,
})

addPost({
  title: 'Around moon',
  body: 'Everything very good',
  userId: getUsers()[1].id,
})

addComment({
  postId: getPosts()[0].id,
  userId: getUsers()[2].id,
  text: 'omg... we`re doomed!',
})

console.log(getUsers())
console.log(getPosts())
console.log(getComments())

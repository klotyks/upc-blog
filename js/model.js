import { addComment, getComments } from './model/comments.js'
import { switchCurrentUserByNickname } from './model/currentUser.js'
import { getPosts, addPost } from './model/posts.js'
import { addUser, getUsers } from './model/users.js'

addUser({ nickname: 'Alex' })
addUser({ nickname: 'John' })
addUser({ nickname: 'Bond' })

switchCurrentUserByNickname('Alex')

addPost({
  title: 'Nuclear attack',
  body: 'Everything very bad',
})

addPost({
  title: 'Around moon',
  body: 'Everything very good',
})

switchCurrentUserByNickname('John')

addPost({
  title: 'Lunonafts successfully landed to water',
  body: 'Awaiting first interview from canadian lunonaft',
})

// сделать чтоб Bond добавил комментарий к новости про Around moon

// addComment({
//   postId: getPosts()[0].id,
//   userId: currentUser.id,
//   text: 'omg... we`re doomed!',
// })

console.log(getUsers())
console.log(getPosts())
console.log(getComments())

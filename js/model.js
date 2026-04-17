// import { switchCurrentUserByNickname } from './model/currentUser.js'
// import { getComments, addComment } from './model/comments.js'
// import { getPosts, addPost } from './model/posts.js'
// import { getUsers, addUser } from './model/users.js'

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

addComment({
  postId: getPosts()[1].id,
  text: 'omg... we`re doomed!',
})

addComment({
  postId: getPosts()[1].id,
  text: 'omg2... we`re doomed2!',
})

console.log(getUsers())
console.log(getPosts())
console.log(getComments())

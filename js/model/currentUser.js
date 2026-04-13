// import { getUsers } from './users.js'

let currentUser = null // куда запихнуть куррент юзера (кто залогинился)

function switchCurrentUserByNickname(nickname) {
  currentUser = getUsers().find(u => u.nickname === nickname) ?? null
}

function getCurrentUser() {
  return currentUser
}

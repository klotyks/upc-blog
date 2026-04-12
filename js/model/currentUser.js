import { getUsers } from './users.js'

let currentUser = null // куда запихнуть куррент юзера (кто залогинился)

export function switchCurrentUserByNickname(nickname) {
  currentUser = getUsers().find(u => u.nickname === nickname) ?? null
}

export function getCurrentUser() {
  return currentUser
}

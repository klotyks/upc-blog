let users = []

function createUser(dto) {
  return {
    id: Math.trunc(Math.random() * 10000),
    nickname: dto.nickname,
  }
}

function setUsers(usersData) {
  users = usersData
}

function getUsers() {
  return [...users]
}

function addUser(dto) {
  const user = createUser(dto)
  if (users.some(u => u.nickname === user.nickname)) return
  users.push(user)
}

function removeUserById(id) {
  users = users.filter(f => f.id !== id)
}

// function changeNicknameById(id, newNickname) {
//   const user = users.find(u => u.id === id)
//   user.nickname = newNickname
// }

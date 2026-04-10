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

export function getUsers() {
  return [...users]
}

export function addUser(dto) {
  const user = createUser(dto)
  users.push(user)
}

function removeUserById(id) {
  users = users.filter(f => f.id !== id)
}

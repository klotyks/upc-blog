function renderUsers(users) {
  elListUsers.innerHTML = ''
  users.forEach(user => (elListUsers.innerHTML += generateUser(user)))
}

function generateUser(user) {
  return `
<li class="item-user">
  <div>
    <div>
      <b>${user.username}</b>    
    </div>
    <div>
      <i>${user.email}</i>
    </div>
    <div>
      <span>${user.city}</span>
    </div>
    <div>
      <u>${user.website}</u>
    </div>
  </div>
  <div class="wrap-button">
    <button>Get posts</button>
  </div>
</li>
`
}

function normalizeUser(badUser) {
  let goodUser = {
    id: badUser.id,
    nickname: badUser.username,
    email: badUser.email,
    city: badUser.address.city,
    phone: badUser.phone,
    website: badUser.website,
  }
  return goodUser
}

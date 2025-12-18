async function handleGetPostsByUserId(userId) {
  const dtos = await getPostsByUserId(userId)
  const user = await getUserById(userId)

  dtos.forEach(async dto => {
    const comments = await getCommentsByPostId(dto.id)
    addPost(dto, user.username, comments.length)
  })

  renderPagePosts(posts)
}

async function handleGetUsersAll() {
  const resultUsers = await getAllUsers()
  setUsers(resultUsers)
  renderUsers(users)
}

async function handleGetCommentsByPostId(postId) {
  const resultComments = await getCommentsByPostId(postId)
  setComments(resultComments)
  renderComments(comments)
}

renderPagePosts([
  {
    id: 81,
    userId: 9,
    title: 'tempora rem veritatis voluptas quo dolores vero',
    body: 'facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut',
    author: 'Delphine',
    commentsCount: 5,
    rank: 1,
  },
  {
    id: 83,
    userId: 9,
    title: 'odit et voluptates doloribus alias odio et',
    body: 'est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreprehenderit eius rem quibusdam',
    author: 'Delphine',
    commentsCount: 5,
    rank: 1,
  },
  {
    id: 84,
    userId: 9,
    title:
      'optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut',
    body: 'sint molestiae magni a et quos\neaque et quasi\nut rerum debitis similique veniam\nrecusandae dignissimos dolor incidunt consequatur odio',
    author: 'Delphine',
    commentsCount: 5,
    rank: 1,
  },
  {
    id: 85,
    userId: 9,
    title: 'dolore veritatis porro provident adipisci blanditiis et sunt',
    body: 'similique sed nisi voluptas iusto omnis\nmollitia et quo\nassumenda suscipit officia magnam sint sed tempora\nenim provident pariatur praesentium atque animi amet ratione',
    author: 'Delphine',
    commentsCount: 5,
    rank: 1,
  },
  {
    id: 87,
    userId: 9,
    title: 'nostrum quis quasi placeat',
    body: 'eos et molestiae\nnesciunt ut a\ndolores perspiciatis repellendus repellat aliquid\nmagnam sint rem ipsum est',
    author: 'Delphine',
    commentsCount: 5,
    rank: 1,
  },
  {
    id: 90,
    userId: 9,
    title: 'ad iusto omnis odit dolor voluptatibus',
    body: 'minus omnis soluta quia\nqui sed adipisci voluptates illum ipsam voluptatem\neligendi officia ut in\neos soluta similique molestias praesentium blanditiis',
    author: 'Delphine',
    commentsCount: 5,
    rank: 1,
  },
  {
    id: 88,
    userId: 9,
    title: 'sapiente omnis fugit eos',
    body: 'consequatur omnis est praesentium\nducimus non iste\nneque hic deserunt\nvoluptatibus veniam cum et rerum sed',
    author: 'Delphine',
    commentsCount: 5,
    rank: 1,
  },
  {
    id: 82,
    userId: 9,
    title: 'laudantium voluptate suscipit sunt enim enim',
    body: 'ut libero sit aut totam inventore sunt\nporro sint qui sunt molestiae\nconsequatur cupiditate qui iste ducimus adipisci\ndolor enim assumenda soluta laboriosam amet iste delectus hic',
    author: 'Delphine',
    commentsCount: 5,
    rank: 1,
  },
  {
    id: 86,
    userId: 9,
    title: 'placeat quia et porro iste',
    body: 'quasi excepturi consequatur iste autem temporibus sed molestiae beatae\net quaerat et esse ut\nvoluptatem occaecati et vel explicabo autem\nasperiores pariatur deserunt optio',
    author: 'Delphine',
    commentsCount: 5,
    rank: 1,
  },
  {
    id: 89,
    userId: 9,
    title: 'sint soluta et vel magnam aut ut sed qui',
    body: 'repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est',
    author: 'Delphine',
    commentsCount: 5,
    rank: 1,
  },
])

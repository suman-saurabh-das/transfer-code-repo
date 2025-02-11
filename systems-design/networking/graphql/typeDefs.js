// Schema/Type tells us about - How the data will look like &
// What data we can query (GET) / mutation (UPDATE).

export const typeDefs = `
  # graphql - this is a comment.

  type Author {
    id: ID!         # this field is mandatory hence we added !
    name: String!
    books: [Book]
  }

  type Book {
    id: ID!
    title: String!
    publishedYear: Int
    author: Author
  }

  # All methods for fetching data (GET) must be defined inside type Query
  type Query {
    authors: [Author]   # We are expecting a list of multiple Author
    books: [Book]       # We are expecting a list of multiple Book
  }

  # All methods for modifying data (UPDATE) must be defined inside type Mutation
  type Mutation {
    addBook(title: String!, publishedYear: Int, authorId: ID!): Book!
  }
`
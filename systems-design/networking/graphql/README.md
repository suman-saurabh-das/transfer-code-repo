### Requirements

#### Structure of the data that will reside in the server
  book {
    id,
    title,
    publishedYear,
    author
  }

  author {
    id,
    name,
    books
  }

#### Data to be fetched using the client
  - List of books.
  - List of authors.
  - List of books with author details.
  - List of author with book details.

// Resolvers are the function implementation of the query and mutation.

const data = {
  authors: [
    { id: 1, name: "Markus Zusak", bookIds: [101, 102] },
    { id: 2, name: "Betty Smith", bookIds: [103] },
  ],
  books: [
    { id: 101, title: "The Book Thief", publishedYear: 2005, authorId: 1 },
    { id: 102, title: "Bridge of Clay", publishedYear: 2018, authorId: 1 },
    { id: 103, title: "A Tree Grows in Brooklyn", publishedYear: 1943, authorId: 2 },
  ],
};

export const resolvers = {
  Query: {
    authors: (parent, args, context, info) => {
      return data.authors;
    },
    books: (parent, args, context, info) => {
      return data.books;
    },
  },
  Book: {
    author: (parent, args, context, info) => {
      return data.authors.find(authorDetails => authorDetails.id === parent.authorId);
    }
  },
  Author: {
    books: (parent, args, context, info) => {
      return data.books.filter(bookDetails => parent.bookIds.includes(bookDetails.id));
    }
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
      const newBook = {...args, id: data.books.length + 1};
      data.books.push(newBook)
      return newBook;
    }
  }
};

import BookDb from "../db";
import makePaginatedBooks from "./getPaginatedBooks";
// types from db
export type getBooks = typeof BookDb.getBooks;

const getPaginatedBooks = makePaginatedBooks({
  getPaginatedBooks: BookDb.getBooks,
});

// types for use cases
export type getPaginatedBooksType = typeof getPaginatedBooks;

const bookServices = Object.freeze({ getPaginatedBooks });

export default bookServices;

export { getPaginatedBooks };

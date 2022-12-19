import BookDb from "../db";
import makeGetBooksByTitle from "./getBooksByTitle";
import makePaginatedBooks from "./getPaginatedBooks";

const getPaginatedBooks = makePaginatedBooks({
  getPaginatedBooks: BookDb.getBooks,
});

// types for use cases
export type getPaginatedBooksType = typeof getPaginatedBooks;

const bookServices = Object.freeze({ getPaginatedBooks });

export default bookServices;

export { getPaginatedBooks };

import BookDb from "../db";
import makePaginatedBooks from "./getPaginatedBooks";
// types
export type getBooks = typeof BookDb.getBooks;

const getPaginatedBooks = makePaginatedBooks({
  getPaginatedBooks: BookDb.getBooks,
});

const bookServices = Object.freeze({ getPaginatedBooks });

export default bookServices;

export { getPaginatedBooks };

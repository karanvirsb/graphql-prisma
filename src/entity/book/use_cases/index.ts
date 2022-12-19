import BookDb from "../db";
import makeGetBooksByTitle from "./getBooksByTitle";
import makePaginatedBooks from "./getPaginatedBooks";

const getPaginatedBooks = makePaginatedBooks({
  getPaginatedBooks: BookDb.getBooks,
});

const getBooksByTitleUseCase = makeGetBooksByTitle({
  getBooksByTitle: BookDb.getBooksByTitle,
});

// types for use cases
export type getPaginatedBooksType = typeof getPaginatedBooks;
export type getBooksByTitleType = typeof getBooksByTitleUseCase;

const bookServices = Object.freeze({
  getPaginatedBooks,
  getBooksByTitleUseCase,
});

export default bookServices;

export { getPaginatedBooks, getBooksByTitleUseCase };

import BookDb from "../db";
import makeGetABookById from "./getABookById";
import makeGetBooksByTitle from "./getBooksByTitle";
import makePaginatedBooks from "./getPaginatedBooks";

const getPaginatedBooks = makePaginatedBooks({
  getPaginatedBooks: BookDb.getBooks,
});

const getBooksByTitleUseCase = makeGetBooksByTitle({
  getBooksByTitle: BookDb.getBooksByTitle,
});

const getABookByIdUseCase = makeGetABookById({
  getABookById: BookDb.getABookById,
});

// types for use cases
export type getPaginatedBooksType = typeof getPaginatedBooks;
export type getBooksByTitleType = typeof getBooksByTitleUseCase;
export type getABookByIdUseCaseType = typeof getABookByIdUseCase;

const bookServices = Object.freeze({
  getPaginatedBooks,
  getBooksByTitleUseCase,
  getABookByIdUseCase,
});

export default bookServices;

export { getPaginatedBooks, getBooksByTitleUseCase, getABookByIdUseCase };

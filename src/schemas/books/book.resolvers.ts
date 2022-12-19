import { fields } from "..";
import {
  getPaginatedBooks,
  getBooksByTitleUseCase,
  getABookByIdUseCase,
} from "../../entity/book/use_cases";
import { getBooksResolver } from "./getBooks.resolver";
import { getBooksByTitleResolver } from "./getBooksByTitle.resolver";
import { getABookByIdResolver } from "./getABookById.resolver";

// creating the resolvers
const getBooks = getBooksResolver({ getPaginatedBooks });
const getBooksByTitle = getBooksByTitleResolver({
  getBooksByTitle: getBooksByTitleUseCase,
});
const getABookById = getABookByIdResolver({
  getABookById: getABookByIdUseCase,
});

export const BookResolver: fields = {
  getBooks,
  getBooksByTitle,
  getABookById,
};

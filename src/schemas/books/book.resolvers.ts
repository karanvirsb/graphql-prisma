import { GraphQLInt } from "graphql";
import { fields } from "..";
import prisma from "../../../prisma";
import { BookType } from "./typeDef";
import {
  getPaginatedBooks,
  getBooksByTitleUseCase,
} from "../../entity/book/use_cases";
import { getBooksResolver } from "./getBooks.resolver";
import { getBooksByTitleResolver } from "./getBooksByTitle.resolver";

// creating the resolvers
const getBooks = getBooksResolver({ getPaginatedBooks });
const getBooksByTitle = getBooksByTitleResolver({
  getBooksByTitle: getBooksByTitleUseCase,
});

export const BookResolver: fields = {
  getBooks,
  getBooksByTitle,
  getABookById: {
    type: BookType,
    args: { id: { type: GraphQLInt } },
    async resolve(parent: any, args: any) {
      const { id } = args;
      const resp = await prisma.book.findFirst({
        where: { id: { equals: id } },
        include: { author: true, libraries: true, publisher: true },
      });
      return resp;
    },
  },
};

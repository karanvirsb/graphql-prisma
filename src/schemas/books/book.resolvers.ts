import { GraphQLInt, GraphQLList, GraphQLString } from "graphql";
import { fields } from "..";
import prisma from "../../../prisma";
import { BookType } from "./typeDef";
import { getPaginatedBooks } from "../../entity/book/use_cases";
import { getBooksResolver } from "./getBooks.resolver";

// creating the resolvers
const getBooks = getBooksResolver({ getPaginatedBooks });

export const BookResolver: fields = {
  getBooks,
  getBooksByTitle: {
    type: new GraphQLList(BookType),
    args: {
      title: { type: GraphQLString },
      page: { type: GraphQLInt },
      limit: { type: GraphQLInt },
    },
    async resolve(parent: any, args: any) {
      const { title, limit, page } = args;
      return await prisma.book.findMany({
        where: { title: { contains: title } },
        take: limit,
        skip: page * limit,
        orderBy: {
          title: "asc",
        },
      });
    },
  },
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

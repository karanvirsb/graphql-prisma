import { GraphQLInt, GraphQLList, GraphQLString } from "graphql";
import { resolve } from "path";
import { fields } from "..";
import prisma from "../../../prisma";
import { BookType } from "./typeDef";

export const BookResolver: fields = {
  getBooks: {
    type: new GraphQLList(BookType),
    args: { limit: { type: GraphQLInt }, page: { type: GraphQLInt } },
    async resolve(parent: any, args: any) {
      const { limit, page } = args;
      // skip: 0 * 10 = 0, 1 * 10 = 10
      return await prisma.book.findMany({
        skip: page * limit,
        take: limit,
        orderBy: { title: "asc" },
        include: {
          author: true,
          publisher: true,
          libraries: true,
        },
      });
    },
  },
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

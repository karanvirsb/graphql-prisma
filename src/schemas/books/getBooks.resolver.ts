import { GraphQLList, GraphQLInt } from "graphql";
import { getPaginatedBooksType } from "../../entity/book/use_cases";
import { BookType } from "./typeDef";

export function getBooksResolver({
  getPaginatedBooks,
}: {
  getPaginatedBooks: getPaginatedBooksType;
}) {
  return {
    type: new GraphQLList(BookType),
    args: { limit: { type: GraphQLInt }, page: { type: GraphQLInt } },
    async resolve(parent: any, args: any) {
      // skip: 0 * 10 = 0, 1 * 10 = 10
      return getPaginatedBooks(args);
    },
  };
}

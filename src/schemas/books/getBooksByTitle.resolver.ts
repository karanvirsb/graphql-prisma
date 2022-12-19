import { GraphQLList, GraphQLString, GraphQLInt } from "graphql";
import { getBooksByTitleType } from "../../entity/book/use_cases";
import { BookType } from "./typeDef";

export function getBooksByTitleResolver({
  getBooksByTitle,
}: {
  getBooksByTitle: getBooksByTitleType;
}) {
  return {
    type: new GraphQLList(BookType),
    args: {
      title: { type: GraphQLString },
      page: { type: GraphQLInt },
      limit: { type: GraphQLInt },
    },
    async resolve(parent: any, args: any) {
      return await getBooksByTitle(args);
    },
  };
}

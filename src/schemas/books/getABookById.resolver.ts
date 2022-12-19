import { GraphQLInt } from "graphql";
import { getABookByIdUseCaseType } from "../../entity/book/use_cases";
import { BookType } from "./typeDef";

export function getABookByIdResolver({
  getABookById,
}: {
  getABookById: getABookByIdUseCaseType;
}) {
  return {
    type: BookType,
    args: { id: { type: GraphQLInt } },
    async resolve(parent: any, args: any) {
      return await getABookById(args);
    },
  };
}

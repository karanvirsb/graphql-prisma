import { GraphQLInt, GraphQLList, GraphQLString } from "graphql";
import { fields } from "..";
import prisma from "../../../prisma";
import { AuthorType } from "./typedef";

export const AuthorResolver: fields = {
  getAllAuthors: {
    type: new GraphQLList(AuthorType),
    args: { limit: { type: GraphQLInt }, cursor: { type: GraphQLInt } },
    async resolve(parent: any, args: any) {
      const { limit, cursor } = args;
      return await prisma.author.findMany({
        take: limit,
        skip: 1, // skip the cursor
        cursor: { id: cursor },
        orderBy: { id: "asc" },
      });
    },
  },
};

import { GraphQLList } from "graphql";
import prisma from "../../../prisma";
import { AuthorType } from "./typedef";

export const AuthorResolver = {
  getAllAuthors: {
    type: new GraphQLList(AuthorType),
    args: {},
    resolve(parent: any, args: any) {
      return prisma.author.findMany();
    },
  },
};

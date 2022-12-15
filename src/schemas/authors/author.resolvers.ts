import { GraphQLList } from "graphql";
import { fields } from "..";
import prisma from "../../../prisma";
import { AuthorType } from "./typedef";

export const AuthorResolver: fields = {
  getAllAuthors: {
    type: new GraphQLList(AuthorType),
    args: {},
    resolve(parent: any, args: any) {
      return prisma.author.findMany();
    },
  },
};
